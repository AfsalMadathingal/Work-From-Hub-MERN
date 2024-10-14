import React from "react";
import { IWorkspace } from "../../@types/workspace";
import { ISeat } from "../../@types/seat";
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // Optional: for table support
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  workspace: IWorkspace | null;
  seat: ISeat | null;
  booking: any;
}

const ModalForBookingDetails: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  workspace,
  seat,
  booking,
}) => {

  const {user } = useSelector((state: RootState) => state.user);

  if (!isOpen) return null;




  const handleDownload = () => {
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
    doc.text(`Workspace: ${workspace?.buildingName}`, 20, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);

    // Add Recipient Info (User Details)
    doc.text(`Billed To:` , 140, 55);
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
      head: [['Booking Details', 'Description']],
      body: [
        ['Workspace', workspace?.buildingName],
        ['Seat', `${seat?.tableNumber}-${seat?.seatNumber}`],
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg md:max-w-md mx-4 sm:mx-auto">
        <h2 className="text-lg font-bold mb-4 text-orange-500 text-center">
          Transaction Details
        </h2>

        <div className="space-y-3 text-sm md:text-base">
          <div>
            <strong>Amount:</strong> {booking.amount}
          </div>
          <div>
            <strong>Transaction ID:</strong> {booking.paymentIntentId}
          </div>
          <div>
            <strong>Workspace:</strong> {workspace?.buildingName}
          </div>
          <div>
            <strong>Seat:</strong> {`${seat?.tableNumber}-${seat?.seatNumber}`}
          </div>
          <div>
            <strong>Date:</strong> {booking.date.split("T")[0]}
          </div>
          <div>
            <strong>Status:</strong> {booking.status}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForBookingDetails;
