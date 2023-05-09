import React from 'react';
import * as Styles from './styles';

interface LinkProps {
  src: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ src, text }) => {
  return (
    <Styles.MyLink href={src} target='_self'>
      {text}
    </Styles.MyLink>
  );
};

export default Link;
