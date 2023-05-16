import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
  padding: .5rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  display: flex;
  gap: 1rem;
  color: inherit;
  &:hover {
    color: #36454f; 
  }
`;