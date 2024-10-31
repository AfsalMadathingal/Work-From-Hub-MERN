import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllBookings } from "../../services/adminService";
import { IUsers } from "../../@types/user";
import { ISeat } from "../../@types/seat";
import { IWorkspace } from "../../@types/workspace";
import ReactLoading from "react-loading";
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // Optional: for table support
import { getBookingsByOwnerId } from "../../services/BuserService";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import BookingDetailsModal from "../admin/BookingDetailsModal";

interface Booking {
  workspaceName: string;
  userInfo: IUsers[];
  seatInfo: ISeat[];
  workspaceInfo: IWorkspace;
  date: string;
  amount: string;
  status: string;
  paymentIntentId: string;
}

const BBookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const {user } = useSelector((state: RootState) => state.businessUser);
  const bookingsPerPage = 8;

  const fetchBookings = async (page: number) => {
    try {
      setLoading(true);
      const response = await getBookingsByOwnerId(user?._id,page, bookingsPerPage);

      ;
      ;
      ;


      if (response.status === 200) {
        setBookings(response.data.data);
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
    setSelectedBooking(booking);
  };

  const handleDownloadInvoice = (booking: Booking) => {
    const doc = new jsPDF();
  
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
    doc.text(`Workspace: ${booking.workspaceInfo?.buildingName}`, 20, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);
  
    // Add Recipient Info (User Details)
    doc.text(`Billed To:` , 140, 55);
    doc.text(`${booking.userInfo[0]?.fullName}`, 140, 65); // Replace with actual user details
    doc.text(`${booking.userInfo[0]?.email}`, 140, 75);
  
    // Section for Booking Information
    doc.setFontSize(14);
    doc.text("Booking Details", 20, 90);
    doc.setFontSize(12);
    doc.text(`Amount Paid: ${booking.amount}`, 20, 100);
    doc.text(`Seat: ${booking.seatInfo[0]?.tableNumber}-${booking.seatInfo[0]?.seatNumber}`, 20, 110);
    doc.text(`Status: ${booking.status}`, 20, 120);
  
    // Add another line for separation
    doc.line(20, 130, 190, 130);
  
    // Optional: Add auto-table for better presentation of detailed information
    doc.autoTable({
      head: [['Booking Details', 'Description']],
      body: [
        ['Workspace', booking.workspaceInfo?.buildingName],
        ['Seat', `${booking.seatInfo[0]?.tableNumber}-${booking.seatInfo[0]?.seatNumber}`],
        ['Date', booking.date.split("T")[0]],
        ['Amount', booking.amount],
        ['Status', booking.status],
      ],
      startY: 140,
      theme: "striped",
    });
  
    // Footer Section with Note and Signature Area
    doc.setFontSize(10);
    doc.text("Thank you for booking with us!", 20, doc.lastAutoTable.finalY + 20);
    doc.text("For queries, contact support@example.com", 20, doc.lastAutoTable.finalY + 30);
  
    // Final horizontal line
    doc.line(20, doc.lastAutoTable.finalY + 40, 190, doc.lastAutoTable.finalY + 40);
  
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
      {isModalOpen && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className="container mx-auto px-4 h-screen">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase text-sm leading-normal">
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
              <tbody className="text-gray-700 dark:text-gray-300 text-sm font-light">
                {bookings?.map((booking, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {booking.workspaceInfo?.buildingName}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {booking.userInfo[0]?.fullName}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {"S" + booking.seatInfo[0]?.seatNumber + " -" + " T" + booking.seatInfo[0]?.tableNumber}
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
                            ? "bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-300"
                            : "bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-300"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap flex space-x-2">
                      <button
                        onClick={() => handleViewDetailsModal(booking)}
                        className="text-blue-500 dark:text-blue-300 hover:underline"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDownloadInvoice(booking)}
                        className="text-orange-500 dark:text-orange-300 hover:underline"
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
            className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default BBookingHistory;
