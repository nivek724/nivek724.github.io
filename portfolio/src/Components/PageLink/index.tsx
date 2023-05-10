import React from 'react';
import * as Styles from './styles';

interface PageLinkProps {
  children: React.ReactNode;
  link?: string;
  vertical?: boolean;
}

const PageLink: React.FC<PageLinkProps> = ({ link, children, vertical }) => {
  return (
    <Styles.Container>
      <Styles.LinkBox href={link ? link : '/'} style={{ flexDirection: vertical ? 'column' : 'row' }}>
        {children}
      </Styles.LinkBox>
    </Styles.Container>
  );
};

export default PageLink;
