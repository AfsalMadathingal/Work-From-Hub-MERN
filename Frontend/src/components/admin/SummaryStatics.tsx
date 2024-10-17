import React from 'react'

const SummaryCard = ({ icon, label, value }) => {
    return (
      <div className="bg-yellow-100 p-4 rounded-md shadow-md flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <p className="text-xl font-semibold">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    );
  };
  
  const Summary = ({ summaryData }) => {
    return (
      <div className="grid grid-cols-4 gap-4 mb-8">
        <SummaryCard icon="👤" label="Total Users" value={summaryData.userCount} />
        <SummaryCard icon="🏢" label="Workspaces" value={summaryData.workspaceCount} />
        <SummaryCard icon="📅" label="Total Bookings" value={summaryData.bookingCount} />
        <SummaryCard icon="💰" label="Total Revenue" value={summaryData.totalRevenue} />
      </div>
    );
  };

  const SummaryStatics = ({summaryData}) => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <Summary summaryData={summaryData} />
      </div>
    );
  };

export default SummaryStatics
