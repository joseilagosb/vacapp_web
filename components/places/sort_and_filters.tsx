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
            {placeTypes.map((placeType) => (
              <Checkbox
                key={`place-types-modal-${placeType.id}`}
                name={`place-types-modal-${placeType.id}`}
                label={placeType.place_type_name!}
                checked={checkedPlaceTypes[+placeType.id]}
                onChange={() => onCheckedPlaceType(+placeType.id)}
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
            {services.map((service) => (
              <Checkbox
                key={`services-modal-${service.id}`}
                name={`services-modal-${service.id}`}
                label={service.service_name!}
                checked={checkedServices[+service.id]}
                onChange={() => onCheckedService(+service.id)}
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
