import React from 'react';
import styled from 'styled-components';
import PixelTransition from './PixelTransition';
import team3 from '../assets/team3.jpg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  background: #1f1f1f;
  color: white;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 400px;
  background: #444;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 1.5rem;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  padding: 20px;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
`;

const TeamSection = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const TeamTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

function CompanyPage() {
  return (
    <PageContainer style={{ marginTop: '-3rem' }}>
      <Section>
        <div>
          <Title>Who are we?</Title>
          <Description>
            We are a team of robotics enthusiasts dedicated to creating cutting-edge solutions
            that make a difference in people's lives. Our mission is to innovate and inspire.
          </Description>
        </div>
        <ImageContainer>
          <img
            src={team3}
            alt="Description de l'image"
            style={{
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', // Pour ajuster l'image
              borderRadius: '10px', // Coins arrondis
            }}
          />
        </ImageContainer>
      </Section>

      <TeamSection>
        <TeamTitle>Meet Our Team</TeamTitle>
        <CardsContainer>
          {[...Array(4)].map((_, index) => (
            <PixelTransition
              key={index}
              firstContent={
                <img
                  src={`https://via.placeholder.com/300x300?text=Member+${index + 1}`}
                  alt={`Team Member ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: '#111',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: '#ffffff',
                    }}
                  >
                    Member {index + 1}
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          ))}
        </CardsContainer>
      </TeamSection>
    </PageContainer>
  );
}

export default CompanyPage;
