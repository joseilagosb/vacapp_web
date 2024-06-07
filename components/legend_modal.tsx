import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faInfoCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Modal from "./ui/modal";

import Tabs from "./ui/tabs";
import Button, { TextButton } from "./ui/button";

import { useHomeStore } from "@/stores/home/home.hooks";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { LegendModalProps, LegendModalTab } from "@/ts/types/components/legend_modal.types";
import { Tab } from "@/ts/types/components/tabs.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import animations from "@/components/legend_modal.animations";

const LegendModal = ({ onCloseModal }: LegendModalProps) => {
  const [selectedTab, setSelectedTab] = useState<LegendModalTab>("areas");

  const legendModalTabs: Array<Tab> = [
    { slug: "areas", title: "Sectores", onClick: () => setSelectedTab("areas") },
    { slug: "symbols", title: "Simbología", onClick: () => setSelectedTab("symbols") },
    { slug: "other", title: "Otros", onClick: () => setSelectedTab("other") },
  ];

  const renderContent = () => {
    let selectedSection;
    switch (selectedTab) {
      case "areas":
        selectedSection = <AreasOverview />;
        break;
      case "symbols":
        selectedSection = <SymbolsOverview />;
        break;
      case "other":
        selectedSection = <OtherSymbols />;
        break;
      default:
        selectedSection = <></>;
        break;
    }
    return (
      <motion.div
        className="flex flex-col h-full"
        key={`legend_modal_content__${selectedTab}`}
        {...animations.section}
      >
        {selectedSection}
      </motion.div>
    );
  };

  return (
    <Modal
      animations={animations.legendModal}
      position={ModalPosition.BottomRight}
      size={ModalSize.Small}
      onCloseModal={onCloseModal}
      translation={{ x: 32, y: 160 }}
      transparentBackdrop
    >
      <div className="h-96 flex flex-col">
        <Tabs containerId="legend-modal" tabs={legendModalTabs} currentTab={selectedTab} />
        <div className="pt-4 pb-2 overflow-y-auto">
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </div>
    </Modal>
  );
};

const AreasOverview = () => {
  const router = useRouter();
  const { areas, moveCameraToArea } = useHomeStore(
    useShallow((state) => ({ moveCameraToArea: state.moveCameraToArea, areas: state.areas }))
  );
  const [onlyShowingOpenPlaces, setOnlyShowingOpenPlaces] = useState(true);

  const filteredAreas = onlyShowingOpenPlaces ? areas.filter((area) => +area.id > 4) : areas;

  return (
    <>
      <AnimatePresence initial={false}>
        {onlyShowingOpenPlaces && (
          <motion.div {...animations.onlyShowingOpenPlaces}>
            <div className="flex items-center gap-3 p-4 border-t-8 border-secondary bg-tertiary dark:bg-black-600 dark:text-white mb-4">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="text-sm font-medium">
                Mostrando solo los sectores con recintos abiertos.
              </span>
              <TextButton
                size={ButtonSize.Small}
                color={ButtonColor.Secondary}
                onClick={() => setOnlyShowingOpenPlaces(false)}
                text="Mostrar todo"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.ul className="flex flex-col gap-4 overflow-y-auto tiny-scrollbar bg-primary" layout>
        {filteredAreas.map((area) => (
          <li key={`areas_showcase__${area.id}`} className="flex flex-row items-center gap-2 pr-2">
            <div className="bg-orange-400 w-4 h-4 rounded-full" />
            <div className="flex flex-col grow">
              <span className="font-bold">{area.area_name}</span>
              <span className="text-sm font-italic">12 locales abiertos</span>
            </div>
            <div className="flex flex-row gap-1">
              <Button
                size={ButtonSize.Small}
                onClick={() => moveCameraToArea(area)}
                color={ButtonColor.Secondary}
              >
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
              </Button>
              <Button
                size={ButtonSize.Small}
                onClick={() => router.push(`/areas/${area.id}`)}
                color={ButtonColor.Secondary}
              >
                <FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" />
              </Button>
            </div>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

const SymbolsOverview = () => {
  return <div>SymbolsOverview</div>;
};

const OtherSymbols = () => {
  return <div>OtherSymbols</div>;
};

export default LegendModal;
