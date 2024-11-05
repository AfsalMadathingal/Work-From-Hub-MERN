import { r as reactExports, j as jsxRuntimeExports, a_ as X, ag as ReactLoading, bE as getAllBookings, y as _t, aZ as E, a as useDispatch, bB as setPageTitle } from "./index-BA_d4uvr.js";
import { R as ResponsiveDrawer } from "./AdminLayout-xTK5qiL4.js";
import "./Logout-BDQ50NsR.js";
import "./Modal-B6iXN3ku.js";
import "./index-Ban5FYSq.js";
const BookingDetailsModal = ({
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
  }, []);
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_a = booking == null ? void 0 : booking.userId) == null ? void 0 : _a.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: (_b = booking == null ? void 0 : booking.userId) == null ? void 0 : _b.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: (_c = booking == null ? void 0 : booking.userId) == null ? void 0 : _c.phone })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Workspace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-right text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_d = booking == null ? void 0 : booking.workspaceId) == null ? void 0 : _d.buildingName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                  (_e = booking == null ? void 0 : booking.workspaceId) == null ? void 0 : _e.street,
                  ", ",
                  (_f = booking == null ? void 0 : booking.workspaceId) == null ? void 0 : _f.district
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                  (_g = booking == null ? void 0 : booking.workspaceId) == null ? void 0 : _g.state,
                  ", ",
                  (_h = booking == null ? void 0 : booking.workspaceId) == null ? void 0 : _h.pinCode
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-500 dark:text-gray-300", children: "Seat Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900 dark:text-white", children: [
                "Table ",
                booking == null ? void 0 : booking.seatId.tableNumber,
                ", Seat ",
                booking == null ? void 0 : booking.seatId.seatNumber
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
const AdminBookingHistory = () => {
  const [bookings, setBookings] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [loading, setLoading] = reactExports.useState(false);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [selectedBooking, setSelectedBooking] = reactExports.useState(null);
  const bookingsPerPage = 8;
  const fetchBookings = async (page) => {
    try {
      setLoading(true);
      const response = await getAllBookings(page, bookingsPerPage);
      if ((response == null ? void 0 : response.status) === 200) {
        setBookings(response.data.data.bookings);
        setTotalPages(
          Math.ceil(response.data.data.totalBookings / bookingsPerPage)
        );
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
      _t.error("An error occurred while fetching bookings");
    }
  };
  reactExports.useEffect(() => {
    fetchBookings(currentPage);
  }, [currentPage]);
  const handleDownloadInvoice = (booking) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
    doc.text(`Workspace: ${(_a = booking.workspaceId) == null ? void 0 : _a.buildingName}`, 20, 55);
    doc.text(`Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);
    doc.text(`Billed To:`, 140, 55);
    doc.text(`${(_b = booking.userId) == null ? void 0 : _b.fullName}`, 140, 65);
    doc.text(`${(_c = booking.userId) == null ? void 0 : _c.email}`, 140, 75);
    doc.setFontSize(14);
    doc.text("Booking Details", 20, 90);
    doc.setFontSize(12);
    doc.text(`Amount Paid: ${booking.amount}`, 20, 100);
    doc.text(
      `Seat: ${(_d = booking.seatId) == null ? void 0 : _d.tableNumber}-${(_e = booking.seatId) == null ? void 0 : _e.seatNumber}`,
      20,
      110
    );
    doc.text(`Status: ${booking.status}`, 20, 120);
    doc.line(20, 130, 190, 130);
    doc.autoTable({
      head: [["Booking Details", "Description"]],
      body: [
        ["Workspace", (_f = booking.workspaceId) == null ? void 0 : _f.buildingName],
        [
          "Seat",
          `${(_g = booking.seatId) == null ? void 0 : _g.tableNumber}-${(_h = booking.seatId) == null ? void 0 : _h.seatNumber}`
        ],
        ["Date", booking.date.split("T")[0]],
        ["Amount", booking.amount],
        ["Status", booking.status]
      ],
      startY: 140,
      theme: "striped"
    });
    doc.setFontSize(10);
    doc.text(
      "Thank you for booking with us!",
      20,
      doc.lastAutoTable.finalY + 20
    );
    doc.text(
      "For queries, contact support@example.com",
      20,
      doc.lastAutoTable.finalY + 30
    );
    doc.line(
      20,
      doc.lastAutoTable.finalY + 40,
      190,
      doc.lastAutoTable.finalY + 40
    );
    doc.save("invoice.pdf");
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleViewDetailsModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingDetailsModal,
      {
        isOpen: isModalOpen,
        booking: selectedBooking !== null ? selectedBooking : {},
        onClose: () => setIsModalOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "Workspace"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "User"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "Seat"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "Date"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "Amount"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "Status"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400",
              children: "Actions"
            }
          )
        ] }) }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-full h-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReactLoading,
          {
            type: "spin",
            color: "#f97316",
            height: 20,
            width: 20
          }
        ) }) }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700", children: bookings.map((booking, index) => {
          var _a, _b, _c;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: (_a = booking.workspaceId) == null ? void 0 : _a.buildingName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: (_b = booking.userId) == null ? void 0 : _b.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: (_c = booking.seatId) == null ? void 0 : _c.seatNumber }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: new Date(booking.date).toDateString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: booking.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `px-3 py-1 rounded-full text-xs font-medium
                  ${booking.status === "success" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`,
                    children: booking.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleViewDetailsModal(booking),
                      className: "text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors",
                      children: "View"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleDownloadInvoice(booking),
                      className: "text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors",
                      children: "Invoice"
                    }
                  )
                ] }) })
              ]
            },
            index
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handlePreviousPage,
            disabled: currentPage === 1,
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleNextPage,
            disabled: currentPage === totalPages,
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
};
const BookingHistory = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Booking History"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminBookingHistory, {}) }) }) });
};
export {
  BookingHistory as default
};
