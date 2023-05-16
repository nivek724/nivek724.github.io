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

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Card title={"I'm Kevin Choe"}>
        <PageLink link={'/contact'} vertical>
          <Text>
            Hey, firstly thanks for checking out my about page. I am a software engineer mainly specializing in Web
            Development; however, I learned about different subjects over the multiple years I've spent coding. I
            graduated from UCI with a computer science degree specializing in Operating Systems and Principles but
            worked in a startup doing React Full stack development. I was primarily working on Frontend but learned
            about principles in the backend and did multiple tasks for setting up the backend using MangoDB and setting
            up routes with response codes. Since I was primarily working on the Frontend I gained a lot of experience
            with React learning different libraries and frameworks such as Redux, React Router, and Material UI. I also
            learned about different testing frameworks such as Jest and Enzyme. I've done all parts of the process from
            helping design the UI and translating that into code for the production environment to then hosting the
            website on sites like fleek or netlify. Working both for Web2 and Web3 has given me a very broad view of Web
            Development and also challenged me to use math, statistics and other principles I learned prior to my
            career.
          </Text>
          <Text>
            I am currently looking for a job opportunity to further my career and learn more about the industry.
            Challenges with coding and working with new people is always exciting for me and I look forward to it. I
            hope to hear from you soon and be sure to check out my contact page for ways to get in touch.
          </Text>
        </PageLink>
      </Card>
      <Card title={'My Projects'}>
        <PageLink link={'/projects'} vertical>
          <Text>
            I've worked for two companies so far both being startups. One is called Emerging Markets and works to
            provide businesses with webpages to get into the tech space. The other is called Paladin which is a crypto
            startup that works with ethereum in the vote incentive market curve.fi ecosystem
          </Text>
          <Text>
            Check out my projects page to see some of the stuff I've worked on in more detail. Some of my work hasn't
            been released yet but I will keep it updated once it is.
          </Text>
        </PageLink>
      </Card>
    </Container>
  );
};

export default About;
