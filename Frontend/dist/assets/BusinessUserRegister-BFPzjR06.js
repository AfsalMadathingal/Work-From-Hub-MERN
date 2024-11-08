import { b as reactExports, u as useNavigate, a as useDispatch, c as useSelector, j as jsxRuntimeExports, M as setLoading, X as setModal, U as setUser, V as setIsAuthenticated, W as setAccessToken, Y as setFormData, P as setError, L as Link, _ as _t } from "./index-BgyoVvld.js";
import { r as reactCheckmark_minExports, v as validate } from "./react-checkmark.min-CMPtJ3pk.js";
import { R as ReactLoading } from "./colors-w8IeHXqN.js";
import { r as register, s as sendOTP } from "./BUserAuthService-DL4tNSdu.js";
import { B } from "./react-toastify.esm-CTm47IRj.js";
import { A as Alert } from "./alert-cjddj-FJ.js";
import { a as axios } from "./index-Bxisd2S8.js";
import "./joi-browser.min-7gqfidDl.js";
const BusinessUserOTPForms = () => {
  const [otp, setOtp] = reactExports.useState(["", "", "", ""]);
  const [verified, setVerified] = reactExports.useState(false);
  const [timer, setTimer] = reactExports.useState(60);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.businessUser);
  reactExports.useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
    }, 1e3);
    return () => clearInterval(countdown);
  }, []);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-input${index + 2}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  const handleSubmit = async () => {
    const OTPSubmitted = otp.join("");
    try {
      dispatch(setLoading(true));
      const apiResponse = await register(formData, { otp: OTPSubmitted });
      if (apiResponse instanceof Alert) {
        dispatch(setLoading(false));
        return B.error(apiResponse.message);
      }
      if (apiResponse == null ? void 0 : apiResponse.data) {
        const { user, accessToken } = apiResponse.data;
        setVerified(true);
        await new Promise((resolve) => setTimeout(resolve, 3e3));
        dispatch(setModal(false));
        dispatch(setLoading(false));
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setAccessToken(accessToken));
        dispatch(setFormData({}));
        B.success("Registered successfully");
        navigate("/business/dashboard/");
      } else {
        dispatch(setLoading(false));
        dispatch(setError(apiResponse));
        console.error("Registration failed:", apiResponse);
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error during registration:", error);
      B.error("An error occurred during registration.");
    }
  };
  const handleResend = async () => {
    if (timer === 0) {
      setTimer(60);
      const otpResponse = await sendOTP(formData);
      if ((otpResponse == null ? void 0 : otpResponse.data) && otpResponse.data.error) {
        B.error(otpResponse.data.error);
      }
    }
  };
  const handleClose = () => {
    dispatch(setModal(false));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", children: verified ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactCheckmark_minExports.Checkmark, { size: "96px" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      className: "otp-Form w-60 bg-white p-8 rounded-lg shadow-lg relative flex flex-col items-center gap-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleClose,
            className: "exitBtn absolute top-2 right-2 bg-white text-primaryOrange rounded-full w-6 h-6 flex items-center justify-center shadow-sm",
            children: "×"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mainHeading text-lg font-bold text-gray-800", children: "Enter OTP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "otpSubheading text-xs text-center text-gray-600", children: "We have sent a verification code to your Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inputContainer flex justify-between w-full", children: otp.map((digit, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            id: `otp-input${index + 1}`,
            className: "otp-input w-8 h-8 text-center bg-gray-200 rounded-md focus:bg-blue-100 transition duration-300 outline-none",
            maxLength: 1,
            value: digit,
            onChange: (e) => handleChange(e, index)
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleSubmit,
            className: `verifyButton w-full h-10 bg-primaryOrange text-white rounded-md font-semibold hover:bg-orange-400 transition duration-200`,
            children: "Verify"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "resendNote text-xs text-gray-600 text-center mt-4", children: [
          "Didn't receive the code?",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "resendBtn text-orange-500 font-bold ml-1",
              onClick: handleResend,
              disabled: timer > 0,
              children: timer > 0 ? `Resend Code in ${timer}s` : "Resend Code"
            }
          )
        ] })
      ]
    }
  ) });
};
const BusinessLogin = () => {
  const [fullName, setFullName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [rememberMe, setRememberMe] = reactExports.useState(false);
  const { loading, modal } = useSelector(
    (state) => state.businessUser
  );
  const error = useSelector((state) => state.businessUser.error);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setError({}));
    dispatch(setLoading(true));
    const formattedErrors = validate({
      fullName,
      email,
      password,
      confirmPassword
    });
    if (formattedErrors) {
      dispatch(setLoading(false));
      dispatch(setError(formattedErrors));
      return;
    }
    dispatch(setError({}));
    dispatch(setFormData({ fullName, email, password }));
    try {
      const otpResponse = await sendOTP({ fullName, email, password });
      if (axios.isAxiosError(otpResponse)) {
        _t.error(otpResponse.message);
      } else if ((otpResponse == null ? void 0 : otpResponse.status) === 200) {
        dispatch(setModal(true));
      } else {
        _t.error("Something went wrong");
      }
    } catch (error2) {
      dispatch(setLoading(false));
      console.error(error2);
      _t.error("Failed to submit. Please try again later.");
    } finally {
      dispatch(setLoading(false));
    }
  };
  reactExports.useEffect(() => {
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    modal && /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessUserOTPForms, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen bg-[#fcefe7] dark:bg-gray-900 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg flex max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-center font-bold mb-4 dark:text-white", children: "BUSINESS ACCOUNT REGISTER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-center mb-6", children: "Please fill your details." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700 dark:text-gray-300 mb-2", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              id: "email",
              className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
              placeholder: "Enter your email",
              value: fullName,
              onChange: (e) => setFullName(e.target.value)
            }
          ),
          (error == null ? void 0 : error.fullName) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.fullName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700 dark:text-gray-300 mb-2", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              id: "email",
              className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
              placeholder: "Enter your email",
              value: email,
              onChange: (e) => setEmail(e.target.value)
            }
          ),
          (error == null ? void 0 : error.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-gray-700 dark:text-gray-300 mb-2", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              id: "password",
              className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
              placeholder: "••••••••",
              value: password,
              onChange: (e) => setPassword(e.target.value)
            }
          ),
          (error == null ? void 0 : error.password) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.password })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-gray-700 dark:text-gray-300 mb-2", children: "Confirm Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              id: "password",
              className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
              placeholder: "••••••••",
              value: confirmPassword,
              onChange: (e) => setConfirmPassword(e.target.value)
            }
          ),
          (error == null ? void 0 : error.confirmPassword) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.confirmPassword })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                className: "mr-2",
                checked: rememberMe,
                onChange: (e) => setRememberMe(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Remember me" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm text-blue-500 hover:underline", children: "Forgot password?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLoading, { type: "spin", height: 24, width: 24, color: "#ffffff" }) : "Sign up"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-6 text-sm text-gray-600 dark:text-gray-300", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/business/login", className: "text-blue-500 hover:underline", children: "Sign in" })
      ] })
    ] }) }) })
  ] });
};
export {
  BusinessLogin as default
};
