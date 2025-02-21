import React from 'react';
import styled from 'styled-components';
import { CheckCircle, Settings, ShoppingBag, Wrench, Link, Code, RotateCw, Layers, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #1f1f1f, #2c2c2c);
  padding: 50px 20px;
  color: white;
`;

const RoadmapTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #6a5acd, #48c9b0);
  transform: translateX(-50%);
`;

const Step = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  background: #333;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-self: flex-end;
  }
`;

const IconContainer = styled.div`
  background: linear-gradient(to bottom right, #6a5acd, #48c9b0);
  color: white;
  border-radius: 50%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StepDate = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #b0b0b0;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
`;

function Roadmap() {
  const steps = [
    {
      icon: <Package size={24} />,
      title: 'Step 1: First prototype and technology selection',
      date: 'September 2024',
      description: 'Define project requirements and select the most suitable technologies.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Step 2: First 3D modeling',
      date: 'October 2024',
      description: 'Design the initial 3D model of the robotic arm to validate the structure.',
    },
    {
      icon: <RotateCw size={24} />,
      title: 'Step 3: Development of shoulder motors',
      date: 'November 2024',
      description: 'Develop and test shoulder motors to ensure proper rotation and stability.',
    },
    {
      icon: <Wrench size={24} />,
      title: 'Step 4: Learning assembly techniques',
      date: 'November 2024 - December 2024',
      description: 'Study and test different assembly techniques for mechanical components.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Step 5: Shoulder motor assembly',
      date: 'December 2024 - January 2025',
      description: 'Integrate the shoulder motors into the structure and validate initial movements.',
    },
    {
      icon: <Link size={24} />,
      title: 'Step 6: Arm connection',
      date: 'January 2025',
      description: 'Connect and synchronize all robotic arm joints for fluid movement.',
    },
    {
      icon: <Code size={24} />,
      title: 'Step 7: First software tests',
      date: 'February 2025',
      description: 'Deploy and test initial control algorithms for robotic movement.',
    },
  ];

  return (
    <RoadmapContainer style={{ marginTop: '-3rem' }}>
      <RoadmapTitle>FASM Robotics' Roadmap</RoadmapTitle>
      <Timeline>
        <Line />
        {steps.map((step, index) => (
          <Step
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <IconContainer>{step.icon}</IconContainer>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDate>{step.date}</StepDate>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        ))}
      </Timeline>
    </RoadmapContainer>
  );
}

export default Roadmap;
