import React from 'react';
import styled from 'styled-components';
import TextAnimation from './TextAnimation';
import { JoinButton } from './CreativeBtn';
import GridSection from './GridSection';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #2c2c2c, #3e3e3e);
  color: white;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #333333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const GradientSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(135deg, #2c2c2c, #d9d9d9);
  padding: 20px;
  color: white;
  overflow: visible; /* Assure que rien n'est coupé */
`;

const SectionText = styled.div`
  max-width: 800px; /* Augmente cette valeur si nécessaire */
  margin: 0 auto;
  padding: 0 20px; /* Ajoute un padding pour éviter que le texte ne touche les bords */
  text-align: center;
  word-wrap: break-word; /* Empêche les mots trop longs d'être coupés */
`;

const MainText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

function ArmAvailablePage() {
  return (
    <>
      <PageContainer>
        <Content>
          <TextAnimation
            text="FASM Robotic Arm Available"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.6 },
              },
            }}
            classname="text-5xl font-bold"
          />
          <TextAnimation
            text="Discover the precision and performance of the FASM Robotic Arm. Now available for pre-order."
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, ease: 'easeInOut', duration: 0.6 },
              },
            }}
            classname="text-xl mt-4"
          />
          <JoinButton />
        </Content>
      </PageContainer>

      <GradientSection>
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
  text="Our robotic arm is designed to replicate and automate the most precise and repetitive tasks, bringing convenience and innovation to your daily life."
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeInOut', duration: 1 },
    },
  }}
  classname="text-xl max-w-[800px] mx-auto leading-6"
/>

        </SectionText>
      </GradientSection>
      <GridSection />
    </>
  );
}

export default ArmAvailablePage;
