import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getAvailableSeats,
  getBooking,
  getSeatById,
  getSingleWorkspace,
} from "../../services/userServices";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { MenuIcon } from "lucide-react";
import { IWorkspace } from "../../@types/workspace";
import { ISeat } from "../../@types/seat";
import ModalForBookingDetails from "./ModalForBookingDetails";
import { FaEye } from "react-icons/fa";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [workspaces, setWorkspaces] = useState({});
  const [selectedSeat, setSelectedSeat] = useState<ISeat | null>(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState<IWorkspace | null>(
    null
  );
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
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

  const handleShowDetails = async (item) => {
    setIsDetailsOpen(true);
    const { workspaceId, seatId } = item;

    setSelectedBooking(item);

    try {
      const response = await getSingleWorkspace(workspaceId);
      if (response.status === 200) {
        setSelectedWorkspace(response.data.data);
      }

      const seatData = await getSeatById(seatId);

      if (seatData.status === 200) {
        setSelectedSeat(seatData.data.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }


  };

   const handleSupport = () => {
    toast.error("Sorry! Support is not available at the moment. Please try again later.");
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
    <>
    <ModalForBookingDetails isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} workspace={selectedWorkspace} seat={selectedSeat} booking={selectedBooking} />
    <div className="container mx-auto px-4">
  <h1 className="text-2xl font-bold mb-4">Booking History</h1>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-orange-500 text-white uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Workspace</th>
          {/* Date column hidden on all screen sizes */}
          <th className="py-3 px-6 text-left hidden md:table-cell">Date</th>
          {/* Status column stays visible */}
          <th className="py-3 px-6 hidden md:table-cell  text-left">Status</th>
          {/* Action column now always visible */}
          <th className="py-3 px-6 text-left">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {items.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-200 hover:bg-orange-100"
          >
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {workspaces[item.workspaceId]}
            </td>
            {/* Hide Date column on smaller screens */}
            <td className="py-3 px-6 text-left whitespace-nowrap hidden md:table-cell">
              {new Date(item.date).toDateString()}
            </td>
            <td className="py-3 px-6 hidden md:table-cell text-left whitespace-nowrap">
              {item.status}
            </td>
            {/* Action column always visible */}
            <td className="py-3 px-6 text-left whitespace-nowrap">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="text-gray-700">
                    <MenuIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Action event example">
                  <DropdownItem
    
                    onClick={() => {
                      handleShowDetails(item);
                    }}
                  >
                    Details
                  </DropdownItem>
                  <DropdownItem
    
                    onClick={() => {
                      handleSupport();
                    }}
                  >
                    Support
                  </DropdownItem>

                </DropdownMenu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  {/* Pagination */}
  <div className="flex justify-center mt-4">
    <button
      onClick={() => setPage(page - 1)}
      disabled={page === 1}
      className="px-4 py-2 mx-1 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
    >
      Previous
    </button>
    <button
      onClick={() => setPage(page + 1)}
      disabled={page === pages}
      className="px-4 py-2 mx-1 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
    >
      Next
    </button>
  </div>
</div>


    
    </>
  );
}
