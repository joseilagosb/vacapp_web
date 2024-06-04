import React, { useState } from "react";

import Modal from "./ui/modal";

import Tabs from "./ui/tabs";
import animations from "@/components/legend_modal.animations";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { LegendModalProps, LegendModalTab } from "@/ts/types/components/legend_modal.types";
import { Tab } from "@/ts/types/components/tabs.types";
import { useHomeStore } from "@/stores/home/home.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faInfoCircle,
  faLocationDot,
  faLocationPin,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";
import Button, { TextButton } from "./ui/button";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

const LegendModal = ({ onCloseModal }: LegendModalProps) => {
  const [selectedTab, setSelectedTab] = useState<LegendModalTab>("areas");

  const legendModalTabs: Array<Tab> = [
    { slug: "areas", title: "Sectores", onClick: () => setSelectedTab("areas") },
    { slug: "symbols", title: "Simbología", onClick: () => setSelectedTab("symbols") },
    { slug: "other", title: "Otros", onClick: () => setSelectedTab("other") },
  ];

  const renderTab = () => {
    switch (selectedTab) {
      case "areas":
        return <AreasShowcase />;
      case "symbols":
      case "other":
      default:
        return <></>;
    }
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
      <div className="h-96">
        <Tabs containerId="legend-modal" tabs={legendModalTabs} currentTab={selectedTab} />
        <div className="pt-4 pb-2">{renderTab()}</div>
      </div>
    </Modal>
  );
};

const AreasShowcase = () => {
  const areas = useHomeStore((state) => state.areas);

  return (
    <ul className="flex flex-col gap-4 overflow-y-auto">
      <div className="flex items-center gap-3 p-4 border-t-4 border-secondary bg-tertiary dark:bg-black-600 dark:text-white">
        <FontAwesomeIcon icon={faInfoCircle} />
        <span className="text-sm font-medium">
          Mostrando solo los sectores con recintos abiertos.
        </span>
        <TextButton
          size={ButtonSize.Small}
          color={ButtonColor.Secondary}
          onClick={() => {}}
          text="Mostrar todo"
        />
      </div>
      {areas.map((area) => (
        <li key={`areas_showcase__${area.id}`} className="flex flex-row items-center gap-2">
          <div className="bg-orange-400 w-4 h-4 rounded-full" />
          <div className="flex flex-col grow">
            <span className="font-bold">{area.area_name}</span>
            <span className="text-sm font-italic">12 locales abiertos</span>
          </div>
          <div className="flex flex-row gap-1">
            <Button size={ButtonSize.Small} onClick={() => {}} color={ButtonColor.Secondary}>
              <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
            </Button>
            <Button size={ButtonSize.Small} onClick={() => {}} color={ButtonColor.Secondary}>
              <FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LegendModal;
