"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import mapboxgl from "mapbox-gl";

import { MapStyles } from "@/utils/constants";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!;

const MapView = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      map.current ||
      mapContainer.current === null ||
      theme === undefined
    ) {
      return; // initialize map only once
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MapStyles[theme],
      center: [-73.131226, -40.577305],
      zoom: 12,
    });
  }, []);

  useEffect(() => {
    map.current?.setStyle(MapStyles[theme!]);
  }, [theme]);

  return <div ref={mapContainer} className="map-container" />;
};

export default MapView;
