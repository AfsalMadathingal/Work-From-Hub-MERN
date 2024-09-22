// components/QuickFilters.tsx
import React from 'react';

interface QuickFiltersProps {
  [key: string]: unknown;
}

const QuickFilters: React.FC<QuickFiltersProps> = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-md">
      <h3 className="font-bold mb-3">Quick Filters</h3>
      <div className="space-y-3">
        <label className="block">
          <input type="checkbox" className="mr-2" />
          AC
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          Open 24 Hr
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          Ladies only
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          Wifi Available
        </label>
      </div>
      
      <h3 className="font-bold mt-6 mb-3">Rating</h3>
      <div className="space-y-3">
        <label className="block">
          <input type="radio" name="rating" className="mr-2" />
          ★★★★ & Up
        </label>
        <label className="block">
          <input type="radio" name="rating" className="mr-2" />
          ★★★ & Up
        </label>
        <label className="block">
          <input type="radio" name="rating" className="mr-2" />
          ★★ & Up
        </label>
        <label className="block">
          <input type="radio" name="rating" className="mr-2" />
          ★ & Up
        </label>
      </div>
      
      <h3 className="font-bold mt-6 mb-3">Price</h3>
      <div className="space-y-3">
        <label className="block">
          <input type="radio" name="price" className="mr-2" />
          High to Low
        </label>
        <label className="block">
          <input type="radio" name="price" className="mr-2" />
          Low to High
        </label>
      </div>
    </div>
  );
};

export default QuickFilters;

