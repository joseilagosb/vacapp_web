import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FiltersFormProps } from "@/ts/types/components/filters_form.types";

const FiltersForm = ({ inputValue, onChangeInput, onClickClearInput }: FiltersFormProps) => {
  return (
    <form className="max-w-3xl mx-auto my-16">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-2xl text-gray-500 dark:text-gray-300" />
        </div>
        <input
          value={inputValue}
          type="search"
          onChange={onChangeInput}
          id="filter-field"
          className="block w-full p-4 ps-14 text-2xl text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg bg-secondary 
          focus:ring-primary focus:border-primary focus:outline-primary
          search-cancel:appearance-none
          dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
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
    </form>
  );
};

export default FiltersForm;
