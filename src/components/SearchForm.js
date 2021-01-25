import React from "react";

const SearchForm = ({ handleSearchInput, handleSubmit, inputValue }) => {
  return (
    <form action="" onSubmit={handleSubmit} className="flex relative">
      <input
        type="text"
        placeholder="Enter a city"
        className="p-2 rounded-md w-full shadow-md outline-none focus:shadow-lg"
        onChange={handleSearchInput}
        value={inputValue}
      />
      <button type="submit" className=" border-transparent absolute right-2 transform translate-y-2 focus:outline-none">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
    </form>
  );
};

export default SearchForm;
