import styled from 'styled-components';
import { DiscoverButton, JoinButton } from './CreativeBtn';
import { RandomizedTextEffect } from './RandomizedTextEffect';

const HeroSection = styled.div`
  position: relative;
  height: 100vh; // 100% de la hauteur de la fenêtre de visualisation
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 15px;
  overflow: hidden;

  // Superpose une légère couleur en transparence pour améliorer la lisibilité du texte
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // Couche sombre
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
  position: relative; // Position relative pour superposer le contenu
  z-index: 2; // Devant la vidéo
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Espacement entre les boutons */
  margin-top: 20px;
`;

const HeroHeadline = styled.h1`
  color: #d3d3d3;
  font-size: 3em;
`;

const HeroSubHeadline = styled.p`
  color: #d3d3d3;
  font-size: 1.5em;
`;

const HeroButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

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
    <HeroSection>
      {/* Vidéo en arrière-plan */}
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      {/* Contenu */}
      <ContentWrapper>
        <HeroHeadline>
          <RandomizedTextEffect text="Welcome to the FASM Robotics Society" />
        </HeroHeadline>
        <HeroSubHeadline>
          <RandomizedTextEffect text="Intelligent robotic solutions designed to simplify everyday challenges." />
        </HeroSubHeadline>
        <ButtonsContainer>
          <DiscoverButton />
          <JoinButton />
        </ButtonsContainer>
      </ContentWrapper>
    </HeroSection>
  );
}

export default Hero;
