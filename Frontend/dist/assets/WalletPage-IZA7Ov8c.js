import { j as jsxRuntimeExports } from "./index-CRCdbRYf.js";
import { H as Header } from "./Header-DjG3epF5.js";
import { F as Footer } from "./Footer-C6GpN6k1.js";
import { P as ProfileSidebar } from "./ProfileSidebar-C0LDz-I9.js";
import { A as AnimatedPage } from "./Animation-Cos3fwbw.js";
import "./UserRouter-k4GHkO3b.js";
import "./colors-BHzic30Z.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
import "./tslib.es6-hzme6y_e.js";
import "./chunk-N2KXC5ZE-Blp81Z_t.js";
import "./chunk-XHQUSKIE-C8hINOKQ.js";
import "./clsx-DgYk2OaC.js";
import "./chunk-3YEK3JGC-cX8-fyRH.js";
import "./getChildNodes-C8Y8vqTe.js";
import "./useOverlayTriggerState-DxxZd4vX.js";
import "./useFocusable-B9R5QQmh.js";
import "./useControlledState-zThHW1ja.js";
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
import "./userValidator-Y1z3hoIo.js";
import "./joi-browser.min-De1ehRHH.js";
import "./react-toastify.esm-Bun9FK4S.js";
import "./square-pen-DuusKohF.js";
import "./createLucideIcon-I0cbKwv6.js";
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
