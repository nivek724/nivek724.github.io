import React from 'react';
import * as Styles from './styles';
import Link from 'Components/Link';

const NavBar: React.FC = () => {
  const links = [
    {
      src: '/',
      text: 'Home',
    },
    {
      src: '/Projects',
      text: 'Projects',
    },
    {
      src: '/Contact',
      text: 'Contact',
    },
    {
      src: '/About',
      text: 'About Me',
    },
  ];

  return (
    <Styles.Nav>
      <Styles.TitleDiv>
        <Styles.Header>Kevin's</Styles.Header>
        <Styles.SubHeader>Project Portfolio</Styles.SubHeader>
      </Styles.TitleDiv>
      <Styles.NavLinks>
        {links.map((link, index) => (
          <Link src={link.src} text={link.text} key={index} />
        ))}
      </Styles.NavLinks>
    </Styles.Nav>
  );
};

export default NavBar;
