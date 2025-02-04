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
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/UserAuthService";
import { setIsAuthenticated, setUser } from "../../redux/slices/userSlice";
import ThemeToggle from "../ToggleDark";
import { AppDispatch } from "../../redux/store/store";
import { IUsers } from "../../@types/user";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user as IUsers);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(setUser({})); 
    dispatch(setIsAuthenticated(false));
    navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar>
        <NavbarBrand>
          <div
            onClick={() => navigate("/user/home")}
            className="w-20 ms-5 cursor-pointer"
          >
            <img src="/logo.png" alt="logo" />
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Complaints
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link
              className="cursor-pointer"
              onPress={() => window.location.href=`/workspace?all=true`}
              color="warning"
            >
              View all Workspace
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/business/login" color="foreground">
              List your space
            </Link>
          </NavbarItem>
          {/* Uncomment ThemeToggle if it’s to be used */}
          <NavbarItem>
            <ThemeToggle />
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
                name={user?.fullName || ""}
                size="sm"
                src={user?.profilePic || ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email || ""}</p>
              </DropdownItem>
              <DropdownItem
                onClick={() => navigate("/user/profile")}
                key="settings"
              >
                My Profile
              </DropdownItem>
              <DropdownItem
                onClick={() => navigate("/user/bookings")}
                key="bookings"
              >
                Bookings
              </DropdownItem>
              <DropdownItem
                onClick={() => navigate("/user/membership")}
                key="membership"
              >
                Membership
              </DropdownItem>
              <DropdownItem
                onClick={() => navigate("/user/wallet")}
                key="wallet"
              >
                Wallet
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
