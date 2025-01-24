import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 40px 80px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const List = styled.ul`
  font-size: 1rem;
  line-height: 1.8;
  list-style: disc;
  padding-left: 20px;
`;

const VideoContainer = styled.video`
  width: 600px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

function JoinCommunityPage() {
  return (
    <PageContainer>
      <LeftSection>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '600px',
            height: '400px',
            borderRadius: '15px',
            objectFit: 'cover',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            pointerEvents: 'none',
          }}>
          <source src="/videos/test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </LeftSection>
      <RightSection>
        <Title>Robotic Arm Pre-Alpha</Title>
        <Text>
          FASM Robotics introduces its next-generation robotic arm, designed to deliver unmatched precision and exceptional performance. With its advanced training and control platform, this robotic arm is perfect for automating complex tasks and providing assistance in various environments.
        </Text>
        <h3>Pre-installed Skills</h3>
        <List>
          <li>Precision Handling</li>
          <li>Automated assembly</li>
          <li>Object Recognition</li>
          <li>Motion Control</li>
          <li>Tool Compatibility</li>
          <li>Learning Capabilities</li>
          <li>High Payload Capacity</li>
          <li>Multi-Axis Movement</li>
          <li>Remote Operation</li>
          <li>Safety Features</li>
          <li>Modular Design</li>
          <li>AI-Powered Feedback</li>
          <li>Customizable Grip</li>
          <li>CEnergy Efficiency</li>
        </List>
      </RightSection>
    </PageContainer>
  );
}

export default JoinCommunityPage;

