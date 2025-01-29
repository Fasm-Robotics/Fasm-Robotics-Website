import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';

const SectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
    z-index: 1;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  gap: 8px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

function NewSection() {
  return (
    <SectionWrapper id="new-section">
      <VideoBackground autoPlay muted loop>
        <source src="/videos/back_r.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <ContentWrapper>
        <SectionTitle>Discover the Future</SectionTitle>
        <SectionText>
          Explore cutting-edge robotic technologies designed to revolutionize daily life.
        </SectionText>
        <DiscoverButton href="/arm-available">
          <ShinyText text="Discover Now" speed={3} />
          <ArrowRight />
        </DiscoverButton>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default NewSection;
