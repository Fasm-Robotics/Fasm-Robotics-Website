import React from 'react';
import Carousel from './Carousel';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img6 from '../assets/6.jpg';

const slides = [
  {
    image: img2,
    title: 'New Things',
    description: 'This is the first slide',
  },
  {
    image: img3,
    title: 'New Update',
    description: 'This is the second slide',
  },
  {
    image: img4,
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
