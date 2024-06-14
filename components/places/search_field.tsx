import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FiltersFormProps } from "@/ts/types/components/filters_form.types";

const SearchField = ({ inputValue, onChangeInput, onClickClearInput }: FiltersFormProps) => {
  return (
    <div className="max-w-3xl relative mx-auto">
      <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-2xl text-gray-500 dark:text-gray-300" />
      </div>
      <input
        value={inputValue}
        type="search"
        onChange={onChangeInput}
        id="filter-field"
        className="block w-full p-4 ps-14 text-2xl rounded-lg border
          text-gray-900 placeholder-gray-500 border-gray-300 bg-secondary 
          dark:border-gray-600 dark:placeholder-gray-300 dark:text-white
          focus:ring-primary focus:border-primary focus:outline-primary
          search-cancel:appearance-none"
        placeholder="Busca lugares por su nombre..."
        autoComplete="off"
        required
      />
      {inputValue && (
        <div
          onClick={onClickClearInput}
          className="absolute inset-y-0 end-0 flex items-center pe-5"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl text-gray-500 dark:text-gray-300" />
        </div>
      )}
    </div>
  );
};

export default SearchField;