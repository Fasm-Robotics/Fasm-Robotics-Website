import React from 'react';
import styled from 'styled-components';
import TextAnimation from '../Animations/TextAnimation';
import test3 from '../../assets/arm/untitled2.png';

const GradientSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: url(${test3}) center/cover no-repeat;
  padding: 20px;
  color: white;
  overflow: visible;
`;

const SectionText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  white-space: normal;
`;


function GradientSection() {
  return (
    <GradientSectionContainer>
      <SectionText>
        <TextAnimation
          text="Built for today"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { ease: 'easeInOut', duration: 0.6 },
            },
          }}
          classname="text-4xl font-bold"
        />
        <TextAnimation
          text="Ready for the future."
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { ease: 'easeInOut', duration: 0.6 },
            },
          }}
          classname="text-4xl font-bold mt-2"
        />
        <TextAnimation
            text="Our robotic arm is designed to replicate and automate the most precise and repetitive tasks. Bringing convenience and innovation to your daily life."
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.8 },
              },
            }}
            className="text-xl max-w-[800px] mx-auto leading-8 break-words"
        />
      </SectionText>
    </GradientSectionContainer>
  );
}

export default GradientSection;
