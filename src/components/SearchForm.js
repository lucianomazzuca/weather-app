import React from "react";

const SearchForm = ({ handleSearchInput, handleSubmit, inputValue }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city"
        className="p-2 rounded-md w-full shadow-md outline-none focus:shadow-lg"
        onChange={handleSearchInput}
        value={inputValue}
      />
    </form>
  );
};

export default SearchForm;
