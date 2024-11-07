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
    <div className="bg-white border border-gray-100  dark:bg-gray-800 p-6 rounded-md shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6 text-center">Recent Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Workspace ID</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
            {bookingSorted.map((booking: RecentBooking, index: number) => (
              <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
                <td className="py-3 px-6">{booking.userId?.fullName}</td>
                <td className="py-3 px-6">{booking.workspaceId}</td>
                <td className="py-3 px-6">{booking.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;