import { Request, Response, NextFunction } from "express";
import PaymentService from "../services/implementations/PaymentService";
import { IPaymentService } from "../services/interface/IPaymentService";
import stripeConfig from "../config/stripe";
import stripe from "stripe";
import { ApiError } from "../middleware/errorHandler";
import ApiResponse from "../utils/ApiResponse";

class PaymentController {
  private paymentService: IPaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  // Helper function to handle Stripe error types
  private handleStripeError = (error: any, res: Response, next: NextFunction) => {
    if (error.type === "StripeInvalidRequestError" && error.code === "payment_intent_unexpected_state") {
      res.status(400).json({
        error: "This PaymentIntent has already succeeded and cannot be confirmed again.",
      });
    } else if (error.type === "StripeInvalidRequestError" && error.code === "resource_missing") {
      res.status(404).json(new ApiError(404, "PaymentIntent not found", "This PaymentIntent does not exist"));
    } else {
      next(error);
    }
  };

  public createCheckoutSession = async (req: Request, res: Response, next: NextFunction) => {
    const { priceId } = req.body;

    try {
      const checkoutSession = await this.paymentService.createCheckoutSession(priceId);
      res.json({ id: checkoutSession.id });
    } catch (error) {
      next(error);
    }
  };

  public createSubscription = async (req: Request, res: Response, next: NextFunction) => {
    const { paymentMethodId, priceId, customerEmail } = req.body;

    try {
      // Create a customer
      const customer = await stripeConfig.customers.create({
        email: customerEmail,
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });

      // Create a subscription
      const subscription = await stripeConfig.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        expand: ["latest_invoice.payment_intent"],
        payment_behavior: "default_incomplete",
        payment_settings: {
          save_default_payment_method: "on_subscription",
          payment_method_options: {
            card: {
              request_three_d_secure: "any",
            },
          },
        },
      });

      const latestInvoice = subscription.latest_invoice as stripe.Invoice;
      const paymentIntent = latestInvoice.payment_intent as stripe.PaymentIntent;

      if (paymentIntent.status === "succeeded") {
        return res.json({
          message: "Payment already succeeded.",
          clientSecret: paymentIntent.client_secret,
        });
      }

      const confirmedPaymentIntent = await stripeConfig.paymentIntents.confirm(paymentIntent.id);
      res.status(200).json(
        new ApiResponse(200, {
          clientSecret: confirmedPaymentIntent.client_secret,
          latestInvoice,
          confirmedPaymentIntent,
        }, "success")
      );
    } catch (error) {
      this.handleStripeError(error, res, next);
    }
  };

  public updatePaymentStatus = async (req: Request, res: Response, next: NextFunction) => {
    const { paymentData, user, stripeResponse } = req.body;

    if (!paymentData || !user) {
      return res.status(500).json(new ApiError(500, "Input error", "Invalid data"));
    }

    try {
      const paymentIntent = await stripeConfig.paymentIntents.retrieve(paymentData.paymentIntent.id);

      if (paymentIntent.status !== "succeeded") {
        return res.status(400).json(new ApiError(400, "Invalid payment intent", "Payment is not in succeeded state"));
      }
      console.log(user,stripeResponse);
      
      // Update the subscription status in the database
      await this.paymentService.updateSubscriptionStatus(paymentData.paymentIntent, user, stripeResponse.latestInvoice);

      res.json({ message: "Payment status updated successfully" });
    } catch (error) {
      this.handleStripeError(error, res, next);
    }
  };
}

export default new PaymentController();
