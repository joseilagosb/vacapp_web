
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faQuestion } from '@fortawesome/free-solid-svg-icons';

import { usePlaceStore } from '@/stores/place/place.hooks';

import Button from '../ui/button';

import { ButtonSize } from '@/ts/enums/components/button.enums';
import { ComponentColor } from '@/ts/enums/constants.enums';

import animations from "./about.animations";

const AboutPlace = () => {
  const place = usePlaceStore((state) => state.place);

  return (
    <motion.div className="w-1/4 mr-4" {...animations.aboutPlace}>
      <div className='flex flex-row gap-1 items-center justify-center'>
        <h4 className='text-2xl font-light pb-4'><FontAwesomeIcon icon={faInfoCircle} size="sm" /> Más acerca del lugar</h4>
      </div>
      <div className='relative w-full max-h-[80%] flex flex-col items-start justify-start gap-4 overflow-y-auto tiny-scrollbar'>
        <div className='flex flex-col gap-1 w-full'>
          <span className='italic font-light'>Nombre completo</span>
          <span className='font-light'>{place.place_name}</span>
        </div>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-col gap-1'>
            <span className='italic font-light'>Superficie total</span>
            <span className='font-light'>{place.surface} m<sup>2</sup></span>
          </div>
          <Button onClick={() => { }} size={ButtonSize.Small} color={ComponentColor.Transparent}>
            <FontAwesomeIcon icon={faQuestion} />
          </Button>
        </div>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-col gap-1'>
            <span className='italic font-light'>Superficie transitable</span>
            <span className='font-light'>{place.attention_surface} m<sup>2</sup></span>
          </div>
          <Button onClick={() => { }} size={ButtonSize.Small} color={ComponentColor.Transparent}>
            <FontAwesomeIcon icon={faQuestion} />
          </Button>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='italic font-light pb-1'>Servicios disponibles</span>
          {place.services.map((service) => (
            <div className='text-sm font-light'>{service.service_name}</div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPlace;