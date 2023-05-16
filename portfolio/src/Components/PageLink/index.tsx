import React from 'react';
import * as Styles from './styles';

interface PageLinkProps {
  children: React.ReactNode;
  link?: string;
  vertical?: boolean;
}

const PageLink: React.FC<PageLinkProps> = ({ link, children, vertical }) => {
  return link ? (
    <Styles.Container>
      <Styles.LinkBox href={link} style={{ flexDirection: vertical ? 'column' : 'row' }}>
        {children}
      </Styles.LinkBox>
    </Styles.Container>
  ) : (
    <Styles.Container style={{ flexDirection: vertical ? 'column' : 'row' }}>{children}</Styles.Container>
  );
};

export default PageLink;
