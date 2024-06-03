import React from "react";

const Tabs = ({ names }: { names: Array<string> }) => {
  return (
    <div className="flex flex-row gap-4">
      {names.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

export default Tabs;
