import React from 'react';
import Card from 'Components/Card';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem; 
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Card title={<div>Home</div>}>
        <div>
          <p style={{padding: '0 1rem'}}> Helllo </p>
          <p style={{padding: '0 1rem'}}> What is up</p>
        </div>
      </Card>
    </Container>
  );
};

export default Home;
