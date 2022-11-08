import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  width: 38%;
  height: 560px;
`;

export const ImageWrap = styled.div`
  height: 325px;

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

  & h2, span {
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h2 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;
  }

  & span {
    margin-top: 10px;
    width: 75%;
    font-size: 14px;
    font-weight: 700;
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
        `;
    }
  }}
  }
`;
