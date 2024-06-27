import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type PlaceHeaderCardProps = { text: string; color: string } & (
  | { leadingType: "icon"; icon: IconDefinition }
  | { leadingType: "image"; imageSrc: string }
);
