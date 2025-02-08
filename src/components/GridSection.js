import React from 'react';
import styled from 'styled-components';
import TiltedCard from './TiltedCard';
import salut from '../assets/salut.jpg';
import piano from '../assets/piano.jpg';
import doigt from '../assets/doigt.jpg';
import banc from '../assets/banc.jpg';
import test from '../assets/untitled3.png';
import test2 from '../assets/untitled4.png';
import test3 from '../assets/untitled2.png';
import test4 from '../assets/untitled1.png';
import test5 from '../assets/untitled.png';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const projects = [
  {
    id: '01',
    img: test,
    title: 'Softer',
    description: 'A soft-bodied effector. As plush as a stuffed animal.',
  },
  {
    id: '02',
    img: test2,
    title: 'Better',
    description: 'Biomorphic design. Straight out of science fiction.',
  },
  {
    id: '03',
    img: test5,
    title: 'Faster',
    description:
      'Myofibers that contract faster than human skeletal muscle fibers.',
  },
  {
    id: '04',
    img: test4,
    title: 'Stronger',
    description: 'Human-level strength. Even in the fingers.',
  },
];

function GridComponent() {
  return (
    <GridContainer>
      {projects.map((project) => (
        <TiltedCard
          key={project.id}
          imageSrc={project.img}
          altText={project.title}
          title={project.title}
          description={project.description}
          containerHeight="300px"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={8}
          scaleOnHover={1}
        />
      ))}
    </GridContainer>
  );
}

export default GridComponent;
