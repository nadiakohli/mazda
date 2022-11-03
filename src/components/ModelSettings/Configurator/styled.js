import styled from 'styled-components';

export const Wrap = styled.div`
  width: 35vw;
  height: 775px;
  box-shadow: 0px 30px 100px rgba(0, 0, 0, 0.35);
  padding: 50px 25px;
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30%;

  & h3 {
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-size: 36px;
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
    font-weight: 500;
  }
`;

export const ContentWrap = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-evenly;
`;
