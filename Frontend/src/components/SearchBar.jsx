import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center w-10/12 mx-auto border border-black rounded-full px-4 py-2 shadow-sm bg-white focus-within:ring-2 focus-within:ring-gray-400">
      <Search className="h-8  text-gray-500" />
      <input
        type="text"
        placeholder="SEARCH YOUR ITEM"
        className="flex-grow outline-none px-2 text-gray-700"
      />
    </div>
  );
}

export default SearchBar;
