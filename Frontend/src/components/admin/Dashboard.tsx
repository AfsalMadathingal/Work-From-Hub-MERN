import  { useEffect, useState } from "react";
import SummaryStatics from "./SummaryStatics";
import RevenueChart from "./RevenueChart";
import NewUsers from "./NewUsers";
import RecentBookings from "./RecentBookings";
import toast from "react-hot-toast";
import { getDashboardData } from "../../services/adminService";

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState({
    userCount: 0,
    workspaceCount: 0,
    bookingCount: 0,
    totalRevenue: 0,
  });
  const [newUsers, setNewUsers] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);
   const [chartData, setChartData] = useState([{
    date: new Date().toISOString().split('T')[0],
    bookings: 0
   }]);

  const fetchDashboardData = async () => {
    try {
      const response = await getDashboardData();

      const data = response?.data.data;

      const summary: {bookingCount: number; userCount: number; workspaceCount: number; totalRevenue: number ;} = { bookingCount: 0, userCount: 0, workspaceCount: 0, totalRevenue: 0 };

      summary.bookingCount = data?.bookingData?.bookingsCount;
      summary.userCount = data?.userData?.userCount;
      summary.workspaceCount = data?.workspaceData;
      summary.totalRevenue = data?.bookingData?.bookingsData.reduce(
        (total : number, booking: { amount: number }) => total + booking.amount,
        0
      );

      const lastSevenBookings = data.lastSevenBookings

      setRecentBookings(lastSevenBookings);

      const getLastSevenDays = () => {
        const days = [];
        const today = new Date();
      
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          days.push(date.toISOString().split('T')[0]); 
        }
      
        return days;
      };
      
      // Step 1: Group bookings by date
     const groupedBookings = lastSevenBookings.reduce((acc: { [date: string]: { date: string, bookings: number } }, booking: { date: string }) => {
       const date = new Date(booking.date).toISOString().split('T')[0]; // Extract only the date part
       if (!acc[date]) {
         acc[date] = { date, bookings: 1 };
       } else {
         acc[date].bookings += 1;
       }
       return acc;
     }, {});
      
      // Step 2: Get the last 7 days and ensure each date has a booking count
      const lastSevenDays = getLastSevenDays();
      
      const finalResult = lastSevenDays.map(date => {
        return groupedBookings[date] || { date, bookings: 0 }; // If date not found, add with 0 bookings
      });
      

      setChartData(finalResult);
      setNewUsers(data?.userData?.users);
      setSummaryData(summary);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="p-1 bg-gray-100 min-h-screen">
    <div>
      <SummaryStatics summaryData={summaryData} />
    </div>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <RevenueChart chartData={chartData}  />
            
      <RecentBookings recentBookings={recentBookings} />
    </div>
  
    <div className="grid  mt-8">
      <div>
        <NewUsers newUsersData={newUsers} />
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
