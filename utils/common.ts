import { LatLng } from "@/ts/types/models.types";

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const deepMerge = (target: any, ...sources: any[]): any => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
};

export const getCurrentRect = (element: HTMLElement) => {
  if (!element) {
    return { bottom: 0, left: 0, right: 0, top: 0, width: 0, height: 0 };
  }

  return element.getBoundingClientRect();
};
