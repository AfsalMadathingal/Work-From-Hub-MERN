import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { getBookingsByOwnerId } from '../../services/BuserService';
import { RootState } from '../../redux/store/store';
import { IUsers } from '../../@types/user';
import { ISeat } from '../../@types/seat';
import { IWorkspace } from '../../@types/workspace';
import { IBUsers } from '../../@types/businessUser';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import BBookingDetailsModal from './BBookingDeatailsModal';

// Define the table options type
interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDFWithPlugin;
}

interface Booking {
  workspaceName: string;
  userInfo: IUsers[];
  seatInfo: Partial<ISeat>[];
  workspaceInfo: IWorkspace;
  date: string;
  amount: string;
  status: string;
  paymentIntentId: string;
  paymentMethod: string;
  paymentStatus: string;
}

// interface Bookings {
//   workspaceName: string;
//   userId: IUsers;
//   seatId: ISeat;
//   workspaceId: IWorkspace;
//   date: string;
//   amount: string;
//   status: string;
//   paymentIntentId: string;
// }

const BBookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking>({} as Booking);
  const  user:IBUsers  = useSelector((state: RootState) => state.businessUser.user);
  const bookingsPerPage = 8;



  useEffect(() => {
    const fetchBookings = async (page: number) => {
      try {
        setLoading(true);
        const response = await getBookingsByOwnerId(user?._id, page, bookingsPerPage);
        if (response?.status === 200) {
          setBookings(response.data.data);
          setTotalPages(Math.ceil(response.data.data.totalBookings / bookingsPerPage));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
        toast.error('An error occurred while fetching bookings');
      }
    };
    fetchBookings(currentPage);
  }, [currentPage, user?._id]);

  const handleDownloadInvoice = (booking: Booking) => {
    // Cast the document to include autoTable
    const doc = new jsPDF() as jsPDFWithPlugin;
      
    doc.setFontSize(18);
    doc.setTextColor('#ff6f00');
    doc.text('INVOICE', 105, 20, { align: 'center' });
      
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(`Workspace: ${booking.workspaceInfo?.buildingName}`, 20, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65);
    doc.text(`Transaction ID: ${booking.paymentIntentId}`, 20, 75);
      
    // Now TypeScript knows about autoTable
    doc.autoTable({
      head: [['Booking Details', 'Description']],
      body: [
        ['Workspace', booking.workspaceInfo?.buildingName],
        ['Seat', `${booking.seatInfo[0]?.tableNumber}-${booking.seatInfo[0]?.seatNumber}`],
        ['Date', booking.date.split('T')[0]],
        ['Amount', booking.amount],
        ['Status', booking.status],
      ],
      startY: 90,
      theme: 'striped',
    });
      
    doc.save('invoice.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
    {isModalOpen && (
      <BBookingDetailsModal
        isOpen={isModalOpen}
        booking={selectedBooking}
        onClose={() => setIsModalOpen(false)}
      />
    )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Workspace</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Seat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {loading ? (
                  <tr>
                    <td colSpan={7}>
                      <div className="flex justify-center items-center py-8">
                        <ReactLoading type="spin" color="#f97316" height={32} width={32} />
                      </div>
                    </td>
                  </tr>
                ) : (
                  bookings?.map((booking , index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {booking.workspaceInfo?.buildingName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {booking.userInfo[0]?.fullName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {`S${booking.seatInfo[0]?.seatNumber} - T${booking.seatInfo[0]?.tableNumber}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {new Date(booking.date).toDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {booking.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                          ${booking.status === 'success' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                          }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-4">
                          <button
                            onClick={() =>{
                              setSelectedBooking(booking)
                              setIsModalOpen(true)}}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDownloadInvoice(booking)}
                            className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
                          >
                            Invoice
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="bg-white dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700 sm:px-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </p>
              <button
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBookingHistory;