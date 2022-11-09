import styled from 'styled-components';

// Images
import bg from 'assets/images/bg.jpg';
import mazdaSalon from 'assets/images/mazdaSalon.jpg';

export const Wrap = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0 135px;

  @media screen and (max-width: 1600px) {
    background-position: 65%;
  }

  @media screen and (max-width: 1100px) {
    padding: 0 75px;
    background-position: 70%;
  }

  @media screen and (max-width: 950px) {
    background-position: 65%;
  }

  @media screen and (max-width: 768px) {
    background-position: 30%;
    padding: 0 50px;
  }

  @media screen and (max-width: 480px) {
    background-position: 27%;
    padding: 0 25px;
  }

  & span {
    font-size: 48px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme: { colors: { monsoon } } }) => monsoon};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

    @media screen and (max-width: 768px) {
      font-size: 38px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

export const AboutModelWrap = styled.div`
  background-image: url(${mazdaSalon});
  height: 100vh;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0 135px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    padding: 0 75px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 50px;
    background-position: 55%;
  }

`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

export const ModelContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-left: 100px;

  @media screen and (max-width: 950px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  & h2, span, p {
    color: ${({ theme: { colors: { monsoon } } }) => monsoon};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h2, span {
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
  }

  & h2 {
    font-size: 36px;

    @media screen and (max-width: 950px) {
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      font-size: 21px;
    }
  }

  & span {
    font-size: 24px;

    @media screen and (max-width: 950px) {
      font-size: 21px;
    }

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }

  & p {
    line-height: 1.7;
    width: 80%;
    font-size: 14px;
    font-weight: 400;

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }

    @media screen and (max-width: 768px) {
      width: 85%;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  opacity: 0.9;
  text-transform: uppercase;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
