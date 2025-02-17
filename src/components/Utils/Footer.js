import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
const FooterContainer = styled.footer`
  background-color: #111;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 15px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2025 FASM Company. All rights reserved.</FooterText>
      <SocialIcons>
        <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
      </SocialIcons>
      <FooterText>Email: contact@fasmrobotics.com</FooterText>
    </FooterContainer>
  );
}

export default Footer;
