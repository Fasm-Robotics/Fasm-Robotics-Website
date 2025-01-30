import React from 'react';
import styled from 'styled-components';
import { CheckCircle, Settings, ShoppingBag, CreditCard, TrendingUp } from 'lucide-react';
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
      icon: <ShoppingBag size={24} />,
      title: 'Step 1: Research Products',
      description: 'Identify trending products that have high demand and low competition.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Step 2: Set Up the Store',
      description: 'Register and customize your online store with user-friendly tools.',
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Step 3: Payment Integration',
      description: 'Integrate secure payment methods to ensure smooth transactions.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Step 4: Launch Marketing Campaign',
      description: 'Create ad campaigns to reach your target audience and drive sales.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Step 5: Optimize and Scale',
      description: 'Analyze performance data to optimize and scale your business.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Step 6: Optimize and Scale',
      description: 'Analyze performance data to optimize and scale your business.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Step 7: Optimize and Scale',
      description: 'Analyze performance data to optimize and scale your business.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Step 8: Optimize and Scale',
      description: 'Analyze performance data to optimize and scale your business.',
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
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        ))}
      </Timeline>
    </RoadmapContainer>
  );
}

export default Roadmap;
