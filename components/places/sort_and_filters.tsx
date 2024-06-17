import React, { useState } from "react";

import Dropdown from "../ui/dropdown";
import { TextButton } from "../ui/button";
import Checkbox from "../form/checkbox";

import { PlaceType, Service } from "@/ts/types/graphql/schemas.types";
import { ModalSize } from "@/ts/enums/components/modal.enums";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

type SortAndFilterProps = {
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
};

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
        <Dropdown id="sort" title="Ordenar" size={ModalSize.ExtraSmall}>
          <div className="flex flex-col">
            <TextButton
              size={ButtonSize.Small}
              hoverColor={ButtonColor.Secondary}
              text="Más cerca de mí"
              alignment="left"
              onClick={() => {}}
            />
            <TextButton
              size={ButtonSize.Small}
              hoverColor={ButtonColor.Secondary}
              text="Más visitados"
              alignment="left"
              onClick={() => {}}
            />
            <TextButton
              size={ButtonSize.Small}
              hoverColor={ButtonColor.Secondary}
              text="Más seguros"
              alignment="left"
              onClick={() => {}}
            />
          </div>
        </Dropdown>
      </div>
      <div className="flex flex-row gap-2">
        <Dropdown id="place-types" title="Tipo de lugar" alignment="right">
          {placeTypesArray.map((item, itemIndex) => (
            <Checkbox
              name={`place-types-modal-${itemIndex}`}
              label={item}
              checked={checkedPlaceTypes[itemIndex]}
              onChange={() => onCheckedPlaceType(itemIndex)}
            />
          ))}
        </Dropdown>
        <Dropdown id="services" title="Servicio" alignment="right">
          {servicesArray.map((item, itemIndex) => (
            <Checkbox
              name={`services-modal-${itemIndex}`}
              label={item}
              checked={checkedServices[itemIndex]}
              onChange={() => onCheckedService(itemIndex)}
            />
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default SortAndFilters;
