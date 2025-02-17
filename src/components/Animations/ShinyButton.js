import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  background: linear-gradient(to right, #000000, #1a1a1a);
  color: white;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  &:hover {
    background: linear-gradient(to right, #1a1a1a, #000000);
  }
`;

const ShinyText = styled(motion.div)`
  position: relative;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine 2s linear infinite;
`;

const ShineEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -150%;
  width: 150%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  transform: skewX(-20deg);
  transition: all 0.5s;
  z-index: 0;

  ${ButtonWrapper}:hover & {
    left: 100%;
    transition: all 0.5s;
  }
`;

function ShinyButton({ text, onClick }) {
  return (
    <ButtonWrapper onClick={onClick}>
      <ShinyText
        animate={{ x: ['-100%', '200%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {text}
      </ShinyText>
      <ShineEffect />
    </ButtonWrapper>
  );
}

export default ShinyButton;
