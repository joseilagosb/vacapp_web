import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { usePlaceStore } from "@/stores/place/place.hooks";

import { IconButton } from "../ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMap,
  faLocationDot,
  faPeopleLine,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";

import { Theme } from "@/ts/enums/constants.enums";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { PlaceHeaderCardProps } from "@/ts/types/components/place_header.types";

import animations from "./header.animations";

const PlaceHeader = () => {
  const place = usePlaceStore((state) => state.place);
  const { theme } = useTheme();

  return (
    <motion.div className="w-full h-2/5 relative select-none" {...animations.header}>
      <Image
        src={`http://vacapp-backend:3000/images/places/${place.id}.png`}
        alt={place.place_short_name}
        fill
        sizes="300px"
        draggable={false}
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b bg-opacity-30"
        style={
          {
            "--tw-gradient-stops": `transparent 40%, ${theme === Theme.Light ? "white" : "black"
              } 80%`,
          } as CSSProperties
        }
      />
      <Link href="https://maps.google.com" target="_blank" className="absolute top-2 right-2">
        <IconButton
          icon={faMap}
          size={ButtonSize.Small}
          text="Ver en Maps"
          onClick={() => { }}
          animations={animations.mapsButton}
        />
      </Link>
      <div className="absolute bottom-3 left-8">
        <h2 className="text-5xl font-light tracking-wide">{place.place_name}</h2>
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="text-2xl font-extralight">{place.place_address}</span>
          <div className="mx-1 h-[4px] w-[4px] rounded-lg bg-black" />
          <FontAwesomeIcon icon={faCity} />
          <span className="text-2xl font-extralight">Osorno, CH</span>
        </div>
        <motion.div
          className="flex flex-row items-center gap-4"
          {...animations.headerCardContainer}
        >
          <PlaceHeaderCard
            leadingType="image"
            imageSrc={`/place_types/${place.place_type.id}.png`}
            color="bg-orange-400"
            text={place.place_type.place_type_name}
          />
          <PlaceHeaderCard
            leadingType="icon"
            icon={faPersonBooth}
            color="bg-green-400"
            text="Abierto"
          />
          <PlaceHeaderCard
            leadingType="icon"
            icon={faPeopleLine}
            color="bg-green-400"
            text="Densidad baja de personas"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const PlaceHeaderCard = ({ text, color, ...otherProps }: PlaceHeaderCardProps) => {
  const getLeadingElement = () => {
    switch (otherProps.leadingType) {
      case "icon":
        return <FontAwesomeIcon icon={otherProps.icon} />;
      case "image":
        return (
          <Image
            src={otherProps.imageSrc}
            alt={text}
            height="30"
            width="30"
            className="rounded-full"
          />
        );
    }
  };
  return (
    <motion.div
      className={`flex flex-row items-center gap-2 p-3 rounded-xl ${color} shadow`}
      {...animations.headerCard}
    >
      {getLeadingElement()}
      <span className="font-light tracking-wider uppercase">{text}</span>
    </motion.div>
  );
};

export default PlaceHeader;
