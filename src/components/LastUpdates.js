import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SimpleCarousel from './Carousel';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

function LastUpdates() {
  return (
    <Container>
      <Title>Latest updates</Title>
      <SimpleCarousel />
    </Container>
  );
}

export default LastUpdates;