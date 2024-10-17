import React, { useEffect, useState } from "react";
import SummaryStatics from "./SummaryStatics";
import RevenueChart from "./RevenueChart";
import NewUsers from "./NewUsers";
import RecentBookings from "./RecentBookings";
import { toast } from "react-toastify";
import { getDashboardData } from "../../services/adminService";

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState({});
  const [newUsers, setNewUsers] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const response = await getDashboardData();

      const data = response.data.data;

      const summary: {bookingCount: number; userCount: number; workspaceCount: number; totalRevenue: number} = { bookingCount: 0, userCount: 0, workspaceCount: 0, totalRevenue: 0 };

      summary.bookingCount = data?.bookingData?.bookingsCount;
      summary.userCount = data?.userData?.userCount;
      summary.workspaceCount = data?.workspaceData;
      summary.totalRevenue = data?.bookingData?.bookingsData.reduce(
        (total, booking) => total + booking.amount,
        0
      );

console.log(data);

      setNewUsers(data?.userData?.users);

      setSummaryData(summary);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <SummaryStatics summaryData={summaryData} />
      <RevenueChart />
      <div className="grid grid-cols-2 gap-4">
        <NewUsers newUsersData={newUsers} />
        <RecentBookings />
      </div>
    </div>
  );
};

export default Dashboard;
