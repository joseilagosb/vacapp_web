import { PlaceFilterType } from "@/ts/enums/stores.types";

export type FilterByModalProps = {
  onCloseModal: () => void;
  onSelectedFilterType: (filterType: PlaceFilterType) => void;
};
