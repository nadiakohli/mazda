import styled from 'styled-components';

// Images
import owners from 'assets/images/bgOwners.jpg';

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
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${owners});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 400px;

  & h1 {
    margin-top: 75px;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 400;
    color: ${({ theme: { colors: { white } } }) => white};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 500px;
  width: 65%;

  & h2 {
    height: 65px;
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & p {
    line-height: 1.7;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }
`;
