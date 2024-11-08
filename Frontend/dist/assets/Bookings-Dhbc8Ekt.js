import { c as useSelector, j as jsxRuntimeExports, _ as _t, b as reactExports, k as React } from "./index-CRCdbRYf.js";
import { H as Header } from "./Header-DjG3epF5.js";
import { F as Footer } from "./Footer-C6GpN6k1.js";
import { P as ProfileSidebar } from "./ProfileSidebar-C0LDz-I9.js";
import { A as AnimatedPage } from "./Animation-Cos3fwbw.js";
import { g as getBooking, a as getSingleWorkspace, b as getSeatById, c as cancelBooking } from "./UserRouter-k4GHkO3b.js";
import { X } from "./jspdf.plugin.autotable-B6pyBYsY.js";
import { E } from "./jspdf.es.min-BSu__lXo.js";
import { c as createLucideIcon } from "./createLucideIcon-I0cbKwv6.js";
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
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
import "./typeof-WJl3ipnu.js";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const ModalForBookingDetails = ({
  isOpen,
  onClose,
  workspace,
  seat,
  booking
}) => {
  const { user } = useSelector((state) => state.user);
  if (!isOpen) return null;
  const handleDownload = () => {
    _t.success("Downloading Invoice...");
    const doc = new E();
    const logoUrl = "/logo.png";
    doc.addImage(logoUrl, "PNG", 20, 10, 30, 30);
    doc.setFontSize(18);
    doc.setTextColor("#ff6f00");
    doc.text("INVOICE", 105, 20, { align: "center" });
    doc.setDrawColor(255, 165, 0);
    doc.line(20, 45, 190, 45);
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text(`Workspace: ${workspace == null ? void 0 : workspace.buildingName}`, 20, 55);
    doc.text(`Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);
    doc.text(`Billed To:`, 140, 55);
    doc.text(`${user == null ? void 0 : user.fullName}`, 140, 65);
    doc.text(`${user == null ? void 0 : user.email}`, 140, 75);
    doc.setFontSize(14);
    doc.text("Booking Details", 20, 90);
    doc.setFontSize(12);
    doc.text(`Amount Paid: ${booking.amount}`, 20, 100);
    doc.text(`Seat: ${seat == null ? void 0 : seat.tableNumber}-${seat == null ? void 0 : seat.seatNumber}`, 20, 110);
    doc.text(`Status: ${booking.status}`, 20, 120);
    doc.line(20, 130, 190, 130);
    doc.autoTable({
      head: [["Booking Details", "Description"]],
      body: [
        ["Workspace", workspace == null ? void 0 : workspace.buildingName],
        ["Seat", `${seat == null ? void 0 : seat.tableNumber}-${seat == null ? void 0 : seat.seatNumber}`],
        ["Date", booking.date.split("T")[0]],
        ["Amount", booking.amount],
        ["Status", booking.status]
      ],
      startY: 140,
      theme: "striped"
    });
    doc.save("invoice.pdf");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 overflow-y-auto",
      "aria-labelledby": "transaction-details-modal",
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen px-4 text-center flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 bg-gray-900/75 dark:bg-gray-800/75 transition-opacity animate-in fade-in duration-200",
            "aria-hidden": "true",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg transform rounded-xl bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all animate-in slide-in-from-bottom duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-orange-500 dark:text-orange-400", children: "Transaction Details" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-gray-900 dark:text-white", children: [
                "₹",
                booking.amount
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Transaction ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white font-mono text-sm", children: booking.paymentIntentId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Workspace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: workspace == null ? void 0 : workspace.buildingName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Seat" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-gray-900 dark:text-white", children: [
                "Table ",
                seat == null ? void 0 : seat.tableNumber,
                ", Seat ",
                seat == null ? void 0 : seat.seatNumber
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: new Date(booking.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium
                  ${booking.status.toLowerCase() === "completed" ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400"}`,
                  children: booking.status
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4 space-y-4 space-y-reverse sm:space-y-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "inline-flex justify-center items-center px-4 py-2.5 rounded-lg border border-gray-300 \r\n                bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 \r\n                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleDownload,
                className: "inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-orange-500 \r\n                text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 \r\n                dark:bg-orange-600 dark:hover:bg-orange-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
                  "Download Invoice"
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
};
const CancelBookingModal = ({ isOpen, onClose, onConfirm }) => {
  const [reason, setReason] = reactExports.useState("");
  const handleConfirm = () => {
    onConfirm(reason);
    setReason("");
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-4 text-orange-500 dark:text-orange-400", children: "Cancel Booking" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Reason for Cancellation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400",
          value: reason,
          onChange: (e) => setReason(e.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a reason" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "schedule_change", children: "Schedule Change" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "no_longer_needed", children: "No Longer Needed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 mb-4 dark:text-red-400", children: "Note: A cancellation charge of 30% of the booking amount will be deducted." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "px-4 py-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600",
          onClick: onClose,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "px-4 py-2 bg-orange-500 dark:bg-orange-400 text-white rounded-md hover:bg-orange-600 dark:hover:bg-orange-500",
          onClick: handleConfirm,
          children: "Confirm"
        }
      )
    ] })
  ] }) });
};
function BookingHistory() {
  const [bookings, setBookings] = reactExports.useState([]);
  const [workspaces, setWorkspaces] = reactExports.useState({});
  const [selectedSeat, setSelectedSeat] = reactExports.useState(null);
  const [selectedWorkspace, setSelectedWorkspace] = reactExports.useState(
    null
  );
  const [selectedBooking, setSelectedBooking] = reactExports.useState({});
  const [isDetailsOpen, setIsDetailsOpen] = reactExports.useState(false);
  const [page, setPage] = reactExports.useState(1);
  const user = useSelector((state) => state.user.user);
  const rowsPerPage = 4;
  const pages = Math.ceil(bookings.length / rowsPerPage);
  const [isCancelBookingModalOpen, setCancelBookingModalOpen] = reactExports.useState(false);
  const fetchWorkspaceNames = async (bookings2) => {
    const workspaceNames = {};
    try {
      const workspaceIds = [
        ...new Set(bookings2.map((booking) => booking.workspaceId))
      ];
      await Promise.all(
        workspaceIds.map(async (id) => {
          const response = await getSingleWorkspace(id);
          if ((response == null ? void 0 : response.status) === 200) {
            workspaceNames[id] = response.data.data.buildingName;
          }
        })
      );
      setWorkspaces(workspaceNames);
    } catch (error) {
      console.error(error);
      _t.error("Failed to fetch workspace names");
    }
  };
  const fetchBookings = async () => {
    if (!user) {
      _t.error("Something went wrong");
      return;
    }
    try {
      const response = await getBooking(user._id);
      if ((response == null ? void 0 : response.status) !== 200) {
        _t.error("Something went wrong");
        return;
      }
      const bookingData = response.data.data;
      setBookings(bookingData);
      await fetchWorkspaceNames(bookingData);
    } catch (error) {
      console.error(error);
      _t.error("Something went wrong");
    }
  };
  const handleShowDetails = async (item) => {
    setIsDetailsOpen(true);
    const { workspaceId, seatId } = item;
    setSelectedBooking(item);
    try {
      const response = await getSingleWorkspace(workspaceId);
      if ((response == null ? void 0 : response.status) === 200) {
        setSelectedWorkspace(response.data.data);
      }
      const seatData = await getSeatById(seatId);
      if ((seatData == null ? void 0 : seatData.status) === 200) {
        setSelectedSeat(seatData.data.data);
      }
    } catch (error) {
      console.error(error);
      _t.error("Something went wrong");
    }
  };
  const handleCancelBooking = async (booking) => {
    try {
      const response = await cancelBooking(booking._id);
      if ((response == null ? void 0 : response.status) === 200) {
        _t.success(
          "Booking canceled successfully , your refund will be processed within 7 days"
        );
        setCancelBookingModalOpen(false);
        fetchBookings();
      }
    } catch (error) {
      console.error(error);
      _t.error("Something went wrong");
    }
  };
  reactExports.useEffect(() => {
    fetchBookings();
  }, []);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return bookings.slice(start, end);
  }, [page, bookings]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForBookingDetails,
      {
        isOpen: isDetailsOpen,
        onClose: () => setIsDetailsOpen(false),
        workspace: selectedWorkspace,
        seat: selectedSeat,
        booking: selectedBooking
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CancelBookingModal,
      {
        isOpen: isCancelBookingModalOpen,
        onClose: () => setCancelBookingModalOpen(false),
        onConfirm: () => handleCancelBooking(selectedBooking)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Booking History" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
          "Page ",
          page,
          " of ",
          pages
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-orange-500 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-medium", children: "Workspace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden md:table-cell px-6 py-4 font-medium", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden md:table-cell px-6 py-4 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-medium", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-150",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300", children: workspaces[item.workspaceId] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden md:table-cell px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300", children: new Date(item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden md:table-cell px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex px-2.5 py-1 text-xs font-medium rounded-full
                    ${item.status.toLowerCase() === "completed" ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : item.status.toLowerCase() === "cancelled" ? "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400"}`,
                  children: item.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleShowDetails(item),
                    className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
                    children: "Details"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setSelectedBooking(item);
                      setCancelBookingModalOpen(true);
                    },
                    className: "px-3 py-1 text-sm text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300",
                    children: "Cancel"
                  }
                )
              ] }) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setPage(page - 1),
            disabled: page === 1,
            className: "px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 text-white \r\n            hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed\r\n            dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-150",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setPage(page + 1),
            disabled: page === pages,
            className: "px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 text-white \r\n            hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed\r\n            dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-150",
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}
const Bookings = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: " lg:m-auto lg:w-2/3  flex-grow flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingHistory, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  Bookings as default
};
