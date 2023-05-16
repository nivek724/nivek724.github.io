import React from 'react';
import Card from 'Components/Card';
import PageLink from 'Components/PageLink';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 3rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 185px;
  gap: 0.5rem;
  margin: 0.5rem;
  color: #000205;
  &:hover {
    color: #36454f;
  }
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <Card title={<div>Contact Me</div>}>
        <ContentContainer>
          <Link href='mailto:kevin.nivek.choe@gmail.com'>
            <img src='./email.png' alt='email' />
            <Text>Click to send me an email.</Text>
          </Link>
          <Link href='https://www.linkedin.com/in/kevinchongwonchoe/' rel='noreferrer' target='_blank'>
            <img src='./linkedin.png' alt='LinkedIn Logo' />
            <Text>Click to see my LinkedIn.</Text>
          </Link>
          <Link href='https://github.com/nivek724' rel='noreferrer' target='_blank'>
            <img src='./github.png' alt='Github Logo' />
            <Text>Click to view my Github.</Text>
          </Link>
          <Link href='https://github.com/nivek724/nivek724.github.io' rel='noreferrer' target='_blank'>
            <img src='./code.png' alt='Coding Logo' />
            <Text>Click to view my source code.</Text>
          </Link>
        </ContentContainer>
      </Card>
      <Card title={<div>Resume</div>}>
        <PageLink vertical>
          <Text>Contact me on my LinkedIn or send me an email to get my resume.</Text>
          <Text>
            If you want to talk to me about a work opportunity or just to ask questions I'm always availble to respond
            to a message on LinkedIn.
          </Text>
          <Text>
            Thanks for checking out my portfolio. I plan to update it as I go along with new projects and new compnanies
            so please feel free to check back in the future for updates.
          </Text>
        </PageLink>
      </Card>
    </Container>
  );
};

export default Contact;
