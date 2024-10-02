// components/QuickFilters.tsx
import React, { useState } from 'react';

interface QuickFiltersProps {
  onFilterChange: (filters: any) => void; // Callback to send filter changes to parent
}

const QuickFilters: React.FC<QuickFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    ac: false,
    restRoom: false,
    powerBackup: false,
    wifiAvailable: false,
    rating: '', // e.g., '4' for 4 stars
    price: '',  // e.g., 'lowToHigh' or 'highToLow'
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev, [name]: checked };
      onFilterChange(newFilters); // Notify parent of filter change
      return newFilters;
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters); // Notify parent of filter change
      return newFilters;
    });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-md">
      <h3 className="font-bold mb-3">Quick Filters</h3>
      <div className="space-y-3">
        <label className="block">
          <input
            type="checkbox"
            name="ac"
            className="mr-2"
            checked={filters.ac}
            onChange={handleCheckboxChange}
          />
          AC
        </label>
        <label className="block">
          <input
            type="checkbox"
            name="restRoom"
            className="mr-2"
            checked={filters.restRoom}
            onChange={handleCheckboxChange}
          />
          Rest Room 
        </label>
        <label className="block">
          <input
            type="checkbox"
            name="powerBackup"
            className="mr-2"
            checked={filters.powerBackup}
            onChange={handleCheckboxChange}
          />
          Power Backup
        </label>
        <label className="block">
          <input
            type="checkbox"
            name="wifiAvailable"
            className="mr-2"
            checked={filters.wifiAvailable}
            onChange={handleCheckboxChange}
          />
          Wifi Available
        </label>
      </div>
      
      <h3 className="font-bold mt-6 mb-3">Rating</h3>
      <div className="space-y-3">
        {['4', '3', '2', '1'].map((star) => (
          <label className="block" key={star}>
            <input
              type="radio"
              name="rating"
              value={star}
              className="mr-2"
              checked={filters.rating === star}
              onChange={handleRadioChange}
            />
            {'★'.repeat(star)} & Up
          </label>
        ))}
      </div>
      
      <h3 className="font-bold mt-6 mb-3">Price</h3>
      <div className="space-y-3">
        <label className="block">
          <input
            type="radio"
            name="price"
            value="highToLow"
            className="mr-2"
            checked={filters.price === 'highToLow'}
            onChange={handleRadioChange}
          />
          High to Low
        </label>
        <label className="block">
          <input
            type="radio"
            name="price"
            value="lowToHigh"
            className="mr-2"
            checked={filters.price === 'lowToHigh'}
            onChange={handleRadioChange}
          />
          Low to High
        </label>
      </div>
    </div>
  );
};

export default QuickFilters;
