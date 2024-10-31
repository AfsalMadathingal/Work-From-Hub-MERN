import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setLoading } from '../../redux/slices/businessUserSlice';

const RecentBookings = ({ recentBookings }) => {
  const { loading } = useSelector((state: RootState) => state.businessUser);
  const dispatch = useDispatch();
  const bookingSorted = recentBookings.sort((a, b) => new Date(b.date) - new Date(a.date));

  const loadingData = async () => {
    dispatch(setLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 300));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    loadingData();
  }, []);

  const TableStructure = ({ children }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 p-6 border-b border-gray-200 dark:border-gray-700">
        Recent Bookings
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Workspace
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          {children}
        </table>
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {[...Array(5)].map((_, index) => (
        <tr key={index} className="animate-pulse bg-white dark:bg-gray-800">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/3"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );

  const BookingData = () => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {bookingSorted.map((booking, index) => (
        <tr 
          key={index} 
          className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
            {booking.userInfo[0].fullName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
            {booking.workspaceInfo.buildingName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
            {booking.date.slice(0, 10)}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <TableStructure>
        {loading ? <LoadingSkeleton /> : <BookingData />}
      </TableStructure>
    </div>
  );
};

export default RecentBookings;