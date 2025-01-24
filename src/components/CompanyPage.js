import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  color: white;
  background-color: #1a1a1a;
  font-family: 'Arial', sans-serif;
`;

const HeaderSection = styled.div`
  padding: 50px;
  text-align: center;
  background-image: url('/path-to-your-header-bg.jpg');
  background-size: cover;
`;

const Section = styled.section`
  padding: 50px;
  border-bottom: 1px solid gray;
`;

const StatisticsSection = styled(Section)`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const StatBox = styled.div`
  margin: 0 20px;
`;

const FooterCallToAction = styled.div`
  padding: 50px;
  background-color: #333;
  text-align: center;
`;

const Button = styled.button`
  background-color: #00aaff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

const CompanyPage = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <h1>Company Name</h1>
        <p>Learn more about who we are and what we do.</p>
      </HeaderSection>
      <Section>
        <h2>Who We Are</h2>
        <p>Detailed description about the company, its history, and mission.</p>
      </Section>
      <StatisticsSection>
        <StatBox>
          <h3>4</h3>
          <p>Active Members</p>
        </StatBox>
        <StatBox>
          <h3>4</h3>
          <p>Years of Experience</p>
        </StatBox>
        <StatBox>
          <h3>1</h3>
          <p>Branch Locations</p>
        </StatBox>
        <StatBox>
          <h3>1</h3>
          <p>Observatory Zones</p>
        </StatBox>
      </StatisticsSection>
      <FooterCallToAction>
        <p>Let's Explore With Us</p>
        <Button>Join Us Now</Button>
      </FooterCallToAction>
    </PageContainer>
  );
}

export default CompanyPage;
