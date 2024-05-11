import { PlaceFilterType } from "@/ts/enums/stores.types";

export type FilterDialogProps = {
  onCloseModal: () => void;
  onSelectedFilterType: (filterType: PlaceFilterType) => void;
};
