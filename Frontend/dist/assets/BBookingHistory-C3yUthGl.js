import { r as reactExports, j as jsxRuntimeExports, b6 as X, u as useSelector, ah as ReactLoading, b7 as getBookingsByOwnerId, y as _t, b4 as E, a as useDispatch, b0 as setPageTitle, b1 as ResponsiveDrawer } from "./index-DhlojAJa.js";
const BBookingDetailsModal = ({
  isOpen,
  booking,
  onClose
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  console.log(booking);
  reactExports.useEffect(() => {
    console.log(booking);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [booking]);
  if (!isOpen || !booking) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${isOpen ? "block" : "hidden"} mt-8 fixed inset-0 z-50 overflow-y-auto dark:bg-gray-900 dark:bg-opacity-10 dark:text-white`, "aria-labelledby": "modal-title", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity animate-in fade-in duration-300 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-50",
        onClick: onClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg animate-in slide-in-from-bottom duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 pr-4 pt-4 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-5 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:flex sm:items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 w-full text-left sm:mt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold leading-6 text-center text-gray-900 dark:text-white mb-6", children: "Booking Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white", children: new Date(booking == null ? void 0 : booking.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "User" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900 dark:text-white text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_a = booking == null ? void 0 : booking.userInfo[0]) == null ? void 0 : _a.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: (_b = booking == null ? void 0 : booking.userInfo[0]) == null ? void 0 : _b.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: (_c = booking == null ? void 0 : booking.userInfo[0]) == null ? void 0 : _c.phone })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Workspace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-right text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_d = booking == null ? void 0 : booking.workspaceInfo) == null ? void 0 : _d.buildingName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                  (_e = booking == null ? void 0 : booking.workspaceInfo) == null ? void 0 : _e.street,
                  ", ",
                  (_f = booking == null ? void 0 : booking.workspaceInfo) == null ? void 0 : _f.district
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                  (_g = booking == null ? void 0 : booking.workspaceInfo) == null ? void 0 : _g.state,
                  ", ",
                  (_h = booking == null ? void 0 : booking.workspaceInfo) == null ? void 0 : _h.pinCode
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Seat Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900 dark:text-white", children: [
                "Table ",
                booking == null ? void 0 : booking.seatInfo.tableNumber,
                ", Seat ",
                booking == null ? void 0 : booking.seatInfo.seatNumber
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900 dark:text-white font-semibold", children: [
                "₹",
                booking == null ? void 0 : booking.amount
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Payment Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-sm rounded-full ${(booking == null ? void 0 : booking.paymentStatus.toLowerCase()) === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, children: booking == null ? void 0 : booking.paymentStatus })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Payment Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white", children: booking == null ? void 0 : booking.paymentMethod })
              ] })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "w-full rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
            children: "Close"
          }
        ) })
      ] })
    ] })
  ] }) });
};
const BBookingHistory = () => {
  const [bookings, setBookings] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [loading, setLoading] = reactExports.useState(false);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [selectedBooking, setSelectedBooking] = reactExports.useState({});
  const user = useSelector((state) => state.businessUser.user);
  const bookingsPerPage = 8;
  reactExports.useEffect(() => {
    const fetchBookings = async (page) => {
      try {
        setLoading(true);
        const response = await getBookingsByOwnerId(user == null ? void 0 : user._id, page, bookingsPerPage);
        if ((response == null ? void 0 : response.status) === 200) {
          setBookings(response.data.data);
          setTotalPages(Math.ceil(response.data.data.totalBookings / bookingsPerPage));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
        _t.error("An error occurred while fetching bookings");
      }
    };
    fetchBookings(currentPage);
  }, [currentPage, user == null ? void 0 : user._id]);
  const handleDownloadInvoice = (booking) => {
    var _a, _b, _c, _d;
    const doc = new E();
    doc.setFontSize(18);
    doc.setTextColor("#ff6f00");
    doc.text("INVOICE", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text(`Workspace: ${(_a = booking.workspaceInfo) == null ? void 0 : _a.buildingName}`, 20, 55);
    doc.text(`Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);
    doc.autoTable({
      head: [["Booking Details", "Description"]],
      body: [
        ["Workspace", (_b = booking.workspaceInfo) == null ? void 0 : _b.buildingName],
        ["Seat", `${(_c = booking.seatInfo[0]) == null ? void 0 : _c.tableNumber}-${(_d = booking.seatInfo[0]) == null ? void 0 : _d.seatNumber}`],
        ["Date", booking.date.split("T")[0]],
        ["Amount", booking.amount],
        ["Status", booking.status]
      ],
      startY: 90,
      theme: "striped"
    });
    doc.save("invoice.pdf");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8", children: [
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      BBookingDetailsModal,
      {
        isOpen: isModalOpen,
        booking: selectedBooking,
        onClose: () => setIsModalOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Workspace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Seat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLoading, { type: "spin", color: "#f97316", height: 32, width: 32 }) }) }) }) : bookings == null ? void 0 : bookings.map((booking, index) => {
          var _a, _b, _c, _d;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: (_a = booking.workspaceInfo) == null ? void 0 : _a.buildingName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: (_b = booking.userInfo[0]) == null ? void 0 : _b.fullName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: `S${(_c = booking.seatInfo[0]) == null ? void 0 : _c.seatNumber} - T${(_d = booking.seatInfo[0]) == null ? void 0 : _d.tableNumber}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: new Date(booking.date).toDateString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: booking.amount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full
                          ${booking.status === "success" ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100" : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"}`, children: booking.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setSelectedBooking(booking);
                    setIsModalOpen(true);
                  },
                  className: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",
                  children: "View"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleDownloadInvoice(booking),
                  className: "text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors",
                  children: "Invoice"
                }
              )
            ] }) })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => currentPage > 1 && setCurrentPage(currentPage - 1),
            disabled: currentPage === 1,
            className: "relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => currentPage < totalPages && setCurrentPage(currentPage + 1),
            disabled: currentPage === totalPages,
            className: "relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: "Next"
          }
        )
      ] }) })
    ] }) })
  ] });
};
const BUserBookingHistory = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Bookings"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col dark:bg-gray-900 h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BBookingHistory, {}) }) }) });
};
export {
  BUserBookingHistory as default
};
