"use client";

import React, { useEffect, useRef } from 'react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!; 

type MapViewProps = {}

const MapView = (props: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" 
       || map.current 
       || mapContainer.current === null) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-70.9, 42.35],
      zoom: 9
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container"  />
    </div>
  );
}

export default MapView;