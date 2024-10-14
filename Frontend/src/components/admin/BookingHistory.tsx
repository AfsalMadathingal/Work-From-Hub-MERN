import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllBookings } from "../../services/adminService";
import { IUsers } from "../../@types/user";
import { ISeat } from "../../@types/seat";
import { IWorkspace } from "../../@types/workspace";
import ReactLoading from "react-loading";
import BookingDetailsModal from "./BookingDetails";

interface Booking {
  workspaceName: string;
  userId: IUsers;
  seatId: ISeat;
  workspaceId: IWorkspace;
  date: string;
  amount: string;
  status: string;
  paymentIntentId: string;
}

const AdminBookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const bookingsPerPage = 8;

  const fetchBookings = async (page: number) => {
    try {
      setLoading(true);
      const response = await getAllBookings(page, bookingsPerPage);
      if (response.status === 200) {
        setBookings(response.data.data.bookings);
        setTotalPages(
          Math.ceil(response.data.data.totalBookings / bookingsPerPage)
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred while fetching bookings");
    }
  };

  useEffect(() => {
    fetchBookings(currentPage);
  }, [currentPage]);

  const handleViewDetails = (booking: Booking) => {
    console.log("View details for booking:", booking);
  };

  const handleDownloadInvoice = (booking: Booking) => {
    console.log("Download invoice for booking:", booking);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleViewDetailsModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  return (
    <>
    {isModalOpen && (
        <BookingDetailsModal booking={selectedBooking} onClose={() => setIsModalOpen(false)}/>
    )}
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Workspace</th>
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Seat</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan={7} className="py-3 px-6 text-center">
                  <div className="flex items-center justify-center w-full h-20">
                    <ReactLoading
                      type="spin"
                      color="orange"
                      height={20}
                      width={20}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-gray-700 text-sm font-light">
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {booking.workspaceId?.buildingName}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {booking.userId?.fullName}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {booking.seatId?.seatNumber}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {new Date(booking.date).toDateString()}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {booking.amount}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        booking.status === "success"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap flex space-x-2">
                    <button
                      onClick={() =>handleViewDetailsModal(booking)}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownloadInvoice(booking)}
                      className="text-orange-500 hover:underline"
                    >
                      Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default AdminBookingHistory;
