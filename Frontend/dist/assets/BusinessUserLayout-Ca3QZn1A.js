import { b as reactExports, c as useSelector, u as useNavigate, a as useDispatch, S as createTheme, j as jsxRuntimeExports, L as Link, T as ThemeProvider, J as toggleTheme, Q as resetBUser } from "./index-BgyoVvld.js";
import { D as Divider, L as List, a as ListItem, b as ListItemButton, c as ListItemIcon, d as ListItemText, C as CssBaseline, A as AppBar, T as Toolbar, I as IconButton, e as default_1, B as Button, f as default_1$1, g as Drawer } from "./Logout-D0QFIkxM.js";
import { a as MdLightMode, b as MdDarkMode } from "./index-JtRx5LEO.js";
import { P as PRIMARY_COLOR } from "./colors-w8IeHXqN.js";
import { l as logout } from "./BUserAuthService-DL4tNSdu.js";
import { c as createLucideIcon } from "./createLucideIcon-aT5HAUZt.js";
import { B as Box, T as Typography } from "./Modal-C-CzRshO.js";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Building = createLucideIcon("Building", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LayoutDashboard = createLucideIcon("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ticket = createLucideIcon("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Workflow = createLucideIcon("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { component } = props;
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [isClosing, setIsClosing] = reactExports.useState(false);
  const { pageTitle } = useSelector((state) => state.businessUser);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };
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
  const handleLogout = async () => {
    await logout();
    dispatch(resetBUser());
    navigate("/business/login");
  };
  const drawer = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", className: "h-20", alt: "Business Logo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-bold", children: "Business Panel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { className: isDarkMode ? "border-gray-700" : "border-gray-200" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(List, { children: [
      {
        text: "Dashboard",
        link: "/business/dashboard",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, {})
      },
      {
        text: "Bookings",
        link: "/business/bookings",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, {})
      },
      {
        text: "Submit Workspace",
        link: "/business/workspace-manage",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, {})
      },
      {
        text: "Listed Workspaces",
        link: "/business/workspace/approved",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, {})
      },
      {
        text: "Properties On Hold",
        link: "/business/workspace/on-hold",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, {})
      }
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.link, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ListItemButton,
      {
        sx: {
          bgcolor: location.pathname === item.link ? theme.palette.primary.main : "transparent",
          color: location.pathname === item.link ? "#fff" : theme.palette.text.primary,
          "&:hover": {
            bgcolor: theme.palette.primary.main,
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
          bgcolor: isDarkMode ? theme.palette.background.paper : PRIMARY_COLOR
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", noWrap: true, component: "div", children: pageTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { color: "inherit", onClick: toggleDarkMode, sx: { ml: "auto", mr: 2 }, children: isDarkMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(MdLightMode, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(MdDarkMode, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {}), onClick: handleLogout, children: "Logout" })
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
                  bgcolor: isDarkMode ? theme.palette.background.paper : theme.palette.background.default
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
                  bgcolor: isDarkMode ? theme.palette.background.paper : theme.palette.background.default
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
