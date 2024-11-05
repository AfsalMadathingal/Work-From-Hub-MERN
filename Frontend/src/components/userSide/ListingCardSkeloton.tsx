
const ListingCardSkeloton = () => {
  return (
<>
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col mb-6 sm:flex-row sm:items-center sm:justify-between animate-pulse">
    <div className="w-full rounded-t-lg sm:rounded-l-lg sm:w-1/3 h-48 bg-gray-300 dark:bg-gray-600 object-cover"></div>
    <div className="p-4 sm:w-2/3 sm:py-0">
      <h3 className="bg-gray-300 dark:bg-gray-600 rounded h-6 w-1/2 mb-4"></h3>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:w-1/2">
          <p className="bg-gray-300 dark:bg-gray-600 rounded h-4 w-3/4 mb-2"></p>
          <p className="bg-gray-300 dark:bg-gray-600 rounded h-4 w-1/2 mb-2"></p>
          <p className="bg-gray-300 dark:bg-gray-600 rounded h-4 w-2/3 mb-2"></p>
          <p className="bg-gray-300 dark:bg-gray-600 rounded h-4 w-3/4 mb-2"></p>
        </div>
        <div className="flex flex-col sm:w-1/2 sm:items-end sm:mt-0 mt-4">
          <div className="bg-gray-300 dark:bg-gray-600 rounded h-6 w-24 mb-2"></div>
          <button className="bg-gray-300 dark:bg-gray-600 text-white px-4 py-2 rounded-lg h-10 w-32 mb-2"></button>
          <button className="bg-gray-300 dark:bg-gray-600 border px-4 py-2 rounded-lg h-10 w-32"></button>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default ListingCardSkeloton;
