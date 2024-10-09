import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getBooking, getSingleWorkspace } from "../../services/userServices";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaEye, FaHamburger } from "react-icons/fa";
import { MenuIcon } from "lucide-react";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [workspaces, setWorkspaces] = useState({});
  const [page, setPage] = useState(1);
  const { user } = useSelector((state: RootState) => state.user);
  const rowsPerPage = 4;
  const pages = Math.ceil(bookings.length / rowsPerPage);

  // Fetch the workspace names for all bookings
  const fetchWorkspaceNames = async (bookings) => {
    const workspaceNames = {};
    try {
      const workspaceIds = [
        ...new Set(bookings.map((booking) => booking.workspaceId)),
      ];

      // Fetch names for all unique workspaceIds
      await Promise.all(
        workspaceIds.map(async (id) => {
          const response = await getSingleWorkspace(id);
          if (response.status === 200) {
            workspaceNames[id] = response.data.data.buildingName;
          }
        })
      );
      setWorkspaces(workspaceNames); // Save workspace names to state
    } catch (error) {
      toast.error("Failed to fetch workspace names");
    }
  };

  // Fetch bookings and workspace names
  const fetchBookings = async () => {
    try {
      const response = await getBooking(user?._id);
      if (response.status !== 200) {
        toast.error("Something went wrong");
        return;
      }

      const bookingData = response.data.data;

      
      setBookings(bookingData);
      await fetchWorkspaceNames(bookingData); // Fetch and store workspace names
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return bookings.slice(start, end);
  }, [page, bookings]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Workspace</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {workspaces[item.workspaceId]}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(item.date).toDateString()}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {item.status}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="">
                        <MenuIcon />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Action event example"
                      onAction={(key) => alert(key)}
                    >
                      <DropdownItem key="new">Details</DropdownItem>
                      <DropdownItem key="copy">Download Invoice</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 mx-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === pages}
          className="px-4 py-2 mx-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
