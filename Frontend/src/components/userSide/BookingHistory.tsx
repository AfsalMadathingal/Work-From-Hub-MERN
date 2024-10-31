import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  cancelBooking,
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
import CancelBookingModal from "./CancelBookingModal";

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
  const user = useSelector((state: RootState) => state.user.user as IUsers);
  const rowsPerPage = 4;
  const pages = Math.ceil(bookings.length / rowsPerPage);
  const [isCancelBookingModalOpen, setCancelBookingModalOpen] = useState(false);


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

  const handleCancelBooking = async (booking) => {
    try {


      
      const response = await cancelBooking(booking._id);

      

      if (response.status === 200) {
        toast.success("Booking canceled successfully , your refund will be processed within 7 days");
        setCancelBookingModalOpen(false);
        fetchBookings();
      }
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
    <>
      <ModalForBookingDetails
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        workspace={selectedWorkspace}
        seat={selectedSeat}
        booking={selectedBooking}
      />
      <CancelBookingModal
        isOpen={isCancelBookingModalOpen}
        onClose={() => setCancelBookingModalOpen(false)}
        onConfirm={() => handleCancelBooking(selectedBooking)}
      />
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Booking History
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Page {page} of {pages}
        </span>
      </div>

      {/* Table Container */}
      <div className="relative overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase">
            <tr className="bg-orange-500 text-white">
              <th className="px-6 py-4 font-medium">Workspace</th>
              <th className="hidden md:table-cell px-6 py-4 font-medium">Date</th>
              <th className="hidden md:table-cell px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item, index) => (
              <tr key={index} 
                className="bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                  {workspaces[item.workspaceId]}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full
                    ${item.status.toLowerCase() === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                      : item.status.toLowerCase() === 'cancelled'
                      ? 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400'
                    }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative">
                    <button
                      onClick={() => handleShowDetails(item)}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBooking(item);
                        setCancelBookingModalOpen(true);
                      }}
                      className="px-3 py-1 text-sm text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 text-white 
            hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed
            dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-150"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === pages}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 text-white 
            hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed
            dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-150"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
}
