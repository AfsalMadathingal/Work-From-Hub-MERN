import { b as reactExports, c as useSelector, a as useDispatch, u as useNavigate, j as jsxRuntimeExports, L as Link, aE as setLoading, aF as setUser, aG as setIsAuthenticated, aH as setAccessToken, _ as _t } from "./index-CRCdbRYf.js";
import { b as login } from "./adminAuth-CQK_s7r4.js";
import { R as ReactLoading } from "./colors-BHzic30Z.js";
import { l as loginValidate } from "./adminValidator-C5GevmfX.js";
import "./index-Bxisd2S8.js";
import "./joi-browser.min-De1ehRHH.js";
const AdminLogin = () => {
  const [userId, setUserId] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [rememberMe, setRememberMe] = reactExports.useState(false);
  const [error, setError] = reactExports.useState({});
  const { loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formattedErrors = loginValidate({ userId, password });
    if (formattedErrors) {
      setTimeout(() => {
        dispatch(setLoading(false));
        setError(formattedErrors);
      }, 1e3);
    } else {
      setError({});
      const response = await login({ userId, password });
      if (response.success) {
        const { user, accessToken } = response.data;
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setAccessToken(accessToken));
        _t.success("Welcome");
        navigate("/admin/dashboard");
      } else {
        setError({ userId: response.data.error, password: response.data.error });
        dispatch(setLoading(false));
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen bg-[#fcefe7] dark:bg-gray-800 transition ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto bg-white rounded-lg shadow-lg flex max-w-4xl dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-center font-bold mb-4", children: "ADMIN LOGIN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-center mb-6 dark:text-gray-300", children: "Welcome back! Please enter your details." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700 mb-2 dark:text-gray-300", children: "User Id" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            id: "email",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600",
            placeholder: "Enter your user Id",
            value: userId,
            onChange: (e) => setUserId(e.target.value)
          }
        ),
        error.userId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.userId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-gray-700 mb-2 dark:text-gray-300", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            id: "password",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600",
            placeholder: "••••••••",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        ),
        error.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: error.password })
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
          className: "w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center dark:bg-orange-700 dark:text-white",
          children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLoading, { type: "spin", height: 24, width: 24, color: "#ffffff" }) : "Sign in"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-6 text-sm text-gray-600 dark:text-gray-300", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sign-up", className: "text-blue-500 hover:underline", children: "Sign up for free" })
    ] })
  ] }) }) });
};
export {
  AdminLogin as default
};
