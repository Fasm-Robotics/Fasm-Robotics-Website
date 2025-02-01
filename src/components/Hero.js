import styled from 'styled-components';
import BlurText from './BlurText';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';

const HeroSection = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 15px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Couvre tout l'espace
  z-index: 0; // Derrière tout le reste
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; // Devant la vidéo
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const HeroHeadline = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
`;

const HeroSubHeadline = styled.div`
  font-size: 1.5em;
  margin-bottom: 20px;
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

function Hero() {
  const scrollToSection = () => {
    document.getElementById('new-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection style={{ marginTop: '-3rem' }}>

      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/videos/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <ContentWrapper>
        <HeroHeadline>
          <BlurText
            text="Welcome to the FASM Robotics Society"
            delay={70}
            className="text-4xl font-bold"
            animateBy="letters"
            direction="top"
          />
        </HeroHeadline>
        <HeroSubHeadline>
          <BlurText
            text="Intelligent robotic solutions designed to simplify everyday challenges."
            delay={150}
            className="text-xl"
            animateBy="words"
            direction="bottom"
          />
        </HeroSubHeadline>
        <ButtonsContainer>
        <DiscoverButton as="button" onClick={scrollToSection}>
            <ShinyText text="Discover Now" speed={3} />
            <ArrowRight />
          </DiscoverButton>
          <DiscoverButton href="/join-community">
          <ShinyText text="Join the Society" speed={3} />
          <ArrowRight />
          </DiscoverButton>
        </ButtonsContainer>
      </ContentWrapper>
    </HeroSection>
  );
}

export default Hero;
