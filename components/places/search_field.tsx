import React, { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import { usePlacesIndexStore } from "@/stores/places_index/places_index.hooks";

import animations from "./search_field.animations";

const SearchField = () => {
  const { filterValue, updateFilterValue, clearFilterValue } = usePlacesIndexStore(
    useShallow((state) => ({
      filterValue: state.filterValue,
      updateFilterValue: state.updateFilterValue,
      clearFilterValue: state.clearFilterValue,
    }))
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateFilterValue(event.target.value);
  };
  const onClickClearInput = () => clearFilterValue();

  return (
    <div className="max-w-3xl relative mx-auto">
      <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-2xl text-gray-500 dark:text-gray-300" />
      </div>
      <motion.input
        value={filterValue}
        type="search"
        onChange={onChangeInput}
        id="filter-field"
        className="block w-full p-4 ps-14 text-2xl rounded-lg ring-0
          text-gray-900 placeholder-gray-500 bg-secondary
          dark:border-gray-600 dark:placeholder-gray-300 dark:text-white
          focus:outline focus:outline-2 focus:outline-primary
          dark:focus:outline-gray-300
          search-cancel:appearance-none"
        placeholder="Busca lugares por su nombre..."
        autoComplete="off"
        required
        {...animations.searchField}
      />
      {filterValue && (
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
