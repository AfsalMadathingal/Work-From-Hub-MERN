import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react'; // For generating QR codes
import { saveAs } from 'file-saver'; // For downloading invoices as PDFs

interface Booking {
  _id: string;
  workspaceName: string;
  date: string;
  status: string;
  invoiceLink: string;
  qrCodeData: string;
}

const BookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Fetch booking data (assuming you have an API endpoint for fetching user bookings)
    const fetchBookings = async () => {
      const response = await fetch('/api/bookings'); // Adjust API endpoint if needed
      const data = await response.json();
      setBookings(data);
    };
    
    fetchBookings();
  }, []);

  // Function to handle download invoice
  const handleDownloadInvoice = (invoiceLink: string) => {
    saveAs(invoiceLink, 'invoice.pdf'); // Download the invoice
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3">Booking ID</th>
            <th className="px-6 py-3">Workspace</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
            <th className="px-6 py-3">QR Code</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="px-6 py-4">{booking._id}</td>
              <td className="px-6 py-4">{booking.workspaceName}</td>
              <td className="px-6 py-4">{booking.date}</td>
              <td className="px-6 py-4">{booking.status}</td>
              <td className="px-6 py-4">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => alert(`Viewing details for ${booking._id}`)}
                >
                  View
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDownloadInvoice(booking.invoiceLink)}
                >
                  Download Invoice
                </button>
              </td>
              <td className="px-6 py-4">
                <QRCode value={booking.qrCodeData} size={64} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
