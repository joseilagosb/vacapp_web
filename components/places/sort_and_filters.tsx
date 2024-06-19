import React, { useState } from "react";

import Dropdown from "../ui/dropdown";
import { TextButton } from "../ui/button";
import Checkbox from "../form/checkbox";

import { ModalSize } from "@/ts/enums/components/modal.enums";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { SortAndFilterProps } from "@/ts/types/components/sort_and_filters.types";
import { ComponentColor } from "@/ts/enums/constants.enums";

const SortAndFilters = ({ placeTypes, services }: SortAndFilterProps) => {
  const [checkedPlaceTypes, setCheckedPlaceTypes] = useState(
    new Array(placeTypes.length).fill(false)
  );
  const [checkedServices, setCheckedServices] = useState(new Array(services.length).fill(false));

  const onCheckedPlaceType = (index: number) => {
    const newCheckedPlaceTypes = checkedPlaceTypes.map((placeType, placeTypeIndex) => {
      if (index === placeTypeIndex) {
        return !placeType;
      }
      return placeType;
    });
    setCheckedPlaceTypes(newCheckedPlaceTypes);
  };

  const onCheckedService = (index: number) => {
    const newCheckedServices = checkedServices.map((service, serviceIndex) => {
      if (index === serviceIndex) {
        return !service;
      }
      return service;
    });
    setCheckedServices(newCheckedServices);
  };

  const placeTypesArray = placeTypes.map((placeType) => placeType.place_type_name!);
  const servicesArray = services.map((service) => service.service_name!);

  return (
    <div className="w-full flex flex-row justify-between">
      <div>
        <Dropdown
          id="sort"
          title="Ordenar"
          modalSize={ModalSize.ExtraSmall}
          modalColor={ComponentColor.Secondary}
        >
          <div className="flex flex-col">
            <TextButton
              size={ButtonSize.Small}
              color={ComponentColor.Transparent}
              hoverColor={ComponentColor.Primary}
              text="Más cerca de mí"
              alignment="left"
              onClick={() => {}}
            />
            <TextButton
              size={ButtonSize.Small}
              color={ComponentColor.Transparent}
              hoverColor={ComponentColor.Primary}
              text="Más visitados"
              alignment="left"
              onClick={() => {}}
            />
            <TextButton
              size={ButtonSize.Small}
              color={ComponentColor.Transparent}
              hoverColor={ComponentColor.Primary}
              text="Más seguros"
              alignment="left"
              onClick={() => {}}
            />
          </div>
        </Dropdown>
      </div>
      <div className="flex flex-row gap-2">
        <Dropdown
          id="place-types"
          title="Tipo de lugar"
          alignment="right"
          modalColor={ComponentColor.Secondary}
        >
          <div className="flex flex-col max-h-[400px] overflow-y-auto tiny-scrollbar">
            {placeTypesArray.map((item, itemIndex) => (
              <Checkbox
                name={`place-types-modal-${itemIndex}`}
                label={item}
                checked={checkedPlaceTypes[itemIndex]}
                onChange={() => onCheckedPlaceType(itemIndex)}
              />
            ))}
          </div>
          <div className="text-right mt-2">
            <TextButton text="Filtrar" size={ButtonSize.Small} onClick={() => {}} />
          </div>
        </Dropdown>
        <Dropdown
          id="services"
          title="Servicio"
          alignment="right"
          modalColor={ComponentColor.Secondary}
        >
          <div className="flex flex-col max-h-[400px] overflow-y-auto tiny-scrollbar">
            {servicesArray.map((item, itemIndex) => (
              <Checkbox
                name={`services-modal-${itemIndex}`}
                label={item}
                checked={checkedServices[itemIndex]}
                onChange={() => onCheckedService(itemIndex)}
              />
            ))}
          </div>
          <div className="text-right mt-2">
            <TextButton text="Filtrar" size={ButtonSize.Small} onClick={() => {}} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default SortAndFilters;
