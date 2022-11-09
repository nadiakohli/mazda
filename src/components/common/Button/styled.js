import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Black = css`
  color: ${({ theme: { colors: { white } } }) => white};
  border: 2px solid ${({ theme: { colors: { black } } }) => black};
  background-color: ${({ theme: { colors: { black } } }) => black};

  &:hover {
    color: ${({ theme: { colors: { black } } }) => black};
    border: 2px solid ${({ theme: { colors: { black } } }) => black};
    background-color: transparent;
  }
`;

const White = css`
  color: ${({ theme: { colors: { black } } }) => black};
  border: 2px solid ${({ theme: { colors: { white } } }) => white};
  background-color: ${({ theme: { colors: { white } } }) => white};

  &:hover {
    background-color: transparent;
    color: ${({ theme: { colors: { white } } }) => white};
  }
`;

export const ButtonStyle = styled(Link)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 150px;
  height: 40px;
  margin: 25px 0;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 3px;
  text-transform: uppercase;
  color: ${({ theme: { colors: { black } } }) => black};
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  border: 2px solid ${({ theme: { colors: { white } } }) => white};
  background-color: ${({ theme: { colors: { white } } }) => white};

  && {
    ${({ color }) => {
    switch (color) {
      case 'black':
        return Black;
      case 'white':
      default:
        return White;
    }
  }}
  }

  && {
    ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 250px;
          height: 50px;
        `;
      case 'normal':
      default:
        return css`
        width: 150px;
        height: 40px;
      `;
    }
  }}
  }

  &:hover {
    background-color: transparent;
    color: ${({ theme: { colors: { white } } }) => white};
  }
`;
