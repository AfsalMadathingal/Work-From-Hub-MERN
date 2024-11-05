import { r as reactExports, af as useNavigate, a as useDispatch, u as useSelector, j as jsxRuntimeExports, aF as register, s as setLoading, B, aG as setModal, ay as setUser, az as setIsAuthenticated, aB as setAccessToken, aH as setFormData, ar as setError, aI as sendOTP, aJ as AxiosError, A as AnimatedPage, aK as LoadingPageWithReactLoading, ak as PRIMARY_COLOR, ag as ReactLoading, L as Link, aL as axios, y as _t, aA as signInWithGoogle } from "./index-CTy2qHgP.js";
import { r as reactCheckmark_minExports, v as validate } from "./react-checkmark.min-B-wKsxn9.js";
import { i as image_default } from "./chunk-NK4BRF7C-Ddp52w3s.js";
import "tslib";
const OTPForm = () => {
  const [otp, setOtp] = reactExports.useState(["", "", "", ""]);
  const [verified, setVerified] = reactExports.useState(false);
  const [timer, setTimer] = reactExports.useState(60);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.user);
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
    const OTPSubmited = otp.join("");
    try {
      const apiResponse = await register(formData, { otp: OTPSubmited });
      if (apiResponse == null ? void 0 : apiResponse.alert) {
        dispatch(setLoading(false));
        return B.error(apiResponse.message);
      }
      if (apiResponse == null ? void 0 : apiResponse.data) {
        const { user, accessToken } = apiResponse.data;
        setVerified(true);
        await new Promise((resolve) => setTimeout(() => resolve("wait for animation"), 3e3));
        dispatch(setModal(false));
        dispatch(setLoading(false));
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setAccessToken(accessToken));
        dispatch(setFormData({}));
        B.success("Registered successfully");
        navigate("/u/home/");
      } else {
        ;
        dispatch(setLoading(false));
        dispatch(setError(apiResponse));
      }
    } catch (error) {
      B.error(error.message);
    }
  };
  const handleResend = async () => {
    var _a;
    if (timer === 0) {
      setTimer(60);
      const otpResponse = await sendOTP(formData);
      if (otpResponse instanceof AxiosError) {
        B.error(otpResponse.message);
      } else if ((_a = otpResponse == null ? void 0 : otpResponse.data) == null ? void 0 : _a.error) {
        B.error(otpResponse.data.error);
      }
    }
  };
  const handleClose = () => {
    dispatch(setModal(false));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: verified ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactCheckmark_minExports.Checkmark, { size: "96px" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
const UserRegister = () => {
  const [fullName, setFullName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const dispatch = useDispatch();
  const { loading, modal } = useSelector(
    (state) => state.user
  );
  const error = useSelector((state) => state.user.error);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const formattedErrors = validate({
        fullName,
        email,
        password,
        confirmPassword
      });
      if (formattedErrors) {
        setTimeout(() => {
          dispatch(setLoading(false));
          dispatch(setError(formattedErrors));
        }, 1e3);
        return;
      }
      dispatch(setError({}));
      dispatch(setFormData({ fullName, email, password }));
      const otpResponse = await sendOTP({ fullName, email, password });
      if (axios.isAxiosError(otpResponse)) {
        _t.error(otpResponse.message);
      } else if ((otpResponse == null ? void 0 : otpResponse.status) === 200) {
        dispatch(setModal(true));
      } else {
        _t.error("Something went wrong");
      }
      dispatch(setLoading(false));
    } catch (error2) {
      console.error(error2);
      dispatch(setLoading(false));
      _t.error("Something Went Wrong");
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      const response = await signInWithGoogle();
      if (response.success) {
        const { user, accessToken } = response.data;
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
      }
    } catch (error2) {
      console.error(error2);
      dispatch(setLoading(false));
      _t.success("Something Went Wrong");
    }
  };
  reactExports.useEffect(() => {
    dispatch(setError({}));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
      LoadingPageWithReactLoading,
      {
        type: "spin",
        transparent: true,
        color: PRIMARY_COLOR
      }
    ),
    modal && /* @__PURE__ */ jsxRuntimeExports.jsx(OTPForm, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#fcefe7] dark:bg-gray-900 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-2xl flex max-w-4xl w-full dark:bg-gray-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-1xl font-bold mb-1 text-center text-gray-900 dark:text-white", children: "LET'S GET STARTED" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-2 text-center dark:text-gray-300", children: "Welcome! Please enter your details." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "fullName",
                className: "block text-gray-700 mb-2 dark:text-gray-300",
                children: "Full Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: "fullName",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white",
                placeholder: "Enter your full name",
                value: fullName,
                onChange: (e) => setFullName(e.target.value)
              }
            ),
            (error == null ? void 0 : error.fullName) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.fullName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700 mb-2 dark:text-gray-300", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                id: "email",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white",
                placeholder: "Enter your email",
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ),
            (error == null ? void 0 : error.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "password",
                className: "block text-gray-700 mb-2 dark:text-gray-300",
                children: "Password"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                id: "password",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white",
                placeholder: "••••••••",
                value: password,
                onChange: (e) => setPassword(e.target.value)
              }
            )
          ] }),
          (error == null ? void 0 : error.password) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.password }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "confirmPassword",
                className: "block text-gray-700 mb-2 dark:text-gray-300",
                children: "Confirm Password"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                id: "confirmPassword",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white",
                placeholder: "••••••••",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value)
              }
            ),
            (error == null ? void 0 : error.confirmPassword) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.confirmPassword })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 mb-4 text-center flex justify-center",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReactLoading,
                {
                  type: "spin",
                  height: 24,
                  width: 24,
                  color: "#ffffff"
                }
              ) : "Sign Up"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleGoogleSignIn,
              className: "w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center dark:text-gray-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/google.png",
                    alt: "Google",
                    className: "w-5 h-5 mr-2"
                  }
                ),
                "Sign up with Google"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-6 text-sm text-gray-600 dark:text-gray-300", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "text-blue-500 hover:underline", children: [
            "Sign In",
            " "
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block md:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        image_default,
        {
          src: "/loginpageimage.webp",
          alt: "Person working on laptop",
          className: "object-cover h-full w-full rounded-r-lg"
        }
      ) })
    ] }) })
  ] }) });
};
export {
  UserRegister as default
};
