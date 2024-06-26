import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import animations from "./filter_bubble.animations";

const FilterBubble = ({ icon, item, onClick }: { icon?: IconDefinition, item: string, onClick: () => void }) => {
  return (
    <motion.div className="rounded-lg bg-secondary p-2 flex items-center self-center gap-2 cursor-pointer"
      onClick={onClick}
      {...animations.filterBubble}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-xs" />}
      <span className="text-xs">{item || ""}</span>
      <FontAwesomeIcon icon={faTimes} className="text-xs" />
    </motion.div>
  );
}

export default FilterBubble;