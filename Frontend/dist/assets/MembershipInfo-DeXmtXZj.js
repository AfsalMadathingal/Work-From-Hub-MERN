import { b as reactExports, j as jsxRuntimeExports, _ as _t } from "./index-CRCdbRYf.js";
import { H as Header } from "./Header-DjG3epF5.js";
import { F as Footer } from "./Footer-C6GpN6k1.js";
import { P as ProfileSidebar } from "./ProfileSidebar-C0LDz-I9.js";
import { A as AnimatedPage } from "./Animation-Cos3fwbw.js";
import { f as fetchActivePlan } from "./UserRouter-k4GHkO3b.js";
import "./chunk-N2KXC5ZE-Blp81Z_t.js";
import "./chunk-XHQUSKIE-C8hINOKQ.js";
import "./clsx-DgYk2OaC.js";
import "./chunk-3YEK3JGC-cX8-fyRH.js";
import "./getChildNodes-C8Y8vqTe.js";
import "./useOverlayTriggerState-DxxZd4vX.js";
import "./useFocusable-B9R5QQmh.js";
import "./useControlledState-zThHW1ja.js";
import "./tslib.es6-hzme6y_e.js";
import "./features-animation-DXMUZmFI.js";
import "./create-visual-element-IukP1vNR.js";
import "./useFocusRing-6DVXckHy.js";
import "./chunk-DBLREEYE-FUIzjYHW.js";
import "./chunk-MNNRULGA-DyzUL4cr.js";
import "./index-CJMRsIY3.js";
import "./chunk-QXREVWCS-c8bsRa8m.js";
import "./index-DLS5rOVa.js";
import "./index-DiJo3T71.js";
import "./iconBase-CZo89hZi.js";
import "./colors-BHzic30Z.js";
import "./userValidator-Y1z3hoIo.js";
import "./joi-browser.min-De1ehRHH.js";
import "./react-toastify.esm-Bun9FK4S.js";
import "./square-pen-DuusKohF.js";
import "./createLucideIcon-I0cbKwv6.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
const Modal = ({ isOpen, onClose }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed z-50 inset-0 overflow-y-auto transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} dark:bg-gray-900 dark:text-white`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center min-h-screen p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `relative bg-white rounded-xl shadow-2xl transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"} dark:bg-gray-800`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4 dark:text-white", children: "Cancel Subscription" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-8 dark:text-gray-200", children: "Are you sure you want to cancel your subscription? This action cannot be undone." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "w-full px-4 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors dark:bg-red-700 dark:hover:bg-red-800",
                    onClick: onClose,
                    children: "Yes, Cancel Subscription"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "w-full px-4 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
                    onClick: onClose,
                    children: "No, Keep My Subscription"
                  }
                )
              ] })
            ] })
          }
        )
      ] })
    }
  );
};
const MembershipDetails = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [planPrice, setPlanPrice] = reactExports.useState("19.99");
  const [renewalDate, setRenewalDate] = reactExports.useState("June 1, 2024");
  const [isActive, setIsActive] = reactExports.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const getActivePlan = async () => {
    try {
      const response = await fetchActivePlan();
      if ((response == null ? void 0 : response.status) === 200) {
        const plan = response.data.data;
        if (plan.status === "active") {
          setIsActive(true);
        }
        setPlanPrice(plan.price);
        const renewalDate2 = new Date(plan.createdAt);
        renewalDate2.setDate(renewalDate2.getDate() + 30);
        setRenewalDate(renewalDate2.toLocaleDateString());
      } else {
        _t.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      _t.error("Something went wrong");
    }
  };
  reactExports.useEffect(() => {
    getActivePlan();
  }, []);
  if (!isActive) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl shadow-lg p-8 border border-gray-100 dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "No Active Subscription" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1 dark:text-gray-400", children: "Subscribe to access premium features" })
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-8 border border-gray-100 dark:bg-gray-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6 text-indigo-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Premium Membership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1 dark:text-gray-400", children: "Active Subscription" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 border-t border-gray-100 dark:border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
            "₹",
            planPrice,
            "/month"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 border-t border-gray-100 dark:border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Next Renewal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white", children: renewalDate })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: openModal,
          className: "w-full px-4 py-3 bg-white text-red-500 font-medium rounded-lg border-2 border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
          children: "Cancel Subscription"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { isOpen: isModalOpen, onClose: closeModal })
  ] });
};
const MembershipInfo = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: " lg:m-auto lg:w-2/3  flex-grow flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MembershipDetails, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  MembershipInfo as default
};
