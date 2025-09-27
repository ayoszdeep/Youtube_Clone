// src/components/Header.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const fetchOrUseCache = async () => {
      if (!searchQuery) {
        setSuggestions([]);
        return;
      }
   
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        const data = await fetch(YT_SEARCH_API + searchQuery);
        const json = await data.json();
        const results = json[1] || [];
        setSuggestions(results);
        dispatch(cacheResults({ query: searchQuery, results }));
      }
    };

    const timer = setTimeout(fetchOrUseCache, 200);
    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, dispatch]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid items-center w-full grid-cols-12 px-4 py-2 bg-white shadow-xl">
      {/* Logo and Icon */}
      <div className="flex items-center col-span-2 gap-2">
        <img
          onClick={toggleMenuHandler}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqr08x3BvziNsROn0qQITqpfPWXL0ORIBkPQ&s"
          alt="menu icon"
          className="h-5 cursor-pointer"
        />
        <a href="/">
          <img
            src="/YouTube-Logo-PNG7.png"
            alt="YouTube logo"
            className="h-12 px-3 cursor-pointer"
          />
        </a>
      </div>

      {/* Search bar */}
      <div className="relative flex justify-center col-span-9">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 text-white border border-white rounded-l-full outline-none w-96"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="px-6 py-2 text-white bg-red-600 rounded-r-full">
            Search
          </button>

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 z-50 mt-1 bg-white border shadow-lg top-full w-96">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onMouseDown={() => setSearchQuery(s)}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center justify-end col-span-1">
        <img
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
