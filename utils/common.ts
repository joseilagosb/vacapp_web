import { ComponentAnimations } from "@/ts/types/components.types";
import { LatLng } from "@/ts/types/models.types";
import { MotionProps } from "framer-motion";

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getAnimationsObj = (
  animations: ComponentAnimations,
  defaultAnimations: MotionProps
) => {
  if (animations === "none") {
    return {};
  } else if (animations === "default") {
    return defaultAnimations;
  } else {
    return { ...defaultAnimations, ...animations };
  }
};

export const calculateCenterOfCoordinates = (coordinates: Array<LatLng>): LatLng => {
  let latitudeSum = 0;
  let longitudeSum = 0;

  for (let coordinate of coordinates) {
    latitudeSum += +coordinate.latitude;
    longitudeSum += +coordinate.longitude;
  }

  return {
    latitude: +(latitudeSum / coordinates.length).toFixed(5),
    longitude: +(longitudeSum / coordinates.length).toFixed(5),
  };
};
