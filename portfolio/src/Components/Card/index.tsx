import React from 'react';
import * as Styles from './styles';

interface CardProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (<Styles.Card>
    {title}
    <Styles.CardContent>
      {children}
    </Styles.CardContent>
    
  </Styles.Card>);
};

export default Card;
