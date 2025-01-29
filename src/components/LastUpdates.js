import React from 'react';
import Carousel from './Carousel';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import piano from '../assets/piano.jpg';
import poing from '../assets/poing.jpg';
import main from '../assets/main.jpg';
import banc from '../assets/banc.jpg';

const slides = [
  {
    image: main,
    title: 'New Things',
    description: 'This is the first slide',
  },
  {
    image: poing,
    title: 'New Update',
    description: 'This is the second slide',
  },
  {
    image: banc,
    title: 'New Stuff',
    description: 'This is the third slide',
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
