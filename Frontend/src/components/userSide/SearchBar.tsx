import React, { useEffect, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  defaultValue?: string; // Allow an initial value to be passed
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, defaultValue = '' }) => {
  const [query, setQuery] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  // Update the local query state when the defaultValue changes
  useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-6">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by city, state or town"
        className="w-2/3 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button className="bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
