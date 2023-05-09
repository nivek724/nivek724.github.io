import React from 'react';
import Card from 'Components/Card';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Card>Home</Card>
    </Container>
  );
};

export default Home;
