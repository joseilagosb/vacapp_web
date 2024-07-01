import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import Tabs from '../ui/tabs'
import CrowdsOverview from './crowds_overview';
import CrowdRecommendations from './crowd_recommendations';
import PlaceStats from './place_stats';

import { ComponentColor } from '@/ts/enums/constants.enums';
import { PlacePageTab } from '@/ts/types/components/place_navigator.types';

import animations from "./navigator.animations";

const PlaceNavigator = () => {
  const [selectedTab, setSelectedTab] = useState<PlacePageTab>("crowds");

  const tabs = [
    { slug: "crowds", title: "Aglomeraciones", onClick: () => { onSelectedTab("crowds") } },
    { slug: "recommendations", title: "Recomendaciones", onClick: () => { onSelectedTab("recommendations") } },
    { slug: "placeStats", title: "Estadísticas del lugar", onClick: () => { onSelectedTab("placeStats") } },
  ];

  const onSelectedTab = (tab: PlacePageTab) => setSelectedTab(tab);

  const renderContent = () => {
    let selectedSection;
    switch (selectedTab) {
      case "crowds":
        selectedSection = <CrowdsOverview />;
        break;
      case "recommendations":
        selectedSection = <CrowdRecommendations />;
        break;
      case "placeStats":
        selectedSection = <PlaceStats />;
        break;
      default:
        selectedSection = <></>;
        break;
    }
    return (
      <motion.div
        className="flex flex-col h-full"
        key={`place_navigator_content__${selectedTab}`}
        {...animations.section}
      >
        {selectedSection}
      </motion.div>
    );
  }

  return (
    <motion.div className="relative w-3/4 pl-8 flex flex-col" {...animations.navigator}>
      <Tabs
        containerId="place-page-tabs"
        currentTab={selectedTab}
        tabsColor={ComponentColor.Secondary}
        tabs={tabs}
      />
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </motion.div>
  )
}

export default PlaceNavigator;