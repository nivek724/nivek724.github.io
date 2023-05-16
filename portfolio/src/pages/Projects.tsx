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
  width: 100%;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
  color: #000205;
  width: 90%;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
  color: #000205;
  width: 60%;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 1rem;
`;

const Projects: React.FC = () => {
  return (
    <Container>
      <Card title={<div>My Projects</div>}>
        <PageLink vertical>
          <Text>
            Currently there are projects from both college and my previous work experience on here. I will be adding
            more projects as I start to progress more into different libraries and frameworks. Take a look at some of
            the deployed pages from my past jobs as well as some of my undeployed projects that I'm hosting using github
            pages.
          </Text>
        </PageLink>
      </Card>
      <Card title={<div>Paladin Finance</div>}>
        <PageLink vertical>
          <Link href='https://github.com/PaladinFinance' rel='norefferer' target='_blank'>
            <Text>
              Paladin is a web 3 company where I built some of their main traffic pages. I worked with a team of 6 other
              developers on multiple projects that are still currently in development. As a startup the company moved
              fast and I would work on new repos every few months as the company pivoted. Some of the currently released
              sites are below but this card is a link to their github that releases projects once they are public.
            </Text>
          </Link>
        </PageLink>
      </Card>
      <Card title={<div>Keep.Paladin.vote</div>}>
        <PageLink vertical>
          <ContentContainer>
            <Link href='https://keep.paladin.vote/' rel='norefferer' target='_blank'>
              <img
                src='./paladin.keep.jpg'
                alt='Paladin Media'
                style={{ maxHeight: '300px', width: '90%', maxWidth: 'fit-content' }}
              />
              <Description>
                Paladin Keep is a project I developed the majority of the code on. This page is designed for
                distribution of news like articles that would normally be hosted on medium. Most of the pages were done
                by myself although some of it and most of the backend was assisted by a senior developer.
              </Description>
            </Link>
          </ContentContainer>
        </PageLink>
      </Card>
      <Card title={<div>Paladin.vote</div>}>
        <PageLink vertical>
          <ContentContainer>
            <Link href='https://www.Paladin.vote' rel='norefferer' target='_blank'>
              <img
                src='./paladin.jpg'
                alt='Paladin Main Page'
                style={{ maxHeight: '300px', width: '90%', maxWidth: 'fit-content' }}
              />
              <Description>
                Paladin.vote is the main page for the company. I helped maintain the site by updating with current
                information and adding some new pages to the site such as the about us page.
              </Description>
            </Link>
          </ContentContainer>
        </PageLink>
      </Card>
      <Card title={<div>App.Paladin.Vote</div>}>
        <PageLink vertical>
          <ContentContainer>
            <Link href='https://app.paladin.vote/#/' rel='norefferer' target='_blank'>
              <img
                src='./paladin.app.jpg'
                alt='Paladin App'
                style={{ maxHeight: '300px', width: '90%', maxWidth: 'fit-content' }}
              />
              <Description>
                This is the one of the projects that I helped maintain and add features for. I worked on updating bugs
                that were found for users and adding new features for a better user experience.
              </Description>
            </Link>
          </ContentContainer>
        </PageLink>
      </Card>
      <Card title={<div>Emerging Markets</div>}>
        <ContentContainer>
          <Link href={'https://www.alexvargas.org/'} rel='norefferer' target='_blank'>
            <Text>
              Emerging Markets is a startup that I worked for during my time at college. I worked on the front end of a
              couple of small static website projects. I also worked on a app that is currently under development that
              will be releasing in the future. This card has a link to one of the public sites I helped develop by
              creating features like the endorsements and footer.
            </Text>
          </Link>
        </ContentContainer>
      </Card>
      <Card title={<div>Personal Project: Paladin Test App</div>}>
        <ContentContainer>
          <Link href={'https://nivek724.github.io/paladin-app/'} rel='norefferer' target='_blank'>
            <img
              src='./pal.test.app.jpg'
              alt='Paladin Test App'
              style={{ maxHeight: '300px', width: '90%', maxWidth: 'fit-content' }}
            />
            <Description>
              This is a test site I created to try out Web 3 libraries that allowed connecting crypto wallets on a test
              network and making deposits or withdrawals. It is very bare functionality but purely made for testing out
              some basic web 3 functionality.
            </Description>
          </Link>
        </ContentContainer>
      </Card>
    </Container>
  );
};

export default Projects;
