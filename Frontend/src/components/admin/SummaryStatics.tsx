import React from 'react';

interface SummaryCardProps {
  icon: string;
  label: string;
  value: string | number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, value }) => {
  return (
    <div className="bg-indigo-100 dark:bg-gray-700 p-4 rounded-md shadow-md dark:shadow-none flex items-center space-x-4">
      <div className="text-3xl text-indigo-600 dark:text-indigo-400">{icon}</div>
      <div>
        <p className="text-2xl font-bold text-indigo-800 dark:text-indigo-500">{value}</p>
        <p className="text-sm text-indigo-600 dark:text-indigo-400">{label}</p>
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <SummaryCard icon="👤" label="Total Users" value={summaryData.userCount} />
      <SummaryCard icon="🏢" label="Workspaces" value={summaryData.workspaceCount} />
      <SummaryCard icon="📅" label="Total Bookings" value={summaryData.bookingCount} />
      <SummaryCard icon="💰" label="Total Revenue" value={`₹${summaryData.totalRevenue}`} />
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg dark:shadow-none">
      <Summary summaryData={summaryData} />
    </div>
  );
};

export default SummaryStatics;
