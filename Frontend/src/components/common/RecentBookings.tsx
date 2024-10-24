import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setLoading } from '../../redux/slices/businessUserSlice';


const RecentBookings = ({recentBookings}) => {
const {loading} = useSelector((state: RootState) => state.businessUser)
const dispatch = useDispatch();
const bookingSorted = recentBookings.sort((a, b) => new Date(b.date) - new Date(a.date));

const loadingData = async () => {
  dispatch(setLoading(true));
  await new Promise((resolve) => setTimeout(resolve, 300));
  dispatch(setLoading(false));
}


useEffect(() => {
  loadingData()
}, [])

  return (
    <>
    {loading ?
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Recent Bookings</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Workspace</th>
            <th className="py-3 px-6 text-left">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="border-b border-gray-200 animate-pulse">
              <td className="py-3 px-6">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </td>
              <td className="py-3 px-6">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </td>
              <td className="py-3 px-6">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  :
  <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Recent Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Workspace</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {bookingSorted.map((booking, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
                <td className="py-3 px-6">{booking.userInfo[0].fullName}</td>
                <td className="py-3 px-6">{booking.workspaceInfo.buildingName}</td>
                <td className="py-3 px-6">{booking.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
}
  
    </>
  );
};

export default RecentBookings;
