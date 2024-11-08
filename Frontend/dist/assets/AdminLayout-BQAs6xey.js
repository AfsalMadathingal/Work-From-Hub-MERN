import { aw as interopRequireDefaultExports, j as jsxRuntimeExports, b as reactExports, c as useSelector, u as useNavigate, a as useDispatch, e as useLocation, S as createTheme, L as Link, T as ThemeProvider, J as toggleTheme, g as resetAdmin } from "./index-BgyoVvld.js";
import { r as requireCreateSvgIcon, D as Divider, L as List, a as ListItem, b as ListItemButton, c as ListItemIcon, d as ListItemText, C as CssBaseline, A as AppBar, T as Toolbar, I as IconButton, e as default_1$7, B as Button, f as default_1$8, g as Drawer } from "./Logout-D0QFIkxM.js";
import { b as MdDarkMode } from "./index-JtRx5LEO.js";
import { P as PRIMARY_COLOR } from "./colors-w8IeHXqN.js";
import { G as FaMoneyBill } from "./index-CBXuPOJf.js";
import { l as logout } from "./adminAuth-DQebXDMS.js";
import { B as Box, T as Typography } from "./Modal-C-CzRshO.js";
var Dashboard = {};
var _interopRequireDefault$6 = interopRequireDefaultExports;
Object.defineProperty(Dashboard, "__esModule", {
  value: true
});
var default_1$6 = Dashboard.default = void 0;
var _createSvgIcon$6 = _interopRequireDefault$6(requireCreateSvgIcon());
var _jsxRuntime$6 = jsxRuntimeExports;
default_1$6 = Dashboard.default = (0, _createSvgIcon$6.default)(/* @__PURE__ */ (0, _jsxRuntime$6.jsx)("path", {
  d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
}), "Dashboard");
var People = {};
var _interopRequireDefault$5 = interopRequireDefaultExports;
Object.defineProperty(People, "__esModule", {
  value: true
});
var default_1$5 = People.default = void 0;
var _createSvgIcon$5 = _interopRequireDefault$5(requireCreateSvgIcon());
var _jsxRuntime$5 = jsxRuntimeExports;
default_1$5 = People.default = (0, _createSvgIcon$5.default)(/* @__PURE__ */ (0, _jsxRuntime$5.jsx)("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
}), "People");
var Book = {};
var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(Book, "__esModule", {
  value: true
});
var default_1$4 = Book.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$4(requireCreateSvgIcon());
var _jsxRuntime$4 = jsxRuntimeExports;
default_1$4 = Book.default = (0, _createSvgIcon$4.default)(/* @__PURE__ */ (0, _jsxRuntime$4.jsx)("path", {
  d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z"
}), "Book");
var Work = {};
var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(Work, "__esModule", {
  value: true
});
var default_1$3 = Work.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = jsxRuntimeExports;
default_1$3 = Work.default = (0, _createSvgIcon$3.default)(/* @__PURE__ */ (0, _jsxRuntime$3.jsx)("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work");
var Assignment = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(Assignment, "__esModule", {
  value: true
});
var default_1$2 = Assignment.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
default_1$2 = Assignment.default = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
}), "Assignment");
var Support = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(Support, "__esModule", {
  value: true
});
var default_1$1 = Support.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
default_1$1 = Support.default = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3M9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59M4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59m10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58"
}), "Support");
var LightMode = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(LightMode, "__esModule", {
  value: true
});
var default_1 = LightMode.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
default_1 = LightMode.default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode");
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { component } = props;
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [isClosing, setIsClosing] = reactExports.useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { pageTitle } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = reactExports.useMemo(
    () => createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: PRIMARY_COLOR
        },
        background: {
          default: isDarkMode ? "#121212" : "#ffffff",
          paper: isDarkMode ? "#1e1e1e" : "#ffffff"
        }
      }
    }),
    [isDarkMode]
  );
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const toggleIsDarkMode = () => {
    dispatch(toggleTheme());
  };
  const handleLogout = async () => {
    await logout();
    dispatch(resetAdmin());
    navigate("/admin/login");
  };
  const drawer = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} h-screen`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", className: "h-20", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-bold", children: "Admin Panel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { className: isDarkMode ? "border-gray-700" : "border-gray-200" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(List, { children: [
      {
        text: "Dashboard",
        link: "/admin/dashboard",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$6, {})
      },
      {
        text: "Users",
        link: "/admin/user-management",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$5, {})
      },
      {
        text: "Business Users",
        link: "/admin/business-user-management",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$5, {})
      },
      {
        text: "Membership Plan",
        link: "/admin/membership",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaMoneyBill, {})
      },
      { text: "Booking", link: "/admin/bookings", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$4, {}) },
      { text: "Workspace", link: "/admin/workspace-management", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {}) },
      {
        text: "Workspace Submission",
        link: "/admin/workspace-submission",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, {})
      },
      { text: "Support", link: "/admin/support", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {}) }
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.link.toLowerCase(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ListItemButton,
      {
        sx: {
          bgcolor: location.pathname === item.link ? theme.palette.warning.main : "transparent",
          color: location.pathname === item.link ? "#fff" : theme.palette.text.primary,
          "&:hover": {
            bgcolor: theme.palette.warning.main,
            color: "#fff"
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListItemIcon,
            {
              sx: {
                color: location.pathname === item.link ? "#fff" : theme.palette.text.primary
              },
              children: item.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: item.text })
        ]
      }
    ) }) }, item.text)) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex" }, className: isDarkMode ? "bg-gray-900" : "bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CssBaseline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppBar,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: isDarkMode ? "grey.900" : PRIMARY_COLOR
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: handleDrawerToggle,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", noWrap: true, component: "div", children: pageTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              color: "inherit",
              onClick: toggleIsDarkMode,
              sx: { ml: "auto", mr: 2 },
              children: isDarkMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(MdDarkMode, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "inherit",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$8, {}),
              onClick: handleLogout,
              children: "Logout"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        component: "nav",
        sx: { width: { sm: drawerWidth }, flexShrink: { sm: 0 } },
        "aria-label": "mailbox folders",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Drawer,
            {
              container: void 0,
              variant: "temporary",
              open: mobileOpen,
              onTransitionEnd: handleDrawerTransitionEnd,
              onClose: handleDrawerClose,
              ModalProps: {
                keepMounted: true
              },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  bgcolor: isDarkMode ? "grey.900" : "background.paper"
                }
              },
              children: drawer
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Drawer,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  bgcolor: isDarkMode ? "grey.900" : "background.paper"
                }
              },
              open: true,
              children: drawer
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        },
        className: `${isDarkMode ? "bg-gray-900" : "bg-gray-50"} min-h-screen`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, {}),
          component
        ]
      }
    )
  ] }) });
}
export {
  ResponsiveDrawer as R
};
