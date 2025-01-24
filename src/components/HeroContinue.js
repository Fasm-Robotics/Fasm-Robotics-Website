import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

const SectionWrapper = styled.div`
  height: 100vh; /* Prend toute la hauteur de la fenêtre */
  background: linear-gradient(to bottom, #202020, #333333);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement */
  align-items: center; /* Centre horizontalement */
  text-align: center;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const DiscoverButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  gap: 10px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

function NewSection() {
  return (
    <SectionWrapper id="new-section">
      <SectionTitle>Discover the Future</SectionTitle>
      <SectionText>
        Explore cutting-edge robotic technologies designed to revolutionize daily life.
      </SectionText>
      <DiscoverButton href="/arm-available">
        Discover <ArrowRight />
      </DiscoverButton>
    </SectionWrapper>
  );
}

export default NewSection;
