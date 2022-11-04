import styled from 'styled-components';

export const Wrap = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  & img {
    width: 100vw;
    height: 100%;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;

  & h1 {
    height: 75px;
    text-transform: uppercase;
    font-size: 38px;
    font-weight: 600;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & p {
    font-size: 21px;
    font-weight: 400;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }
`;
