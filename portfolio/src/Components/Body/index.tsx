import React from 'react';
import * as Styles from './styles';

interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <Styles.Main>{children}</Styles.Main>;
};

export default Body;
