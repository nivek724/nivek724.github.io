import styled from 'styled-components';

export const Container = styled.div`
  padding: .5rem 2rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;
`;

export const LinkBox = styled.a`
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