import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const MyLink = styled(Link)`
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  margin: 0 1rem;

  &:hover {
    color: #f0f0f0;
  }
`;
