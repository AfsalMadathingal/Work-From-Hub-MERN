import { r as reactExports, ag as useNavigate, u as useSelector, a as useDispatch, j as jsxRuntimeExports, ah as ReactLoading, L as Link, b8 as setLoading, aB as validate, bp as setError, bw as login, bx as setUser, by as setIsAuthenticated, bz as setAccessToken, y as _t } from "./index-DhlojAJa.js";
const BusinessLogin = () => {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [rememberMe, setRememberMe] = reactExports.useState(false);
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.businessUser);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.businessUser.error);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formattedErrors = validate({ email, password });
    if (formattedErrors) {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setError(formattedErrors));
      }, 300);
    } else {
      dispatch(setError({}));
      const response = await login({ email, password });
      if ((response == null ? void 0 : response.statusCode) === 200) {
        const { userFound, accessToken } = response.data;
        dispatch(setUser(userFound));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
        localStorage.setItem("businessAccessToken", accessToken);
        _t.success("Welcome");
        navigate("/business/dashboard");
      } else {
        dispatch(setError({ email: response.data.error, password: response.data.error }));
        dispatch(setLoading(false));
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen bg-[#fcefe7] dark:bg-gray-900 transition dark:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg flex max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-center font-bold mb-4 dark:text-white", children: "BUSINESS LOGIN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-center mb-6", children: "Welcome back! Please enter your details." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700 dark:text-gray-300 mb-2", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            id: "email",
            className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md",
            placeholder: "Enter your email",
            value: email,
            onChange: (e) => setEmail(e.target.value)
          }
        ),
        (error == null ? void 0 : error.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1  dark:text-red-400", children: error.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-gray-700 dark:text-gray-300 mb-2", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            id: "password",
            className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md",
            placeholder: "••••••••",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        ),
        (error == null ? void 0 : error.password) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1 dark:text-red-400", children: error.password })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              className: "mr-2 dark:bg-gray-700",
              checked: rememberMe,
              onChange: (e) => setRememberMe(e.target.checked)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Remember me" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm text-blue-500 hover:underline dark:text-blue-400", children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-orange-500 dark:bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center ",
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-6 text-sm text-gray-600 dark:text-gray-300", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/business/register", className: "text-blue-500 hover:underline dark:text-blue-400", children: "Sign up for free" })
    ] })
  ] }) }) }) });
};
export {
  BusinessLogin as default
};
