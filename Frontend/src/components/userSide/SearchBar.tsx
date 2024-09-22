
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

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


