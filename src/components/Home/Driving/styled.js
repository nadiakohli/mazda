import styled from 'styled-components';

// Images
import mazdaDriving from 'assets/images/mazdaDriving.jpg';

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url(${mazdaDriving});
  height: 100vh;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  padding: 0 135px;

  @media screen and (max-width: 950px) {
    padding: 0 75px;
    background-position: 65%;
  }

  @media screen and (max-width: 768px) {
    padding: 0 50px;
    background-position: 25%;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    padding: 0 25px;
    background-position: 30%;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin-bottom: 35px;

  @media screen and (max-width: 950px) {
    width: 65%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    justify-content: flex-end;
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
    font-size: 14px;
    font-weight: 400;

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }

    @media screen and (max-width: 768px) {
      width: 95%;
    }

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;
