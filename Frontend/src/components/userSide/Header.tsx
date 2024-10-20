import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/UserAuthService";
import { setIsAuthenticated, setUser } from "../../redux/slices/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(setUser({}));
    navigate("/login");
    dispatch(setIsAuthenticated(false));
    toast.info("Logged out successfully");
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar >
        <NavbarBrand>
          <div
            onClick={() => navigate("/user/home")}
            className="w-20 ms-5 cursor-pointer"
          >
            <img src="/logo.png" alt="" />
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Complaints
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              className=" cursor-pointer"
              onPress={() => navigate(`/workspace?search=`)}
              color="warning"
            >
              View all Workspace
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              List your space
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="warning"
                name={user?.fullName}
                size="sm"
                src={user?.profilePic}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
              <DropdownItem
                onClick={() => navigate("/user/profile")}
                key="settings"
              >
                My Profile
              </DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem onClick={handleLogout} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
