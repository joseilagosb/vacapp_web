import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation.js";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import animations from "./place_card.animations";

import { PlaceCardProps } from "@/ts/types/components/place_card.types";

const PlaceCard = ({ place }: PlaceCardProps) => {
  const router = useRouter();
  return (
    <motion.article
      key={place.id}
      className="relative rounded-md shadow-lg hover:shadow-sm overflow-hidden bg-primary cursor-pointer select-none h-60"
      onClick={() => router.push(`/places/${place.id}`)}
      {...animations.placeCard}
    >
      <div className="relative w-full h-2/3">
        <Image
          src={`http://vacapp-backend:3000/images/places/${place.id}.png`}
          alt={place.place_short_name!}
          fill
          sizes="300px"
          draggable={false}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="h-1/3 flex flex-col px-4 justify-center gap-1">
        <h3 className="text-xl font-bold dark:text-white">{place.place_short_name}</h3>
        <div className="flex flex-row items-center self-start gap-1 bg-secondary p-1 rounded-lg">
          <FontAwesomeIcon icon={faClock} />
          <span className="text-sm shadow">
            {place.place_working_days![0]!.opening_time} -{" "}
            {place.place_working_days![0]!.closing_time}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default PlaceCard;
