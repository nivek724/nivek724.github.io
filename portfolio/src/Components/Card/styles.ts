import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 80%;
  gap: .25rem;
  box-shadow: 0 10px 20px rgba(54, 69, 79, 0.15), 0 6px 6px rgba(54, 69, 79, 0.2);
  border-radius: 10px;
  background-color: #36454f;
  padding: .25rem 0 0 0;
  color: #fff;
  font-size: 24px;
  text-align: center;
  @media(max-width: 600px) {
    font-size: 18px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-height: 72px;
  border-radius: 0 0 10px 10px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: .25rem 0;
  background-color: #FFFDFA;
  color: #000205;
`;