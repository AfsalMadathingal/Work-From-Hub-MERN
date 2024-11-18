import  { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SummaryStatics from "../common/SummaryStatics";
import RevenueChart from "../common/RevenueChart";
import RecentBookings from "../common/RecentBookings";
import { getDataForDashboard } from "../../services/BuserService";

interface SummaryData {
  workspaceCount: number;
  bookingCount: number;
  totalRevenue: number;
}

const BUserDashboard = () => {
  const [summaryData, setSummaryData] = useState <SummaryData>({} as SummaryData);
  const [recentBookings, setRecentBookings] = useState([]);
  const [chartData, setChartData] = useState([
    {
      date: new Date().toISOString().split("T")[0],
      bookings: 0,
    },
  ]);

  const fetchDashboardData = async () => {
    try {
      const response = await getDataForDashboard();

      const data = response?.data.data;

      const summary: {
        bookingCount: number;
        userCount: number;
        workspaceCount: number;
        totalRevenue: number;
      } = { bookingCount: 0, userCount: 0, workspaceCount: 0, totalRevenue: 0 };

      summary.bookingCount = data?.countBooking?.count;
      summary.workspaceCount = data?.workspaceData.length;

      summary.totalRevenue = data?.bookingData?.reduce(
        (total: number, booking: { amount: number }) => total + booking.amount,
        0
      );

      setRecentBookings(data.bookingData);

      const getLastSevenDays = () => {
        const days = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          days.push(date.toISOString().split("T")[0]);
        }

        return days;
      };

      const groupedBookings = data.bookingData.reduce((acc: { [date: string]: { date: string, bookings: number } }, booking: { createdAt: string }) => {
        const date = new Date(booking.createdAt).toISOString().split("T")[0];
        if (!acc[date]) {
          acc[date] = { date, bookings: 1 };
        } else {
          acc[date].bookings += 1;
        }
        return acc;
      }, {});

      

      const lastSevenDays = getLastSevenDays();

      const finalResult = lastSevenDays.map((date) => {
        return groupedBookings[date] || { date, bookings: 0 };
      });


      console.log(finalResult);
      

      setChartData(finalResult);
      setSummaryData(summary);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="p-1 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div>
        <SummaryStatics summaryData={summaryData} />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <RevenueChart chartData={chartData} />
        <RecentBookings recentBookings={recentBookings} />
      </div>
    </div>
  );
};

export default BUserDashboard;
