import React, { useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { toast } from "react-toastify";



export default function Header() {

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  


  useEffect(() => {
   
  },[])
  return (
    <Navbar>
      <NavbarBrand>
        <div className="w-20">
        <img src="/logo.png" alt="" />
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Complaints
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" color="warning">
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
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem 
            onClick={() => {
              toast.info("Logging out");
            }}
            key="logout" color="danger">
              
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
