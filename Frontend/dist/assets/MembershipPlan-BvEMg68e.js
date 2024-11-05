import { r as reactExports, j as jsxRuntimeExports, u as useSelector, a as useDispatch, bU as FaSearch, bV as FaPause, bW as FaPlay, bX as dropdown_default, bY as dropdown_trigger_default, bZ as dropdown_menu_default, b_ as menu_item_base_default, b$ as changePlanStatus, c0 as planValidate, c1 as createPlan, y as _t, bG as setModal, c2 as getPlans, ba as logout, c3 as resetAdmin, c4 as searchPlans, bB as setPageTitle } from "./index-BA_d4uvr.js";
import { R as ResponsiveDrawer } from "./AdminLayout-xTK5qiL4.js";
import "./Logout-BDQ50NsR.js";
import "./Modal-B6iXN3ku.js";
import "./index-Ban5FYSq.js";
const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = reactExports.useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "text",
      value: query,
      onChange: handleSearch,
      placeholder: "Enter Plan ID...",
      className: "border p-2"
    }
  );
};
const PlansTable = () => {
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [price, setPrice] = reactExports.useState("");
  const [discount, setDiscount] = reactExports.useState("");
  const [itemsPerPage] = reactExports.useState(5);
  const [plans, setPlans] = reactExports.useState([]);
  const [totalPages, setTotalPages] = reactExports.useState(0);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const { accessToken, modal } = useSelector((state) => state.admin);
  const [error, setError] = reactExports.useState({});
  const dispatch = useDispatch();
  const handlePlanStatus = async (id, action) => {
    await changePlanStatus(id, action);
    fetchPlanData(accessToken, currentPage, itemsPerPage);
  };
  const handleDeletePlan = async (id) => {
    await changePlanStatus(id, "delete");
  };
  const handleCreatePlan = async () => {
    try {
      const error2 = planValidate(price, discount);
      if (error2) {
        return;
      }
      const priceInt = parseInt(price);
      const discountInt = parseInt(discount);
      const plan = {
        id: "",
        // you'll need to generate a unique ID for the plan
        planId: "",
        // you'll need to generate a unique plan ID
        stripeId: "",
        // you'll need to generate a unique Stripe ID
        price: priceInt,
        discount: discountInt,
        discountAmount: 0,
        // you'll need to calculate the discount amount
        createdAt: /* @__PURE__ */ new Date(),
        status: "active",
        // or whatever the default status is
        isDeleted: false
      };
      const response = await createPlan(accessToken, plan);
      if (response.data.success) {
        _t.success(response.data.message);
        fetchPlanData(accessToken, currentPage, itemsPerPage);
        dispatch(setModal(false));
      }
    } catch (error2) {
      console.log(error2);
      _t.error("something went wrong");
    }
  };
  const fetchPlanData = async (accessToken2, page, itemsPerPage2) => {
    const response = await getPlans(accessToken2, page, itemsPerPage2);
    if ((response == null ? void 0 : response.status) === 200) {
      setPlans(response.data.data.allPlans);
      setTotalPages(response.data.data.totalPages);
    } else if ((response == null ? void 0 : response.status) === 401) {
      await logout();
      _t.error("session expired");
      dispatch(resetAdmin());
    } else {
      _t.error("something went wrong");
    }
  };
  reactExports.useEffect(() => {
    setError({});
    fetchPlanData(accessToken, currentPage, itemsPerPage);
  }, [currentPage]);
  const openModal = () => {
    dispatch(setModal(true));
  };
  const closeModal = () => {
    dispatch(setModal(false));
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const searchPlan = async () => {
    var _a, _b, _c, _d, _e, _f;
    if (searchQuery === "") {
      _t.error("Please enter a valid id");
      return;
    }
    const response = await searchPlans(1, itemsPerPage, searchQuery);
    if ((response == null ? void 0 : response.status) === 200) {
      if (response.data.data.length === 0) {
        _t.error("No plans found");
        return;
      }
      if ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data) == null ? void 0 : _b.allPlans) {
        setPlans((_d = (_c = response == null ? void 0 : response.data) == null ? void 0 : _c.data) == null ? void 0 : _d.allPlans);
        setTotalPages((_f = (_e = response == null ? void 0 : response.data) == null ? void 0 : _e.data) == null ? void 0 : _f.totalPages);
        return;
      }
      setPlans(response.data.data);
    } else if ((response == null ? void 0 : response.status) === 401) {
      await logout();
      _t.error("session expired");
      dispatch(resetAdmin());
    } else {
      _t.error("something went wrong");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8", children: [
    modal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all sm:w-96", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: closeModal,
          className: "absolute right-4 top-4 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100 border-b border-orange-500 dark:border-orange-400 pb-2", children: "Create a plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-300", children: "Enter the price and discount amount" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-200", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                pattern: "[0-9]*",
                onChange: (e) => setPrice(e.target.value),
                className: "mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:border-orange-400",
                placeholder: "Enter price"
              }
            ),
            (error == null ? void 0 : error.price) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: error.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-200", children: "Discount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                pattern: "[0-9]*",
                onChange: (e) => setDiscount(e.target.value),
                className: "mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:border-orange-400",
                placeholder: "Enter discount"
              }
            ),
            (error == null ? void 0 : error.discount) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: error.discount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleCreatePlan,
              className: "w-full rounded-md bg-orange-500 dark:bg-orange-400 px-4 py-2 text-sm font-semibold text-white dark:text-gray-200 shadow-sm hover:bg-orange-600 dark:hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:ring-offset-2",
              children: "Save Plan"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Plans Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SearchComponent, { onSearch: handleSearch }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: searchPlan,
                className: "ml-2 inline-flex items-center rounded-md bg-orange-500 dark:bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 dark:hover:bg-orange-500",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaSearch, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: openModal,
              className: "inline-flex items-center rounded-md bg-orange-500 dark:bg-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 dark:hover:bg-orange-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: "+" }),
                "Create Plan"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300 md:table-cell", children: "S.No" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300 md:table-cell", children: "Plan ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300", children: "Discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800", children: plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300 md:table-cell", children: (currentPage - 1) * itemsPerPage + index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300 md:table-cell", children: plan.stripeId }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100", children: [
            "₹",
            plan.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "whitespace-nowrap px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            plan.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              FaPause,
              {
                onClick: () => handlePlanStatus(plan == null ? void 0 : plan.stripeId, "pause"),
                className: "mr-2 h-4 w-4 cursor-pointer text-red-500 dark:text-red-400"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              FaPlay,
              {
                onClick: () => handlePlanStatus(plan == null ? void 0 : plan.stripeId, "active"),
                className: "mr-2 h-4 w-4 cursor-pointer text-green-500 dark:text-green-400"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex rounded-full px-3 py-1 text-xs font-medium ${plan.status === "active" ? "bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-200"}`,
                children: plan.status
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100", children: [
            "₹",
            plan.discount
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(dropdown_default, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(dropdown_trigger_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(dropdown_menu_default, { "aria-label": "Actions", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(menu_item_base_default, { children: "Edit Plan" }, "edit"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                menu_item_base_default,
                {
                  className: "text-red-600 dark:text-red-400",
                  color: "danger",
                  onClick: () => handleDeletePlan(plan == null ? void 0 : plan.stripeId),
                  children: "Remove Plan"
                },
                "delete"
              )
            ] })
          ] }) })
        ] }, plan.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center space-x-1 border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6", children: pageNumbers.map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCurrentPage(number),
          className: `relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${currentPage === number ? "bg-orange-500 text-white dark:bg-orange-400 dark:text-white" : "bg-white dark:bg-gray-700 text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"}`,
          children: number
        },
        number
      )) })
    ] }) })
  ] });
};
const MembershipPlan = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Plan Management"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(PlansTable, {}) }) }) });
};
export {
  MembershipPlan as default
};
