import React from "react";

type CheckboxProps = {
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ name, label, checked, onChange }: CheckboxProps) => {
  const checkboxId = `checkbox-${name}`;

  return (
    <label className="flex flex-row">
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300"
      />
      <span className="ml-3 min-w-0 dark:text-white">{label}</span>
    </label>
  );
};
export default Checkbox;
