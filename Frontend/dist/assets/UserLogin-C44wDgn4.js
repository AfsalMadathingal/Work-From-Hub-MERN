import { r as reactExports, a as useDispatch, u as useSelector, j as jsxRuntimeExports, A as AnimatedPage, ag as ReactLoading, ar as setError, as as emailValidate, y as _t, at as FaEyeSlash, au as FaEye, av as validatePassword, L as Link, s as setLoading, aw as validate, ax as login, ay as setUser, az as setIsAuthenticated, aA as signInWithGoogle, aB as setAccessToken, aC as forgotPasswordSendOTP, aD as forgotPasswordVerifyOTP, aE as forgotPasswordReset } from "./index-BA_d4uvr.js";
import { i as image_default } from "./chunk-NK4BRF7C-Cq8Tgf7s.js";
const ForgotPasswordModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  onVerify
}) => {
  const [isVisible, setIsVisible] = reactExports.useState(isOpen);
  const [showDialog, setShowDialog] = reactExports.useState(isOpen);
  const [otpSent, setOtpSent] = reactExports.useState(false);
  const [otp, setOtp] = reactExports.useState(["", "", "", ""]);
  const [email, setEmail] = reactExports.useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  reactExports.useEffect(() => {
    if (isOpen) {
      setShowDialog(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShowDialog(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  if (!showDialog) return null;
  const handleConfirm = async () => {
    dispatch(setError({}));
    const error2 = emailValidate(email);
    if (error2) {
      dispatch(setError(error2));
      return _t.error(error2.email);
    }
    const response = await onConfirm(email);
    if (response) {
      setOtpSent(true);
    }
  };
  const handleOtpChange = (value, index) => {
    var _a;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        (_a = document.getElementById(`otp-${index + 1}`)) == null ? void 0 : _a.focus();
      }
    }
  };
  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      return _t.error("OTP must be 4 digits");
    }
    onVerify(otpValue, email);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-lg shadow-lg max-w-md w-full p-6 transform transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-center text-gray-800", children: title }),
            !otpSent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-2", children: message }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  id: "email",
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "Enter your email",
                  className: "w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
                }
              ),
              (error == null ? void 0 : error.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.email })
            ] }),
            otpSent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter the 4-digit code sent to your email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-2 mt-2", children: otp.map((digit, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: digit,
                  onChange: (e) => handleOtpChange(e.target.value, index),
                  id: `otp-${index}`,
                  maxLength: 1,
                  className: "w-10 h-10 text-center border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
                },
                index
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onCancel,
                  className: "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out",
                  children: "Cancel"
                }
              ),
              otpSent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleVerify,
                  className: "px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out",
                  children: "Verify"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleConfirm,
                  className: "px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReactLoading,
                    {
                      type: "spin",
                      height: 24,
                      width: 24,
                      color: "#ffffff"
                    }
                  ) : "Confirm"
                }
              )
            ] })
          ]
        }
      ) })
    }
  ) });
};
const ResetPasswordModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel
}) => {
  const [isVisible, setIsVisible] = reactExports.useState(isOpen);
  const [showDialog, setShowDialog] = reactExports.useState(isOpen);
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  reactExports.useEffect(() => {
    if (isOpen) {
      setShowDialog(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShowDialog(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  if (!showDialog) return null;
  const handleConfirm = async () => {
    dispatch(setError({}));
    const error2 = validatePassword(password);
    if (error2) {
      dispatch(setError(error2));
      return _t.error(error2.password);
    }
    if (password !== confirmPassword) {
      dispatch(setError({ password: "Passwords do not match" }));
      return _t.error("Passwords do not match");
    }
    const response = await onConfirm(password);
    if (response) {
      _t.success("Password reset successfully");
      onCancel();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-lg shadow-lg max-w-md w-full p-6 transform transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-center text-gray-800", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-2", children: message }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: showPassword ? "text" : "password",
                    name: "password",
                    id: "password",
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: "Enter new password",
                    className: "w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "absolute right-3 top-2 text-gray-500",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaEyeSlash, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, {})
                  }
                )
              ] }),
              (error == null ? void 0 : error.password) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.password })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: showPassword ? "text" : "password",
                name: "confirmPassword",
                id: "confirmPassword",
                onChange: (e) => setConfirmPassword(e.target.value),
                placeholder: "Confirm new password",
                className: "w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onCancel,
                  className: "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleConfirm,
                  className: "px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReactLoading,
                    {
                      type: "spin",
                      height: 24,
                      width: 24,
                      color: "#ffffff"
                    }
                  ) : "Reset Password"
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
const LoginPage = () => {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [rememberMe, setRememberMe] = reactExports.useState(false);
  const [forgotPassword, setForgotPassword] = reactExports.useState(false);
  const { loading } = useSelector(
    (state) => state.user
  );
  const error = useSelector((state) => state.user.error);
  const [otpToken, setOtpToken] = reactExports.useState("");
  const [resetPassword, setResetPassword] = reactExports.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formattedErrors = validate({ email, password });
    if (formattedErrors) {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setError(formattedErrors));
      }, 1e3);
    } else {
      dispatch(setError({}));
      const response = await login({ email, password });
      if (response.success) {
        const { userFound, accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        dispatch(setUser(userFound));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
      } else {
        dispatch(
          setError({
            email: response.data.error,
            password: response.data.error
          })
        );
        dispatch(setLoading(false));
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      const response = await signInWithGoogle();
      if (response == null ? void 0 : response.success) {
        const { user, accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
        _t.success("Welcome");
      } else {
        dispatch(setLoading(false));
        _t.success("something Went Wrong");
      }
    } catch (error2) {
      console.error(error2);
      dispatch(setLoading(false));
      _t.error("Something went Wrong!");
    }
  };
  const handleForgotPassword = async (email2) => {
    dispatch(setLoading(true));
    const response = await forgotPasswordSendOTP(email2);
    if ((response == null ? void 0 : response.status) == 400 || (response == null ? void 0 : response.status) == 500) {
      _t.error(
        response.status == 500 ? response.data.error : response.data.message || "Something went wrong"
      );
      dispatch(setLoading(false));
      return null;
    }
    if (response == null ? void 0 : response.data.success) {
      _t.success(response.data.message);
      dispatch(setLoading(false));
      return true;
    }
    _t.error("Something went wrong");
    dispatch(setLoading(false));
    return null;
  };
  const handleOTPVerification = async (otp, email2) => {
    try {
      dispatch(setLoading(true));
      if (!otp || otp.length != 4) {
        _t.error("Please Enter valid OTP");
        return null;
      }
      const response = await forgotPasswordVerifyOTP(otp, email2);
      if ((response == null ? void 0 : response.data.statusCode) == 400 || (response == null ? void 0 : response.data.statusCode) == 500) {
        _t.error(response.data.message || "Enter valid OTP");
      }
      if (response == null ? void 0 : response.data.success) {
        dispatch(setLoading(false));
        setOtpToken(response.data.data.accessToken);
        setForgotPassword(false);
        setResetPassword(true);
      }
    } catch (error2) {
      dispatch(setLoading(false));
      console.log("====================================");
      console.log(error2);
      console.log("====================================");
      _t.error("Something went wrong");
    }
  };
  const handleResetPassword = async (password2) => {
    dispatch(setLoading(true));
    const response = await forgotPasswordReset(password2, otpToken);
    if (response == null ? void 0 : response.data.success) {
      dispatch(setLoading(false));
      return true;
    }
    if ((response == null ? void 0 : response.data.statusCode) == 405) {
      _t.error(response.data.message);
      dispatch(setLoading(false));
      return null;
    }
    _t.error("Something went wrong");
    dispatch(setLoading(false));
    return false;
  };
  const handleCancel = () => {
    dispatch(setLoading(false));
    setForgotPassword(false);
    setResetPassword(false);
  };
  reactExports.useEffect(() => {
    dispatch(setError({}));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { children: [
    forgotPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForgotPasswordModal,
      {
        onVerify: handleOTPVerification,
        onConfirm: handleForgotPassword,
        isOpen: forgotPassword,
        onCancel: handleCancel,
        title: "Forgot Password",
        message: "Enter your email"
      }
    ),
    resetPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResetPasswordModal,
      {
        onConfirm: handleResetPassword,
        isOpen: resetPassword,
        onCancel: handleCancel,
        title: "Reset Password",
        message: "Enter your new password"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen bg-[#fcefe7] dark:bg-gray-900 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex max-w-3xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-center font-bold mb-4 dark:text-white", children: "WELCOME BACK" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-center mb-6", children: "Welcome back! Please enter your details." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700 dark:text-gray-200 mb-2", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                id: "email",
                className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md transition-all duration-300",
                placeholder: "Enter your email",
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ),
            (error == null ? void 0 : error.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-gray-700 dark:text-gray-200 mb-2", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                id: "password",
                className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md transition-all duration-300",
                placeholder: "••••••••",
                value: password,
                onChange: (e) => setPassword(e.target.value)
              }
            ),
            (error == null ? void 0 : error.password) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.password })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                onClick: () => setForgotPassword(true),
                className: "text-sm text-blue-500 hover:underline cursor-pointer",
                children: "Forgot password?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center transition-all duration-300",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReactLoading,
                {
                  type: "spin",
                  height: 24,
                  width: 24,
                  color: "#ffffff"
                }
              ) : "Sign in"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleGoogleSignIn,
            className: "w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-md flex items-center justify-center transition-all duration-300 dark:bg-gray-700",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/google.png",
                  alt: "Google",
                  className: "w-5 h-5 mr-2"
                }
              ),
              "Sign in with Google"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-6 text-sm text-gray-600 dark:text-gray-300", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sign-up", className: "text-blue-500 hover:underline", children: "Sign up for free" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 hidden lg:block relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        image_default,
        {
          className: "object-cover h-full w-full rounded-r-lg opacity-90 transition-opacity duration-300",
          alt: "Login page image",
          src: "/loginpageimage.webp"
        }
      ) })
    ] }) })
  ] }) });
};
export {
  LoginPage as default
};
