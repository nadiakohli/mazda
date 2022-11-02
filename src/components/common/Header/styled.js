import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;

  & svg {
    height: 22px;
    width: 12px;

    & path {
      fill: #d5dadf;
      &:hover {
        fill: ${({ theme: { colors: { white } } }) => white};
      }
    }
  }

  & nav {
    width: 70%;
  }

  & ul {
    display: flex;
    justify-content: space-around;
  }

  & ul li {
    list-style: none;
  }
`;

export const Logo = styled.img`
  height: 45px;
  width: 55px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  opacity: 0.8;

  &:hover {
    color: ${({ theme: { colors: { white } } }) => white};
    opacity: 1;
  }
`;
