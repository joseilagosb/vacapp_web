import { PlaceFilterType } from "@/ts/enums/stores.types";

export type PlaceFiltersModalProps = {
  onCloseModal: () => void;
  filterType: PlaceFilterType;
  onClickFilter: (filters: Array<number>) => void;
};
