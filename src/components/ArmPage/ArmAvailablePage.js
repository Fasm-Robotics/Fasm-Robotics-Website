import React from 'react';
import styled from 'styled-components';
import TextAnimation from '../Animations/TextAnimation';
import GridSection from './GridSection';
import { ArrowRight } from 'lucide-react';
import ShinyText from '../Animations/ShinyText';
import LastUpdates from './LastUpdates';
import poing from '../../assets/arm/poing.jpg';
import LinearCard from './Linear-Card'; 
import GradientSection from './GradientSection';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background: url(${poing}) center/cover no-repeat;
  color: white;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const DiscoverButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 30px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  gap: 10px;
  overflow: hidden;

  &:hover {
    background-color: white;
    color: black;
  }
`;

function ArmAvailablePage() {
  return (
    <>
      <PageContainer className="flex flex-col items-center justify-center h-screen -mt-10">
        <Content className="text-center">
          <TextAnimation
            text="FASM Robotic Arm Available"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.8 },
              },
            }}
            classname="text-5xl font-bold"
          />
          <TextAnimation
            text="Discover the precision and performance of the FASM Robotic Arm. Now available."
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.8 },
              },
            }}
            classname="text-xl max-w-[800px] mx-auto leading-6 block"
          />
          {/*<div className="flex justify-center mt-8">
            <DiscoverButton href="/join-community">
              <ShinyText text="Join the Society" speed={3} />
              <ArrowRight />
            </DiscoverButton>
          </div>  wait to finish the society page*/}
        </Content>
      </PageContainer>
      <GradientSection />
      <GridSection />
      <LastUpdates />
      {/*<LinearCard
        title="FASM Robotic Arm"
        description="The FASM Robotic Arm is a state-of-the-art robotic arm designed to replicate and automate the most precise and repetitive tasks, bringing convenience and innovation to your daily life."
        url={piano}
      />*/}
    </>
  );
}

export default ArmAvailablePage;
