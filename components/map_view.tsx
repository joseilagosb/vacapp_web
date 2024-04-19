"use client";

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!; 

type MapViewProps = {
}

const MapView = ({}: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" 
       || map.current 
       || mapContainer.current === null) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/joseilagosb/cklstirgf19x717mfjj0mltjx',
      center: [-73.131226, -40.577305],
      zoom: 12
    });
  }, []);

  return (
    <div ref={mapContainer} className="map-container"  />
  );
}

export default MapView;