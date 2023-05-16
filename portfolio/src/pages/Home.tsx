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

const Home: React.FC = () => {
  return (
    <Container>
      <Card title={'Welcome'}>
        <PageLink link={'/Contact'} vertical>
          <Text>Hello, this is my portfolio that holds some of the small side projects I've worked on.</Text>
          <Text>
            My projects are mainly for me to experiment with new frameworks or libraries to get a grasp of their
            functionality.
          </Text>
          <Text>Click on this card to see my contact page if you want to get in touch with me.</Text>
          <Text>
            Thanks for taking the time to check out some of the projects I've worked on, I hope you have a great day!
            Small note that this page is still under construction so mobile support is not fully implemented yet. Please
            view in desktop mode thank you.
          </Text>
        </PageLink>
      </Card>

      <Card title={'Projects'}>
        <PageLink link={'/Projects'} vertical>
          <Text>Click on this card to see some of the projects I've worked on.</Text>
          <Text>
            This list will also include both some pages I worked on for different past jobs and my personal projects.
          </Text>
        </PageLink>
      </Card>

      <Card title={'About'}>
        <PageLink link={'/About'} vertical>
          <Text>Click on this card to see a small personal message about myself.</Text>
          <Text>
            TLDR: I'm a SOFTWARE ENGINEER who specialized in COMPUTER SYSTEMS but work mainly in web development as a
            FULL STACK or FRONTEND ENGINEER. I have a passion for experimenting with new frameworks and technologies and
            always looking towards the next endeavor. I do some cool hobbies like Tricking (basically gymnastics
            taekwondo hybrid) and creating music. After graduating from UCI with a Computer Science degree I have
            strived to learn about frontend practices and dabbled in backend on some projects. I would love to hear from
            anybody interested in something I've mentioned on this page or for work opportunites please see my contact
            page for information.
          </Text>
        </PageLink>
      </Card>
    </Container>
  );
};

export default Home;
