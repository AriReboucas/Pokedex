import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Pokemon..."
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
      >
        {" "}
        Buscar{" "}
      </button>
    </form>
  );
};

export default SearchBar;
