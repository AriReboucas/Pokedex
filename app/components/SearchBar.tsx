import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  isDarkMode: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onClear,
  isDarkMode,
}) => {
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

  const inputClass = isDarkMode
    ? "px-3 py-1 bg-gray-800 text-white border-none"
    : "px-3 py-1 bg-gray-100 text-gray-800 border-2 border-gray-400";

  return (
    <div className="flex items-center p-2 w-80 mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Pesquisar Pokémon"
        className={inputClass}
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
