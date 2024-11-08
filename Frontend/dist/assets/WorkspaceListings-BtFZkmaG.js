import { b as reactExports, j as jsxRuntimeExports, L as Link, c as useSelector, a as useDispatch, l as setLoading } from "./index-CRCdbRYf.js";
import { H as Header } from "./Header-DjG3epF5.js";
import { F as Footer } from "./Footer-C6GpN6k1.js";
import { A as AnimatedPage } from "./Animation-Cos3fwbw.js";
import { S as Star, a as SearchBar } from "./SearchBar-CWOPgobR.js";
import { B } from "./react-toastify.esm-Bun9FK4S.js";
import { d as getWorkspace } from "./UserRouter-k4GHkO3b.js";
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
import "./colors-BHzic30Z.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CreditCard = createLucideIcon("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
const amenities = [
  { id: "ac", label: "AC", icon: "❄️" },
  { id: "restRoom", label: "Rest Room", icon: "🚽" },
  { id: "powerBackup", label: "Power Backup", icon: "⚡" }
];
const QuickFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = reactExports.useState({
    ac: "",
    restRoom: "",
    powerBackup: "",
    rating: "",
    price: ""
  });
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: checked };
      onFilterChange(newFilters);
      return newFilters;
    });
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-md border border-gray-100 divide-y divide-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100", children: "Amenities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: amenities.map(({ id, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors dark:hover:bg-gray-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                name: id,
                checked: filters[id] ? true : false,
                onChange: handleCheckboxChange,
                className: "peer h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 flex items-center text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: icon }),
              label
            ] })
          ]
        },
        id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100", children: "Rating" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["4", "3", "2", "1"].map((rating) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors dark:hover:bg-gray-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "rating",
                value: rating,
                checked: filters.rating === rating,
                onChange: handleRadioChange,
                className: "h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 flex items-center text-gray-700 dark:text-gray-300", children: [
              [...Array(Number(rating))].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  size: 16,
                  className: "fill-yellow-400 text-yellow-400 mr-0.5"
                },
                i
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1", children: "& Up" })
            ] })
          ]
        },
        rating
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100", children: "Price" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
        { value: "highToLow", label: "High to Low" },
        { value: "lowToHigh", label: "Low to High" }
      ].map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors dark:hover:bg-gray-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "price",
                value,
                checked: filters.price === value,
                onChange: handleRadioChange,
                className: "h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-gray-700 dark:text-gray-300", children: label })
          ]
        },
        value
      )) })
    ] })
  ] });
};
const ListingCard = ({ listing }) => {
  const renderStars = (rating) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: `w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`
      },
      index
    )) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 md:h-full md:w-1/3 md:absolute md:left-0 md:top-0", children: [
      listing.photos && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: listing.photos[0],
          alt: listing.buildingName,
          className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative md:ml-[33.333333%] p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: listing.buildingName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          renderStars(4),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: "(4.0)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              listing.seatsPerTable * listing.tablesAvailable,
              " Total Seats"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Open: ",
              listing.openHours
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "₹",
              listing.pricePerSeat,
              " / Seat"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: listing.state })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/workspace/${listing._id}/book`,
            className: "flex-1",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "w-full px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 \r\n                hover:from-orange-600 hover:to-orange-700 \r\n                text-white font-medium rounded-lg\r\n                transform transition-all duration-300 \r\n                hover:shadow-md active:scale-[0.98]\r\n                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2\r\n                dark:focus:ring-offset-gray-800",
                children: "Book Now"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/workspace/${listing._id}/view`,
            className: "flex-1",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "w-full px-4 py-2.5 border-2 border-orange-500 \r\n                text-orange-500 font-medium rounded-lg\r\n                hover:bg-orange-50 dark:hover:bg-orange-900/20\r\n                transform transition-all duration-300 \r\n                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2\r\n                dark:border-orange-400 dark:text-orange-400\r\n                dark:focus:ring-offset-gray-800",
                children: "View Details"
              }
            )
          }
        )
      ] })
    ] }) })
  ] });
};
const ListingCardSkeloton = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col mb-6 sm:flex-row sm:items-center sm:justify-between animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-lg sm:rounded-l-lg sm:w-1/3 h-48 bg-gray-300 dark:bg-gray-600 object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:w-2/3 sm:py-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "bg-gray-300 dark:bg-gray-600 rounded h-6 w-1/2 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:w-1/2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-gray-300 dark:bg-gray-600 rounded h-4 w-3/4 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-gray-300 dark:bg-gray-600 rounded h-4 w-1/2 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-gray-300 dark:bg-gray-600 rounded h-4 w-2/3 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-gray-300 dark:bg-gray-600 rounded h-4 w-3/4 mb-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:w-1/2 sm:items-end sm:mt-0 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-300 dark:bg-gray-600 rounded h-6 w-24 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-gray-300 dark:bg-gray-600 text-white px-4 py-2 rounded-lg h-10 w-32 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-gray-300 dark:bg-gray-600 border px-4 py-2 rounded-lg h-10 w-32" })
        ] })
      ] })
    ] })
  ] }) });
};
const NotFound = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-screen bg-[#fcefe7] dark:bg-gray-800 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold text-orange-500 mb-6 dark:text-orange-400", children: "Sorry!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-gray-700 mb-4 dark:text-gray-300", children: "Nothing found here." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 dark:text-gray-400", children: "Please try searching for something else or check back later." })
  ] });
};
const Listings = ({ filters }) => {
  const [listings, setListings] = reactExports.useState([]);
  const { loading } = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(0);
  const [listPerLoad] = reactExports.useState(2);
  const dispatch = useDispatch();
  const prevFiltersRef = reactExports.useRef(filters);
  const fetchListings = async (filters2, page = 1) => {
    try {
      dispatch(setLoading(true));
      const response = await getWorkspace(page, filters2, listPerLoad);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if ((response == null ? void 0 : response.status) === 200) {
        const newWorkspaces = response.data.data.Workspaces || response.data.data;
        const total = response.data.data.totalPages;
        setListings((prevListings) => {
          return page === 1 ? newWorkspaces : [...prevListings, ...newWorkspaces];
        });
        setTotalPages(total);
      } else {
        B.error("Failed to fetch listings");
      }
    } catch (error) {
      console.log(error);
      B.error("An error occurred while fetching listings");
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchListings(filters, nextPage);
    } else {
      B("No more listings to load");
    }
  };
  reactExports.useEffect(() => {
    console.log(filters);
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    console.log(params);
    const changeInFilter = {};
    params.forEach((value, key) => {
      changeInFilter[key] = value;
    });
    if (prevFiltersRef.current !== filters) {
      setCurrentPage(1);
      setListings([]);
      fetchListings(changeInFilter, 1);
    }
    prevFiltersRef.current = filters;
  }, [filters]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:gap-6 animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ListingCardSkeloton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ListingCardSkeloton, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
      listings.length === 0 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:gap-6", children: listings == null ? void 0 : listings.map((listing) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListingCard, { listing })
        },
        listing.id
      )) }),
      currentPage < totalPages && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 md:pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleLoadMore,
          className: "w-full bg-gradient-to-r from-orange-500 to-orange-600 \r\n                hover:from-orange-600 hover:to-orange-700 \r\n                dark:from-orange-600 dark:to-orange-700 \r\n                dark:hover:from-orange-700 dark:hover:to-orange-800 \r\n                text-white font-medium px-6 py-3 rounded-lg \r\n                transform transition-all duration-300 \r\n                hover:shadow-md active:scale-[0.98]\r\n                disabled:opacity-50 disabled:cursor-not-allowed\r\n                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2\r\n                dark:focus:ring-offset-gray-800",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
            "View More",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        }
      ) }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 md:pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" }) })
    ] })
  ] });
};
const AllListings = () => {
  const [filters, setFilters] = reactExports.useState({});
  const handleFilterChange = (newFilters) => {
    console.log("======================newFilters==============");
    console.log(newFilters);
    console.log("====================================");
    if (newFilters.search) {
      delete newFilters.all;
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters
    }));
    const param = Object.keys(newFilters).map((key) => `${key}=${newFilters[key]}`).join("&");
    window.history.pushState({}, "", `?${param}`);
  };
  reactExports.useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const initialFilters = {};
    params.forEach((value, key) => {
      initialFilters[key] = value;
    });
    if (Object.keys(initialFilters).length > 0) {
      setFilters(initialFilters);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-4 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchBar,
        {
          onSearch: (searchQuery) => handleFilterChange({ ...filters, search: searchQuery }),
          defaultValue: filters.search || ""
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFilters, { onFilterChange: handleFilterChange }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-3/4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Listings, { filters }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 -z-10 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1/2 -right-1/2 w-96 h-96 bg-orange-200 dark:bg-gray-600 rounded-full blur-3xl opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-orange-300 dark:bg-gray-500 rounded-full blur-3xl opacity-20" })
    ] })
  ] });
};
const WorkspaceListingsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-[#fcefe7] dark:bg-gray-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AllListings, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  WorkspaceListingsPage as default
};
