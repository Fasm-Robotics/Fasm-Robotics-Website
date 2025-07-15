import React from 'react';
import Carousel from './Carousel';
import poing from '../../assets/arm/poing.jpg';
import main from '../../assets/arm/mains.jpg';
import banc from '../../assets/arm/banc.jpg';

const slides = [
  {
    image: main,
    title: 'July Update',
    description: 'We linked the shoulder to forarms',
  },
  {
    image: poing,
    title: 'June Update',
    description: 'We linked the Shoulder to the software',
  },
  {
    image: banc,
    title: 'May Update',
    description: 'The software is now able to control the arm',
  },
];

function LastUpdates() {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Latest Updates</h2>
      <Carousel slides={slides} />
    </div>
  );
}

export default LastUpdates;
