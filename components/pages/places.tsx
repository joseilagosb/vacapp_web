"use client";

import React, { CSSProperties, ChangeEvent, useState } from "react";
import { useTheme } from "next-themes";

import FiltersForm from "../places/filters_form";
import PlacesList from "../places/places_list";

import { Theme } from "@/ts/enums/constants.enums";
import { PlacesPageProps } from "@/ts/types/components/places_page.types";

const PlacesPage = ({ places }: PlacesPageProps) => {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useTheme();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onClickClearInput = () => {
    setInputValue("");
  };

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
      <FiltersForm
        inputValue={inputValue}
        onChangeInput={onChangeInput}
        onClickClearInput={onClickClearInput}
      />
      <PlacesList places={places} currentFilter={inputValue} />
    </section>
  );
};

export default PlacesPage;
