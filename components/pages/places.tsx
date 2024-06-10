"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { PlacesPageProps } from "@/ts/types/components/places_page.types";

import animations from "./places.animations";

const PlacesPage = ({ places }: PlacesPageProps) => {
  const router = useRouter();
  return (
    <section className="overflow-y-auto w-full">
      <motion.div
        className="p-4 md:p-8 grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 overflow-y-auto"
        {...animations.placeIndex}
      >
        {places?.map((place) => {
          return (
            <motion.article
              key={place.id}
              className="relative rounded-md shadow-lg hover:shadow-sm overflow-hidden bg-primary cursor-pointer select-none h-60"
              onClick={() => router.push(`/places/${place.id}`)}
              {...animations.place}
            >
              <div className="relative w-full h-2/3">
                <Image
                  src={`http://vacapp-backend:3000/images/places/${place.id}.png`}
                  alt={place.place_short_name!}
                  fill
                  draggable={false}
                  objectFit="cover"
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
        })}
      </motion.div>
    </section>
  );
};

export default PlacesPage;
