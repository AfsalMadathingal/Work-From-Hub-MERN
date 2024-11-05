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
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Recent Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Workspace ID</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {bookingSorted.map((booking: RecentBooking, index: number) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
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