import { ChangeEvent } from "react";

export type FiltersFormProps = {
  inputValue: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickClearInput: () => void;
};
