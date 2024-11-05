import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllBookings } from "../../services/adminService";
import { IUsers } from "../../@types/user";
import { ISeat } from "../../@types/seat";
import { IWorkspace } from "../../@types/workspace";
import ReactLoading from "react-loading";
import BookingDetailsModal from "./BookingDetailsModal";
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // Optional: for table support
import { UserOptions } from 'jspdf-autotable';
interface Booking {
  workspaceName: string;
  userId: IUsers;
  seatId: ISeat;
  workspaceId: IWorkspace;
  date: string;
  amount: string;
  status: string;
  paymentIntentId: string;
  _id: string;
  checkIn: string;
  checkOut: string;
  paymentStatus: string;
  paymentMethod: string;
}

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDFWithPlugin;
  lastAutoTable: { finalY: number };
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
      if (response?.status === 200) {
        setBookings(response.data.data.bookings);
        setTotalPages(
          Math.ceil(response.data.data.totalBookings / bookingsPerPage)
        );
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
      toast.error("An error occurred while fetching bookings");
    }
  };

  useEffect(() => {
    fetchBookings(currentPage);
  }, [currentPage]);

  const handleDownloadInvoice = (booking: Booking) => {
    const doc = new jsPDF() as jsPDFWithPlugin;

    // Add a logo
    const logoUrl = "/logo.png"; // Replace with your logo URL
    doc.addImage(logoUrl, "PNG", 20, 10, 30, 30); // Adds logo to the top left corner

    // Add Invoice Title
    doc.setFontSize(18);
    doc.setTextColor("#ff6f00");
    doc.text("INVOICE", 105, 20, { align: "center" });

    // Add a horizontal line
    doc.setDrawColor(255, 165, 0); // Set orange color for lines
    doc.line(20, 45, 190, 45); // Horizontal line after title

    // Add Company Name and Info
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text(`Workspace: ${booking.workspaceId?.buildingName}`, 20, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);

    // Add Recipient Info (User Details)
    doc.text(`Billed To:`, 140, 55);
    doc.text(`${booking.userId?.fullName}`, 140, 65); // Replace with actual user details
    doc.text(`${booking.userId?.email}`, 140, 75);

    // Section for Booking Information
    doc.setFontSize(14);
    doc.text("Booking Details", 20, 90);
    doc.setFontSize(12);
    doc.text(`Amount Paid: ${booking.amount}`, 20, 100);
    doc.text(
      `Seat: ${booking.seatId?.tableNumber}-${booking.seatId?.seatNumber}`,
      20,
      110
    );
    doc.text(`Status: ${booking.status}`, 20, 120);

    // Add another line for separation
    doc.line(20, 130, 190, 130);

    // Optional: Add auto-table for better presentation of detailed information
    doc.autoTable({
      head: [["Booking Details", "Description"]],
      body: [
        ["Workspace", booking.workspaceId?.buildingName],
        [
          "Seat",
          `${booking.seatId?.tableNumber}-${booking.seatId?.seatNumber}`,
        ],
        ["Date", booking.date.split("T")[0]],
        ["Amount", booking.amount],
        ["Status", booking.status],
      ],
      startY: 140,
      theme: "striped",
    });

    // Footer Section with Note and Signature Area
    doc.setFontSize(10);
    doc.text(
      "Thank you for booking with us!",
      20,
      doc.lastAutoTable.finalY + 20
    );
    doc.text(
      "For queries, contact support@example.com",
      20,
      doc.lastAutoTable.finalY + 30
    );

    // Final horizontal line
    doc.line(
      20,
      doc.lastAutoTable.finalY + 40,
      190,
      doc.lastAutoTable.finalY + 40
    );

    // Save the PDF
    doc.save("invoice.pdf");
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
    <BookingDetailsModal
      isOpen={isModalOpen}
      booking={selectedBooking !== null ? selectedBooking : {} as Booking}
      onClose={() => setIsModalOpen(false)}
    />

      <div className="container mx-auto px-4">
        <div className="overflow-x-auto rounded-lg border dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Workspace
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Seat
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Actions
                </th>
              </tr>
            </thead>
            {loading ? (
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                <tr>
                  <td colSpan={7} className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center w-full h-20">
                      <ReactLoading
                        type="spin"
                        color="#f97316"
                        height={20}
                        width={20}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                {bookings.map((booking, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {booking.workspaceId?.buildingName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {booking.userId?.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {booking.seatId?.seatNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {new Date(booking.date).toDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    booking.status === "success"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleViewDetailsModal(booking)}
                          className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDownloadInvoice(booking)}
                          className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
                        >
                          Invoice
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminBookingHistory;
