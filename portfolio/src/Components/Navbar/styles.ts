import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #36454f;
  color: #fff;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  @media(max-width: 600px) {
    padding: 1.5rem .5rem;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Header = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  @media(max-width: 600px) {
    font-size: 18px;
  }
`;

export const SubHeader = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  @media(max-width: 600px) {
    font-size: 12px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
