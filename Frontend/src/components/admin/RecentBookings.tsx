import React from 'react'


const RecentBookings = () => {
    const bookings = [
      { name: 'Afsal Madathingal', place: 'Kerala', date: '05/08/2024' },
      { name: 'Afsal Madathingal', place: 'Kerala', date: '05/08/2024' },
      { name: 'Afsal Madathingal', place: 'Kerala', date: '05/08/2024' },
    ];
  
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Place</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="py-2">{booking.name}</td>
                <td className="py-2">{booking.place}</td>
                <td className="py-2">{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
export default RecentBookings;