import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fcefe7] text-center">
      <h1 className="text-5xl font-bold text-orange-500 mb-6">Sorry!</h1>
      <p className="text-2xl text-gray-700 mb-4">Nothing found here.</p>
      <p className="text-lg text-gray-500">Please try searching for something else or check back later.</p>
    </div>
  );
};

export default NotFound;
