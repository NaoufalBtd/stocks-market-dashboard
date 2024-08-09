import React, { useState } from "react";
import { getFilteredSuggestions } from "../../../utils";
import { useNavigate } from "react-router-dom";

interface indexProps {}

const StocksSearchInput: React.FC<indexProps> = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.target.value;
    setSearch(searchVal);

    const filteredSuggestions = getFilteredSuggestions(searchVal);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    setSuggestions([]);
    navigate(`/stocks/${suggestion}`);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {suggestions.length > 0 && (
        <ul className="menu bg-base-100 w-full rounded-box absolute z-10 mt-1">
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <a onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StocksSearchInput;
