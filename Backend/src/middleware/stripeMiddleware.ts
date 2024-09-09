import { Request, Response, NextFunction } from 'express';


declare module 'express-serve-static-core' {
    interface Request {
      rawBody?: string;
    }
  }
  


  // Middleware to capture the raw body for Stripe webhook verification
  export function stripeMiddleware(req: Request, res: Response, next: NextFunction) {
    req.rawBody = ''; // Initialize rawBody
  
    req.on('data', (chunk) => {
      req.rawBody += chunk;
    });
  
    req.on('end', () => {
      next(); // Continue processing the request
    });
  }
  