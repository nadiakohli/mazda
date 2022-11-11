import styled from 'styled-components';

// Images
import owners from 'assets/images/bgOwners.jpg';

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
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
    
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }

    @media screen and (max-width: 480px) {
      font-size: 26px;
      text-align: center;
    }

    @media screen and (max-width: 320px) {
      font-size: 21px;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 320px) {
    align-items: center;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 500px;
  width: 65%;

  
  @media screen and (max-width: 480px) {
    width: 75%;
  }

  & h2 {
    height: 65px;
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 480px) {
      font-size: 21px;
    }
  }

  & p {
    line-height: 1.7;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;
