import styled from 'styled-components';

// Images
import notFoundImg from 'assets/images/NotFound404.jpg';

export const Wrap = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${notFoundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;

  & h1 {
    height: 85px;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 400;
    color: ${({ theme: { colors: { white } } }) => white};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

    @media screen and (max-width: 1100px) {
      font-size: 36px;
    }

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }

    @media screen and (max-width: 480px) {
      font-size: 28px;
      height: 65px;
    }
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;

  & h2 {
    height: 75px;
    text-transform: uppercase;
    font-size: 38px;
    font-weight: 600;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

    @media screen and (max-width: 1100px) {
      font-size: 32px;
      height: 65px;
    }
    
    @media screen and (max-width: 768px) {
      font-size: 24px;
      height: 50px;
    }

    @media screen and (max-width: 480px) {
      font-size: 21px;
      height: 40px;
    }
  }

  & p {
    font-size: 21px;
    font-weight: 400;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

    @media screen and (max-width: 1100px) {
      font-size: 18px;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
      text-align: center;
      width: 85%;
    }
  }
`;
