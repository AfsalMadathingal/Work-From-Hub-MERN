import { j as jsxRuntimeExports } from "./index-BgyoVvld.js";
import { H as Header } from "./Header-CXC-HNJa.js";
import { F as Footer } from "./Footer-B01DlYJ4.js";
import { P as ProfileSidebar } from "./ProfileSidebar-DR9-dSfB.js";
import { A as AnimatedPage } from "./Animation-eGCpIPZ_.js";
import "./UserRouter-DiV_yASJ.js";
import "./colors-w8IeHXqN.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
import "./tslib.es6-hzme6y_e.js";
import "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import "./chunk-XHQUSKIE-kpJhvuYQ.js";
import "./clsx-DgYk2OaC.js";
import "./chunk-3YEK3JGC-CNDvrElM.js";
import "./getChildNodes-ei8c2tXI.js";
import "./useOverlayTriggerState-BKZ-Li1j.js";
import "./useFocusable-BHKaAMEV.js";
import "./useControlledState-chsM3Wdo.js";
import "./features-animation-DpivVBXV.js";
import "./create-visual-element-Bp75OA0n.js";
import "./useFocusRing-D2Xc8JP6.js";
import "./chunk-DBLREEYE-Byjm2nnf.js";
import "./chunk-MNNRULGA-DyzUL4cr.js";
import "./index-CFMAwm7M.js";
import "./chunk-QXREVWCS-Dw8VqDq0.js";
import "./index-D2hLiIF9.js";
import "./index-CBXuPOJf.js";
import "./iconBase-b0mU4BcV.js";
import "./userValidator-q4F520mw.js";
import "./joi-browser.min-7gqfidDl.js";
import "./react-toastify.esm-CTm47IRj.js";
import "./square-pen-DmL50rxf.js";
import "./createLucideIcon-aT5HAUZt.js";
const Wallet = () => {
  const balance = 1250.75;
  const transactions = [
    { id: 1, date: "2024-10-21", description: "Refund For cancelling", amount: -40 },
    { id: 2, date: "2024-10-20", description: "Refund For cancelling", amount: -15.5 },
    { id: 3, date: "2024-10-19", description: "Refund For cancelling", amount: 500 },
    { id: 4, date: "2024-10-18", description: "Refund For cancelling", amount: -8.75 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-700", children: "Wallet Balance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-bold text-orange-500 mt-2", children: [
        "₹",
        balance.toFixed(2)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-orange-500 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left font-semibold", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left font-semibold", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-right font-semibold", children: "Amount" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: transactions.map((transaction) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "even:bg-gray-50 odd:bg-white hover:bg-orange-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-gray-700", children: transaction.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-gray-700", children: transaction.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                className: `p-4 text-right font-semibold ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`,
                children: transaction.amount < 0 ? `-₹${Math.abs(transaction.amount)}` : `+₹${transaction.amount}`
              }
            )
          ]
        },
        transaction.id
      )) })
    ] }) })
  ] });
};
const WalletPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: " lg:m-auto lg:w-2/3  flex-grow flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  WalletPage as default
};
