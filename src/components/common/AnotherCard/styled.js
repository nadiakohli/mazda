import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  width: 38%;

  @media screen and (max-width: 1100px) {
    width: 45%;
  }

  @media screen and (max-width: 950px) {
    width: 55%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const ImageWrap = styled.div`
  & img {
    width: 100%;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: ${({ borderRight }) => borderRight ? '3px solid #e3e3e3' : ''};
  margin: 20px 0;
  width: 100%;

  & h2, span, p {
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h2 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 480px) {
      font-size: 21px;
    }

    @media screen and (max-width: 320px) {
      font-size: 18px;
    }
  }

  & p {
    line-height: 1.7;
    font-size: 14px;

    @media screen and (max-width: 480px) {
      font-size: 13px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  & span {
    margin-top: 10px;
    width: 75%;
    font-size: 14px;
    font-weight: 700;

    @media screen and (max-width: 480px) {
      font-size: 13px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }
`;

export const LinkBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 175px;
  height: 50px;
  border: 2px solid ${({ theme: { colors: { mirage } } }) => mirage};
  background-color: transparent;
  color: ${({ theme: { colors: { mirage } } }) => mirage};
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 4px;
  margin-right: 50px;

  && {
    ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 80px;
          height: 35px;
          font-size: 12px;
          color: ${({ theme: { colors: { dawn } } }) => dawn};
          border: 2px solid ${({ theme: { colors: { dawn } } }) => dawn};
          margin: 10px 0;
          font-weight: 600;
        `;
      case 'medium':
      default:
        return css`
          width: 175px;
          height: 50px;
          color: ${({ theme: { colors: { mirage } } }) => mirage};
          border: 2px solid ${({ theme: { colors: { mirage } } }) => mirage};

          @media screen and (max-width: 768px) {
            width: 150px;
            height: 40px;
            font-size: 14px;
          }

          @media screen and (max-width: 768px) {
            width: 140px;
            margin-right: 15px;
          }
        `;
    }
  }}
  }
`;
