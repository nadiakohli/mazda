import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 700px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 50px 25px;
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  border-top: ${({ borderTop }) => borderTop ? '1px solid #D5D5D5' : ''};

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
