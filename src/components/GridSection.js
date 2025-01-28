import React from 'react';
import styled from 'styled-components';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img6 from '../assets/6.jpg';
import TiltedCard from './TiltedCard';

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
    img: img2,
    title: 'Softer',
    description: 'A soft-bodied effector. As plush as a stuffed animal.',
    colSpan: 2, // Spans two columns
  },
  {
    id: '02',
    img: img3,
    title: 'Better',
    description: 'Biomorphic design. Straight out of science fiction.',
    rowSpan: 1, // Normal
  },
  {
    id: '03',
    img: img4,
    title: 'Faster',
    description:
      'Myofibers that contract faster than human skeletal muscle fibers.',
    rowSpan: 1, // Normal
  },
  {
    id: '04',
    img: img6,
    title: 'Stronger',
    description: 'Human-level strength. Even in the fingers.',
    colSpan: 2, // Spans two columns
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
          captionText={project.description}
          containerHeight="300px"
          containerWidth="100%" // Adjust dynamically
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={8}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>
                {project.title}
              </h3>
              <p style={{ margin: 0, fontSize: '1rem', color: 'white' }}>
                {project.description}
              </p>
            </div>
          }
        />
      ))}
    </GridContainer>
  );
}

export default GridComponent;
