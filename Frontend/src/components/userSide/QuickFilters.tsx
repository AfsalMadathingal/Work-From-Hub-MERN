import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface QuickFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  ac: boolean;
  restRoom: boolean;
  powerBackup: boolean;
  wifiAvailable: boolean;
  rating: string;
  price: string;
}

const amenities = [
  { id: 'ac', label: 'AC', icon: '❄️' },
  { id: 'restRoom', label: 'Rest Room', icon: '🚽' },
  { id: 'powerBackup', label: 'Power Backup', icon: '⚡' },
  { id: 'wifiAvailable', label: 'Wifi Available', icon: '📶' },
];

const QuickFilters: React.FC<QuickFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Partial<FilterState>>({
    ac: false,
    restRoom: false,
    powerBackup: false,
    wifiAvailable: false,
    rating: '',
    price: '',
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev, [name]: checked };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 divide-y divide-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700">
      {/* Amenities Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100">
          Amenities
        </h3>
        <div className="space-y-3">
          {amenities.map(({ id, label, icon }) => (
            <label
              key={id}
              className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors dark:hover:bg-gray-700"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  name={id}
                  checked={filters[id as keyof FilterState] as boolean}
                  onChange={handleCheckboxChange}
                  className="peer h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <span className="ml-3 flex items-center text-gray-700 dark:text-gray-300">
                <span className="mr-2">{icon}</span>
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100">
          Rating
        </h3>
        <div className="space-y-3">
          {['4', '3', '2', '1'].map((rating) => (
            <label
              key={rating}
              className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors dark:hover:bg-gray-700"
            >
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={handleRadioChange}
                className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-3 flex items-center text-gray-700 dark:text-gray-300">
                {[...Array(Number(rating))].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400 mr-0.5"
                  />
                ))}
                <span className="ml-1">& Up</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100">
          Price
        </h3>
        <div className="space-y-3">
          {[
            { value: 'highToLow', label: 'High to Low' },
            { value: 'lowToHigh', label: 'Low to High' },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors dark:hover:bg-gray-700"
            >
              <input
                type="radio"
                name="price"
                value={value}
                checked={filters.price === value}
                onChange={handleRadioChange}
                className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-3 text-gray-700 dark:text-gray-300">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFilters;