import React from 'react'

import Modal from './ui/modal'

import { ModalPosition, ModalSize } from '@/ts/enums/components/modal.enums'
import { PlaceFilterType } from '@/ts/enums/stores.types'
import { FilterDialogProps } from '@/ts/types/components/filter_dialog.types'

const FilterDialog = ({ onCloseModal, onSelectedFilterType }: FilterDialogProps) => {
  return (
    <Modal
      position={ModalPosition.BottomRight}
      size={ModalSize.ExtraSmall}
      onCloseModal={onCloseModal}
      withTranslation
      translationProps={{
        x: 32,
        y: 95
      }}
      transparentBackdrop
    >
      <div className="flex flex-col items-end gap-4">
        <button className="font-sm" onClick={() => onSelectedFilterType(PlaceFilterType.PlaceTypes)}>Por tipo de lugar</button>
        <div className="h-1 w-full bg-secondary" />
        <button className="font-sm" onClick={() => onSelectedFilterType(PlaceFilterType.Services)}>Por servicios</button>
      </div>
    </Modal>
  )
}

export default FilterDialog