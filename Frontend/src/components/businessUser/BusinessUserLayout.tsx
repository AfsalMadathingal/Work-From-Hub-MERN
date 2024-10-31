import * as React from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { PRIMARY_COLOR } from "../../constant/colors";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { resetBUser } from "../../redux/slices/businessUserSlice";
import { logout } from "../../services/BUserAuthService";
import { toggleTheme } from "../../redux/slices/themeSlice";

const drawerWidth = 240;

interface Props {
  component: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { component } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { pageTitle } = useSelector((state: RootState) => state.businessUser);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Set up theme with dark mode support
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: PRIMARY_COLOR,
          },
          background: {
            default: isDarkMode ? "#121212" : "#ffffff",
            paper: isDarkMode ? "#1e1e1e" : "#ffffff",
          },
        },
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

  const drawer = (
    <div className={`h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex flex-col items-center justify-center p-4">
        <img src="/logo.png" className="h-20" alt="Business Logo" />
        <p className="text-md font-bold">Business Panel</p>
      </div>

      <Divider className={isDarkMode ? "border-gray-700" : "border-gray-200"} />
      <List>
        {[
          {
            text: "Dashboard",
            link: "/business/dashboard",
            icon: <DashboardIcon />,
          },
          {
            text: "Bookings",
            link: "/business/bookings",
            icon: <BookIcon />,
          },
          {
            text: "Workspace",
            link: "/business/workspace-manage",
            icon: <WorkIcon />,
          },
        ].map((item) => (
          <Link to={item.link} key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  bgcolor: location.pathname === item.link ? theme.palette.primary.main : "transparent",
                  color: location.pathname === item.link ? "#fff" : theme.palette.text.primary,
                  "&:hover": {
                    bgcolor: theme.palette.primary.main,
                    color: "#fff",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === item.link ? "#fff" : theme.palette.text.primary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} className={isDarkMode ? "bg-gray-900" : "bg-gray-50"}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: isDarkMode ? theme.palette.background.paper : PRIMARY_COLOR,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {pageTitle}
            </Typography>
            <IconButton color="inherit" onClick={toggleDarkMode} sx={{ ml: "auto", mr: 2 }}>
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </IconButton>
            <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={undefined}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor: isDarkMode ? theme.palette.background.paper : theme.palette.background.default,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor: isDarkMode ? theme.palette.background.paper : theme.palette.background.default,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          className={`${isDarkMode ? "bg-gray-900" : "bg-gray-50"} min-h-screen`}
        >
          <Toolbar />
          {component}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
