import { CheckboxProps } from "@/ts/types/components/form.types";
import React from "react";

const Checkbox = ({ name, label, checked, onChange }: CheckboxProps) => {
  const checkboxId = `checkbox-${name}`;

  return (
    <label className="flex flex-row items-center px-2 py-1 hover:bg-primary rounded cursor-pointer">
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
      <span className="ml-3 min-w-0 text-gray-500 dark:text-white">{label}</span>
    </label>
  );
};
export default Checkbox;
