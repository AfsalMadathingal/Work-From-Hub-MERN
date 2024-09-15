import * as React from "react";
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
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupportIcon from "@mui/icons-material/Support";
import { Link, useNavigate } from "react-router-dom";
import { PRIMARY_COLOR } from "../../constant/colors";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { resetBUser } from "../../redux/slices/businessUserSlice";
import { logout } from "../../services/BUserAuthService";


const drawerWidth = 240;

interface Props {
  component: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { component } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { pageTitle,  } = useSelector((state: RootState) => state.businessUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // New state for modal


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
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src="/logo.png" className="h-20 " alt="" />
        <p className="text-md font-bold">Business Panel</p>
      </div>

      <Divider />
      <List>
        {[
          {
            text: "Dashboard",
            link: "/business/dashboard",
            icon: <DashboardIcon />,
          },
          { text: "Booking", link: "/business/booking", icon: <BookIcon /> },
          { text: "Workspace", link: "/business/workspace-manage", icon: <WorkIcon /> },
          {
            text: "Workspace Submission",
            link: "/business/workspace-submission",
            icon: <AssignmentIcon />,
          },
          { text: "Support", link: "/business/support", icon: <SupportIcon /> },
        ].map((item) => (
          <Link to={`${item.link.toLowerCase()}`} key={item.text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  className="hover:text-orange-600"
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: PRIMARY_COLOR,
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
          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            sx={{ ml: "auto" }}
            onClick={handleLogout}
          >
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {component}
      </Box>


    </Box>
  );
}