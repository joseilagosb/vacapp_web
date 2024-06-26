"use client";

import React, { CSSProperties } from "react";
import { useTheme } from "next-themes";
import { useShallow } from "zustand/react/shallow";
import { motion } from "framer-motion";

import Separator from "../ui/separator";
import SearchField from "../places/search_field";
import PlacesList from "../places/places_list";
import SortAndFilters from "../places/sort_and_filters";
import AppliedFilters from "../places/applied_filters";

import { Theme } from "@/ts/enums/constants.enums";
import { usePlacesIndexStore } from "@/stores/places_index/places_index.hooks";
import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";

import animations from "./places.animations";

const PlacesPage = () => {
  const { theme } = useTheme();

  const { checkedPlaceTypes, checkedServices, filterValue, sortBy } = usePlacesIndexStore(
    useShallow((state) => ({
      checkedPlaceTypes: state.checkedPlaceTypes,
      checkedServices: state.checkedServices,
      filterValue: state.filterValue,
      sortBy: state.sortBy,
    }))
  );

  const someFilterApplied =
    checkedPlaceTypes.length > 0 || checkedServices.length > 0 || filterValue !== "" || sortBy !== SortPlacesBy.Default;

  return (
    <section
      className="bg-gradient-radial overflow-y-auto w-full h-full"
      style={
        {
          "--tw-gradient-stops": `125% 125% at 50% 100%, ${theme === Theme.Dark ? "black" : "white"
            } 50%, var(--primary-color)`,
        } as CSSProperties
      }
    >
      <div className="max-w-full pt-4 px-4 md:pt-8 md:px-8 mt-8">
        <SearchField />
        <Separator from="10%" to="90%" />
        <SortAndFilters />
      </div>
      <div className="overflow-hidden">
        <motion.div
          {...animations.placesListContainer}
          initial={someFilterApplied ? "filterApplied" : "default"}
          animate={someFilterApplied ? "filterApplied" : "default"}
        >
          <AppliedFilters />
          <PlacesList />
        </motion.div>
      </div>
    </section>
  );
};

export default PlacesPage;
