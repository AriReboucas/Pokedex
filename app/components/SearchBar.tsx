import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      onClear();
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-full p-2 w-80 mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Pesquisar Pokémon"
        className="w-full px-4 py-2 rounded-full focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="p-2 ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
