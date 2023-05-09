import React from 'react';
import * as Styles from './styles';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <Styles.Card>{children}</Styles.Card>;
};

export default Card;
