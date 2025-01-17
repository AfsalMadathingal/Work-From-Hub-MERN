import React from 'react';
import { Users, Briefcase, Calendar } from 'lucide-react';

interface RecentBooking {
  userId: {
    fullName: string;
  };
  workspaceId: string;
  date: string;
}

const RecentBookings = ({ recentBookings }: { recentBookings: RecentBooking[] }) => {
  const bookingSorted = recentBookings.sort((a: RecentBooking, b: RecentBooking) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2 mb-6">
          <Users className="w-6 h-6" />
          Recent Bookings
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    <Users className="w-4 h-4" />
                    Name
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    <Briefcase className="w-4 h-4" />
                    Workspace ID
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    <Calendar className="w-4 h-4" />
                    Date
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {bookingSorted.map((booking: RecentBooking, index: number) => (
                <tr 
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                        <span className="text-blue-600 dark:text-blue-300 font-medium">
                          {booking.userId?.fullName.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {booking.userId?.fullName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {booking.workspaceId}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentBookings;