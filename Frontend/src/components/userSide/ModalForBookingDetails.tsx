import React from "react";
import { IWorkspace } from "../../@types/workspace";
import { ISeat } from "../../@types/seat";
import "jspdf-autotable"; // Optional: for table support
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Download, X } from "lucide-react";
import { IBookingDetails } from "../../@types/bookingDetails";
import { UserOptions } from "jspdf-autotable";
import toast from "react-hot-toast";

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDFWithPlugin;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  workspace: IWorkspace ;
  seat: ISeat ;
  booking: IBookingDetails;
}

const ModalForBookingDetails: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  workspace,
  seat,
  booking,
}) => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!isOpen) return null;

  const handleDownload = () => {

    toast.success("Downloading Invoice...");
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
    doc.text(`Workspace: ${workspace?.buildingName}`, 20, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);

    // Add Recipient Info (User Details)
    doc.text(`Billed To:`, 140, 55);
    doc.text(`${user?.fullName}`, 140, 65); // Replace with actual user details
    doc.text(`${user?.email}`, 140, 75);

    // Section for Booking Information
    doc.setFontSize(14);
    doc.text("Booking Details", 20, 90);
    doc.setFontSize(12);
    doc.text(`Amount Paid: ${booking.amount}`, 20, 100);
    doc.text(`Seat: ${seat?.tableNumber}-${seat?.seatNumber}`, 20, 110);
    doc.text(`Status: ${booking.status}`, 20, 120);

    // Add another line for separation
    doc.line(20, 130, 190, 130);

    // Optional: Add auto-table for better presentation of detailed information
    doc.autoTable({
      head: [["Booking Details", "Description"]],
      body: [
        ["Workspace", workspace?.buildingName],
        ["Seat", `${seat?.tableNumber}-${seat?.seatNumber}`],
        ["Date", booking.date.split("T")[0]],
        ["Amount", booking.amount],
        ["Status", booking.status],
      ],
      startY: 140,
      theme: "striped",
    });
    // // Footer Section with Note and Signature Area
    // doc.setFontSize(10);
    // doc.text(
    //   "Thank you for booking with us!",
    //   20,
    //   doc.lastAutoTable.finalY + 20
    // );
    // doc.text(
    //   "For queries, contact support@example.com",
    //   20,
    //   doc.lastAutoTable.finalY + 30
    // );

    // // Final horizontal line
    // doc.line(
    //   20,
    //   doc.lastAutoTable.finalY + 40,
    //   190,
    //   doc.lastAutoTable.finalY + 40
    // );

    // Save the PDF
    doc.save("invoice.pdf");
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="transaction-details-modal"
      role="dialog"
      aria-modal="true"
    >
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-900/75 dark:bg-gray-800/75 transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-lg transform rounded-xl bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all animate-in slide-in-from-bottom duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-orange-500 dark:text-orange-400">
              Transaction Details
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Amount</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  ₹{booking.amount}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Transaction ID
                </span>
                <span className="font-medium text-gray-900 dark:text-white font-mono text-sm">
                  {booking.paymentIntentId}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Workspace
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {workspace?.buildingName}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Seat</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  Table {seat?.tableNumber}, Seat {seat?.seatNumber}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Date</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {new Date(booking.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Status</span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium
                  ${
                    booking.status.toLowerCase() === "completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4 space-y-4 space-y-reverse sm:space-y-0">
            <button
              onClick={onClose}
              className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg border border-gray-300 
                bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-orange-500 
                text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 
                dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForBookingDetails;
