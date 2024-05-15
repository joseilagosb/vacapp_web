export type PlaceFiltersItem = {
  id: number;
  name: string;
};

export type PlaceFiltersState = {
  filters: Array<number>;
};

export type PlaceFiltersActions = {
  selectFilter: (filter: number) => void;
  toggleFilter: (filter: number) => void;
  selectMultipleFilters: (filters: Array<number>) => void;
  clearFilters: () => void;
};

export type PlaceFiltersStore = PlaceFiltersState & PlaceFiltersActions;
