import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { getDetailedReport } from '../../services/adminService';
import { IUsers } from '../../@types/user';


interface Booking {
  workspaceName: string;
  userId: IUsers;
  date: string;
  amount: string;
  status: string;
  paymentIntentId: string;
}

const DetailedBookingsReport = () => {
  const [bookings, setBookings] = useState <Booking[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // State for Filters
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    startDate: '',
    endDate: '',
    limit: 30,
  });

  // PDF Export
const generatePDF = () => {
  const reportElement = document.getElementById('report-content');
  if (reportElement) {
    html2canvas(reportElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('detailed-bookings-report.pdf');
    });
  } else {
    console.error('Report element not found');
  }
};

  // Excel Export
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(bookings);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookings');
    XLSX.writeFile(workbook, 'detailed-bookings-report.xlsx');
  };

  const fetchBookingsData = async () => {
    try {
      const query = new URLSearchParams({
        name: filters.name,
        status: filters.status,
        startDate: filters.startDate,
        endDate: filters.endDate,
        limit: filters.limit.toString(),
        page: page.toString(),
      });

      const response = await getDetailedReport(query);
  

      setBookings(response?.data.data.bookings);
      setTotalPages(response?.data.data.totalPages);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } 
  };

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault(); 
    setPage(1);
    fetchBookingsData(); 
  };

  const handlePageChange = (newPage : number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    fetchBookingsData();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Detailed Bookings Report</h2>

      {/* Filters */}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 rounded-md"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />

        <select
          className="border p-2 rounded-md"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All Status</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>

        <select
          className="border p-2 rounded-md"
          value={filters.limit}
          onChange={(e) => setFilters({ ...filters, limit: Number(e.target.value) })}
        >
          <option value="30">Last 30 Days</option>
          <option value="7">Last 7 Days</option>
          <option value="0">Life Time</option>
        </select>
        <input
          type="date"
          className="border p-2 rounded-md"
          value={filters.startDate}
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        />

        <input
          type="date"
          className="border p-2 rounded-md"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
        />

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>

        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
          onClick={() => setFilters({ name: '', status: '', startDate: '', endDate: '', limit: 30 })}
        >
          Clear Filters
        </button>
      </form>

      {/* Bookings Table */}
      <div id="report-content" className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">




            {bookings.map((booking, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{booking?.userId?.fullName}</td>
                <td className="py-3 px-6">{booking?.date.slice(0, 10)}</td>
                <td className={`py-3 px-6 ${booking?.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {booking?.status}
                </td>
                <td className="py-3 px-6">{booking?.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination flex items-center justify-center space-x-4 mt-6">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition ease-in-out duration-300"
        >
          Previous
        </button>
        <span className="text-gray-600">{page} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition ease-in-out duration-300"
        >
          Next
        </button>
      </div>

      {/* Export Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button onClick={generatePDF} className="bg-red-500 cursor-pointer flex items-center hover:bg-red-700 text-white py-2 px-6 rounded-md ease-in-out duration-300">
          <FaFilePdf /> Export to PDF
        </button>
        <button onClick={exportToExcel} className="bg-green-500 cursor-pointer flex items-center hover:bg-green-700 text-white py-2 px-6 rounded-md ease-in-out duration-300">
          <FaFileExcel /> Export to Excel
        </button>
      </div>
    </div>
  );
};

export default DetailedBookingsReport;
