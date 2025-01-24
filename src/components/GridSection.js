import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes */
  grid-auto-rows: minmax(100px, auto); /* Hauteur adaptable des cartes */
  gap: 20px; /* Espacement entre les cartes */
  padding: 20px; /* Espacement autour de la grille */
  max-width: 1200px; /* Limite la largeur maximale */
  margin: 0 auto; /* Centrage de la grille */
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  grid-column: ${({ size }) => (size === 'large' ? 'span 2' : 'span 1')};
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const projects = [
  {
    id: '01',
    img : img2,
    title: 'Softer',
    description: 'A soft-bodied effector. As plush as a stuffed animal.',
    size: 'small',
  },
  {
    id: '02',
    img: img3,
    title: 'Better',
    description: 'Biomorphic design. Straight out of science fiction.',
    size: 'small',
  },
  {
    id: '03',
    img: img4,
    title: 'Faster',
    description:
      'Myofibers that contract faster than human skeletal muscle fibers.',
    size: 'small',
  },
  {
    id: '04',
    img: 'img5',
    title: 'Stronger',
    description: 'Human-level strength. Even in the fingers.',
    size: 'small',
  },
];

function GridComponent() {
  return (
    <GridContainer>
      {projects.map((project) => (
        <Card key={project.id} size={project.size}>
          <CardImage src={project.img} alt={project.title} />
          <CardOverlay>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardOverlay>
        </Card>
      ))}
    </GridContainer>
  );
}

export default GridComponent;
