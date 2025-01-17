import React from 'react';
import { Users, Building2, Calendar, Wallet } from 'lucide-react';

interface SummaryCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend?: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] border border-gray-100 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        <div className="rounded-full p-3 bg-blue-50 dark:bg-blue-900/30">
          {icon}
        </div>
      </div>
    </div>
  );
};

interface SummaryProps {
  summaryData: {
    userCount: number;
    workspaceCount: number;
    bookingCount: number;
    totalRevenue: number;
  };
}

const Summary: React.FC<SummaryProps> = ({ summaryData }) => {
  const formatRevenue = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <SummaryCard
        icon={<Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
        label="Total Users"
        value={summaryData.userCount.toLocaleString()}
      />
      <SummaryCard
        icon={<Building2 className="w-6 h-6 text-green-600 dark:text-green-400" />}
        label="Workspaces"
        value={summaryData.workspaceCount.toLocaleString()}
      />
      <SummaryCard
        icon={<Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
        label="Total Bookings"
        value={summaryData.bookingCount.toLocaleString()}
      />
      <SummaryCard
        icon={<Wallet className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
        label="Total Revenue"
        value={formatRevenue(summaryData.totalRevenue)}
      />
    </div>
  );
};

interface SummaryStaticsProps {
  summaryData: {
    userCount: number;
    workspaceCount: number;
    bookingCount: number;
    totalRevenue: number;
  };
}

const SummaryStatics: React.FC<SummaryStaticsProps> = ({ summaryData }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl">
      <Summary summaryData={summaryData} />
    </div>
  );
};

export default SummaryStatics;