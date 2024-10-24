import React from "react";

const SummaryCard = ({ icon, label, value }) => {
  return (
    <>
      {!value ? (
       <div className="bg-indigo-100 p-4 rounded-md shadow-md flex items-center space-x-4">
       {/* Skeleton for Icon */}
       <div className="w-12 h-12 bg-indigo-200 rounded-full animate-pulse"></div>
       
       <div className="flex-1">
         {/* Skeleton for Value */}
         <div className="h-6 bg-indigo-200 rounded w-1/3 animate-pulse mb-2"></div>
         
         {/* Skeleton for Label */}
         <div className="h-4 bg-indigo-200 rounded w-1/2 animate-pulse"></div>
       </div>
     </div>
     
      ) : (
        <div className="bg-indigo-100 p-4 rounded-md shadow-md flex items-center space-x-4">
          <div className="text-3xl text-indigo-600">{icon}</div>
          <div>
            <p className="text-2xl font-bold text-indigo-800">{value}</p>
            <p className="text-sm text-indigo-600">{label}</p>
          </div>
        </div>
      )}
    </>
  );
};

const Summary = ({ summaryData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <SummaryCard
        icon="🏢"
        label="Workspaces"
        value={summaryData.workspaceCount}
      />
      <SummaryCard
        icon="📅"
        label="Total Bookings"
        value={summaryData.bookingCount}
      />
      <SummaryCard
        icon="💰"
        label="Total Revenue"
        value={summaryData.totalRevenue}
      />
    </div>
  );
};

const SummaryStatics = ({ summaryData }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <Summary summaryData={summaryData} />
    </div>
  );
};

export default SummaryStatics;
