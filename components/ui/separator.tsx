import React, { CSSProperties } from "react";

import { SeparatorProps } from "@/ts/types/components/separator.types";

const Separator = ({ from = "0%", via = "50%", to = "100%" }: SeparatorProps) => {
  return (
    <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:via-gray-300"
      style={
        {
          "--tw-gradient-from-position": from,
          "--tw-gradient-via-position": via,
          "--tw-gradient-to-position": to,
        } as CSSProperties
      }
    />
  );
};

export default Separator;
