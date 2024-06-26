"use client";

import React, { CSSProperties } from "react";
import { useTheme } from "next-themes";

import Separator from "../ui/separator";
import SearchField from "../places/search_field";
import PlacesList from "../places/places_list";
import SortAndFilters from "../places/sort_and_filters";

import { Theme } from "@/ts/enums/constants.enums";

const PlacesPage = () => {
  const { theme } = useTheme();

  return (
    <section
      className="bg-gradient-radial overflow-y-auto w-full h-full"
      style={
        {
          "--tw-gradient-stops": `125% 125% at 50% 100%, ${
            theme === Theme.Dark ? "black" : "white"
          } 50%, var(--primary-color)`,
        } as CSSProperties
      }
    >
      <div className="max-w-full pt-4 px-4 md:pt-8 md:px-8 mt-8">
        <SearchField />
        <Separator from="10%" to="90%" />
        <SortAndFilters />
      </div>
      <PlacesList />
    </section>
  );
};

export default PlacesPage;
