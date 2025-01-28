import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #202020, #333333);
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  overflow-x: auto;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: #555;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const Step = styled(motion.div)`
  position: relative;
  z-index: 2;
  background: #333;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 150px;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    background: #555;
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -40px;
    width: 20px;
    height: 20px;
    background: #555;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:first-child::after {
    display: none; /* Masque la ligne pour le premier élément */
  }
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const steps = [
  { id: 1, title: 'Phase 1', description: 'Project Initialization' },
  { id: 2, title: 'Phase 2', description: 'Research & Development' },
  { id: 3, title: 'Phase 3', description: 'Prototyping' },
  { id: 4, title: 'Phase 4', description: 'Testing & Feedback' },
  { id: 5, title: 'Phase 5', description: 'Launch' },
];

function Roadmap() {
  return (
    <RoadmapContainer>
      <Title>Project Roadmap</Title>
      <Timeline>
        {steps.map((step, index) => (
          <Step
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Step>
        ))}
      </Timeline>
    </RoadmapContainer>
  );
}

export default Roadmap;
