import { c as createLucideIcon, ah as useStripe, ai as useElements, r as reactExports, u as useSelector, j as jsxRuntimeExports, aj as FaCheck, ag as ReactLoading, ak as PRIMARY_COLOR, al as CardElement, y as _t, am as createPaymentIntentForBooking, an as updateBookingStatus, R as React, af as useNavigate, ao as FaCheckCircle, x as getAvailableSeats, w as getSingleWorkspace, i as useParams, a as useDispatch, ap as useSearchParams, s as setLoading, aq as reserveSeatAPI, A as AnimatedPage, H as Header, F as Footer } from "./index-CTy2qHgP.js";
import { M as Modal, B as Box, S as SvgIcon, T as Typography } from "./Modal-mOoAhFB-.js";
import { s as spacer_default } from "./chunk-IXXDDLGU-DBbut_dk.js";
import "tslib";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const BookingPaymentForm = ({ bookingDetails, onSuccess, onFinish }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = reactExports.useState(null);
  const [processing, setProcessing] = reactExports.useState(false);
  const [succeeded, setSucceeded] = reactExports.useState(false);
  const user = useSelector((state) => state.user.user);
  const [isPaymentStarted, setIsPaymentStarted] = reactExports.useState(false);
  const [paymentSuccess, setPaymentSuccess] = reactExports.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    _t("Processing your booking, please do not close this tab or refresh the page.");
    setProcessing(true);
    try {
      if (!stripe || !elements) {
        return;
      }
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });
      const response = await createPaymentIntentForBooking(bookingDetails.seatId, bookingDetails.workspaceId, bookingDetails.date);
      const stripeResponse = response == null ? void 0 : response.data.data.paymentIntent;
      const { client_secret } = stripeResponse;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: paymentMethod == null ? void 0 : paymentMethod.id
      });
      if (result.error) {
        setError("Payment failed, please try again");
        _t.error("Payment failed, please try again");
        setProcessing(false);
        setPaymentSuccess(false);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setIsPaymentStarted(true);
          await updateBookingStatus(result, user, { ...bookingDetails, date: new Date(bookingDetails.date) }, stripeResponse);
          setSucceeded(true);
          _t.success("Booking Payment Successful");
          setIsPaymentStarted(false);
          setPaymentSuccess(true);
          onSuccess();
          onFinish();
        } else {
          _t.error("Payment Failed, Please Try Again");
        }
      }
      setProcessing(false);
    } catch (error2) {
      console.error(error2);
      setProcessing(false);
      _t.error("Payment Failed, Please Try Again");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isPaymentStarted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex flex-col justify-center items-center max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md sm:px-6 md:px-8", children: [
    paymentSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaCheck, { className: "h-12 w-12 text-green-500 mb-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReactLoading,
      {
        type: "spinningBubbles",
        color: PRIMARY_COLOR,
        height: 100,
        width: 100
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg font-semibold", children: paymentSuccess ? "Payment Successful" : "Processing your booking, please do not close this tab or refresh the page." }),
    paymentSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onFinish, className: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: " Close " })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md sm:px-6 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-center text-blue-600", children: "Complete Your Booking" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Email Address"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            id: "email",
            value: bookingDetails.customerEmail,
            onChange: (e) => bookingDetails.customerEmail = e.target.value,
            className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardElement,
        {
          options: {
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4"
                }
              },
              invalid: {
                color: "#9e2146"
              }
            }
          },
          className: "py-2"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Amount:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg text-blue-500", children: [
          "$",
          bookingDetails.amount.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: !stripe || processing,
          className: "w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150",
          children: processing ? "Processing..." : "Pay Now"
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 items-center justify-center flex", children: error }),
      succeeded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-500", children: "Booking payment succeeded!" })
    ] })
  ] }) });
};
const PaymentSuccessModal = ({
  visible,
  onClose,
  bookingDetails
}) => {
  const [seat, setSeat] = React.useState();
  const [workspace, setWorkspace] = React.useState({});
  const navigate = useNavigate();
  const { seatId, workspaceId } = bookingDetails;
  reactExports.useEffect(() => {
    const fetchSeat = async () => {
      try {
        const response = await getAvailableSeats(workspaceId);
        const seats = response == null ? void 0 : response.data.data;
        const seatData = seats.filter((seat2) => seat2._id === seatId)[0];
        if ((response == null ? void 0 : response.status) === 200) {
          setSeat(seatData);
          ;
        }
      } catch (error) {
        console.error(error);
      }
    };
    const getWorkspace = async () => {
      try {
        const response = await getSingleWorkspace(workspaceId);
        setWorkspace(response == null ? void 0 : response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    const timeout = () => {
      setTimeout(() => {
        navigate("/user/home");
      }, 5e3);
    };
    fetchSeat();
    getWorkspace();
    timeout();
  }, [navigate, seatId, workspaceId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      open: visible,
      onClose,
      "aria-labelledby": "modal-title",
      "aria-describedby": "modal-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            p: 4,
            background: "linear-gradient(135deg, #fcefe7 0%, #f3e7e1 100%)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 1.5
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SvgIcon,
                    {
                      component: FaCheckCircle,
                      inheritViewBox: true,
                      fontSize: "large",
                      sx: { color: "#28a745", fontSize: "3rem" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      id: "modal-title",
                      variant: "h5",
                      sx: { fontWeight: "bold", color: "#333" },
                      children: "Booking Successful"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  textAlign: "center"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body1", sx: { color: "#555" }, children: [
                    "Your booking for seat",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        component: "span",
                        sx: { fontWeight: "bold", color: "#333" },
                        children: `Seat : ${seat == null ? void 0 : seat.seatNumber} - Table : ${seat == null ? void 0 : seat.tableNumber}`
                      }
                    ),
                    " ",
                    "at workspace",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        component: "span",
                        sx: { fontWeight: "bold", color: "#333" },
                        children: workspace == null ? void 0 : workspace.buildingName
                      }
                    ),
                    " ",
                    "on",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Typography,
                      {
                        component: "span",
                        sx: { fontWeight: "bold", color: "#333" },
                        children: bookingDetails.date
                      }
                    ),
                    " ",
                    "has been successful."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Typography,
                    {
                      variant: "body1",
                      sx: { color: "#ff6f00", fontWeight: "bold" },
                      children: [
                        "Amount Paid: ₹ ",
                        bookingDetails.amount.toFixed(2)
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(spacer_default, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-red-500  text-sm mt-5", children: "You will be redirected to the dashboard shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-slate-500  text-xs mt-1", children: "Check your email for more details or visit profile page" })
          ]
        }
      )
    }
  );
};
const BookingPaymentPage = () => {
  const [couponCode, setCouponCode] = reactExports.useState("");
  const [timeLeft, setTimeLeft] = reactExports.useState(300);
  const [workspace, setWorkspace] = reactExports.useState();
  const [amount, setAmount] = reactExports.useState(0);
  const [paymentModal, setPaymentModal] = reactExports.useState(false);
  const [paymentSuccess, setPaymentSuccess] = reactExports.useState(false);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const timerId = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const seatId = searchParams.get("seatId");
  const seat = searchParams.get("seat");
  const date = searchParams.get("date");
  reactExports.useEffect(() => {
    const startTimer = () => {
      timerId.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId.current);
            navigate(-1);
            _t.error("Seat reservation timed out. Please try again later.");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1e3);
    };
    const fetchAvailableSeats = async (id2) => {
      try {
        dispatch(setLoading(true));
        const [workspaceResponse, seatsAvailableResponse] = await Promise.all([
          getSingleWorkspace(id2),
          getAvailableSeats(id2)
        ]);
        if ((workspaceResponse == null ? void 0 : workspaceResponse.status) === 200 && (seatsAvailableResponse == null ? void 0 : seatsAvailableResponse.status) === 200) {
          setWorkspace(workspaceResponse.data.data);
          setAmount(workspaceResponse.data.data.pricePerSeat);
        }
      } catch (error) {
        console.error(error);
        _t.error("An error occurred. Please try again.");
      } finally {
        dispatch(setLoading(false));
      }
    };
    const reserveSeat = async () => {
      try {
        const response = await reserveSeatAPI(
          seatId,
          id,
          date
        );
        if ((response == null ? void 0 : response.status) === 403) {
          navigate("/user/bookings");
        }
        if ((response == null ? void 0 : response.status) === 404) {
          _t.error("The seat is already reserved.");
          navigate("/workspace");
        }
      } catch (error) {
        console.error(error);
        _t.error("Failed to reserve seat. Please try again.");
      }
    };
    fetchAvailableSeats(id);
    reserveSeat();
    startTimer();
    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, [date, dispatch, id, navigate, seatId]);
  const closePaymentModal = () => {
    setPaymentModal(false);
  };
  const handleSuccess = () => {
    setPaymentSuccess(true);
    clearInterval(timerId.current);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    paymentSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaymentSuccessModal,
      {
        visible: true,
        onClose: closePaymentModal,
        bookingDetails: {
          seatId,
          workspaceId: workspace == null ? void 0 : workspace._id,
          date: date ?? "",
          amount
        }
      }
    ),
    paymentModal && user && user.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity backdrop:blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingPaymentForm,
      {
        onSuccess: handleSuccess,
        onFinish: closePaymentModal,
        bookingDetails: {
          amount,
          customerEmail: user.email,
          userId: user._id,
          seatId,
          workspaceId: id,
          date
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto p-4 dark:bg-gray-800 shadow-lg rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-200 flex items-center mb-6 dark:bg-gray-700 rounded-lg p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArrowLeft,
          {
            onClick: () => navigate(-1),
            className: "w-6 h-6 mr-2 cursor-pointer text-orange-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg font-semibold text-gray-800 dark:text-white", children: [
          workspace ? workspace.buildingName : "Loading...",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 dark:text-gray-300", children: [
            " ",
            "- ",
            workspace ? workspace.state : "Loading..."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-500", children: [
          "Time left: ",
          formatTime(timeLeft)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "Don't refresh this page or it will expire" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-800 dark:text-white", children: "Booking Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " dark:bg-gray-700 p-4 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Selected Seat:" }),
              " ",
              seat
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Date:" }),
              " ",
              date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Timing:" }),
              " 2:00 PM - 4:00 PM"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-800 dark:text-white", children: "Booking Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 dark:bg-gray-700 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: seat }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "RS : ",
                workspace == null ? void 0 : workspace.pricePerSeat
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-300 my-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "RS : ",
                workspace == null ? void 0 : workspace.pricePerSeat
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2 text-gray-800 dark:text-white", children: "Coupon & Voucher" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  className: "flex-grow border rounded-l-lg px-3 py-2 dark:bg-gray-600 dark:text-white",
                  placeholder: "Enter code here",
                  value: couponCode,
                  onChange: (e) => setCouponCode(e.target.value)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white px-4 py-2 rounded-r-lg", children: "Apply" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 bg-yellow-50 dark:bg-yellow-200 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold text-gray-800 dark:text-gray-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount Payable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "RS ",
              workspace == null ? void 0 : workspace.pricePerSeat
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "w-full bg-orange-500 text-white py-3 rounded-lg mt-4 font-semibold",
              onClick: () => setPaymentModal(true),
              children: "₹ Proceed"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const BookingCheckout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-white dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingPaymentPage, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  BookingCheckout as default
};
