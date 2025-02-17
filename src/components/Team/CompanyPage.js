import React from 'react';
import styled from 'styled-components';
import PixelTransition from './PixelTransition';
import team3 from '../../assets/team/team3.jpg';

// Ajout des vraies images des membres de l'équipe
import member1 from '../../assets/team/ari.jpg';
import member2 from '../../assets/team/moh.jpg';
import member3 from '../../assets/team/sabri.jpg';
import member4 from '../../assets/team/flav1.jpg';

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

const teamMembers = [
  { name: 'Aristide', image: member1 },
  { name: 'Mohsine', image: member2 },
  { name: 'Sabri', image: member3 },
  { name: 'Flavien', image: member4 },
];

function CompanyPage() {
  return (
    <PageContainer style={{ marginTop: '-3rem' }}>
      <Section>
        <div>
          <Title>Who are we?</Title>
          <Description>
          We are a team of Epitech students passionate about robotics and innovation. For our final year project, we decided to develop an open-source, low-cost robotic arm designed to be accessible to everyone, from hobbyists to researchers.
          <br /><br />
          Our goal is to democratize robotics by providing a powerful yet affordable tool that encourages learning, experimentation, and real-world applications. We believe that technology should be open and collaborative, and we are committed to sharing our progress with the community.
          </Description>
        </div>
        <ImageContainer>
          <img
            src={team3}
            alt="Description de l'image"
            style={{
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </ImageContainer>
      </Section>

      <TeamSection>
        <TeamTitle>Meet Our Team</TeamTitle>
        <CardsContainer>
          {teamMembers.map((member, index) => (
            <PixelTransition
              key={index}
              firstContent={
                <img
                  src={member.image}
                  alt={member.name}
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
                    {member.name}
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
