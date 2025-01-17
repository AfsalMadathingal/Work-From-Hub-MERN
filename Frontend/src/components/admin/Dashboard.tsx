import React, { useEffect, useState } from "react";
import { 
  Users, 
  Building2, 
  CalendarCheck, 
  DollarSign,
  BarChart3,
  Clock,
  UserPlus 
} from "lucide-react";
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

      const summary = {
        bookingCount: 0,
        userCount: 0,
        workspaceCount: 0,
        totalRevenue: 0
      };

      summary.bookingCount = data?.bookingData?.bookingsCount;
      summary.userCount = data?.userData?.userCount;
      summary.workspaceCount = data?.workspaceData;
      summary.totalRevenue = data?.bookingData?.bookingsData.reduce(
        (total: number, booking: { amount: number }) => total + booking.amount,
        0
      );

      const lastSevenBookings = data.lastSevenBookings;
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

      const groupedBookings = lastSevenBookings.reduce((acc: { [date: string]: { date: string, bookings: number } }, booking: { date: string }) => {
        const date = new Date(booking.date).toISOString().split('T')[0];
        if (!acc[date]) {
          acc[date] = { date, bookings: 1 };
        } else {
          acc[date].bookings += 1;
        }
        return acc;
      }, {});

      const lastSevenDays = getLastSevenDays();
      const finalResult = lastSevenDays.map(date => {
        return groupedBookings[date] || { date, bookings: 0 };
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

  const statCards = [
    {
      title: "Total Users",
      value: summaryData.userCount,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Workspaces",
      value: summaryData.workspaceCount,
      icon: <Building2 className="w-6 h-6 text-purple-500" />,
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Total Bookings",
      value: summaryData.bookingCount,
      icon: <CalendarCheck className="w-6 h-6 text-green-500" />,
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400"
    },
    {
      title: "Revenue",
      value: `$${summaryData.totalRevenue.toLocaleString()}`,
      icon: <DollarSign className="w-6 h-6 text-amber-500" />,
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      textColor: "text-amber-600 dark:text-amber-400"
    }
  ];

  return (
    <div className="p-4 lg:p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-sm ${stat.bgColor} transition-all hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</p>
                <p className={`text-2xl font-semibold mt-2 ${stat.textColor}`}>{stat.value}</p>
              </div>
              <div>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Revenue Trends</h2>
          </div>
          <RevenueChart chartData={chartData} />
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <RecentBookings recentBookings={recentBookings} />
        </div>
      </div>

      {/* New Users Section */}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <UserPlus className="w-5 h-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">New Users</h2>
        </div>
        <NewUsers newUsersData={newUsers} />
      </div>
    </div>
  );
};

export default Dashboard;