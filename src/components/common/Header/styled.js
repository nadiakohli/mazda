import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  padding: ${({ padding }) => padding ? '0' : '0 135px'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};

  @media screen and (max-width: 1280px) {
    padding: ${({ padding }) => padding ? '0' : '0 25px'};
  }

  @media screen and (max-width: 768px) {
    height: 65px;
  }

  @media screen and (max-width: 480px) {
    padding: ${({ padding }) => padding ? '0' : '0 15px'};
  }

  & nav {
    width: 40%;

    @media screen and (max-width: 1100px) {
      width: 50%;
    }

    @media screen and (max-width: 950px) {
      width: 60%;
    }

    @media screen and (max-width: 480px) {
      width: 80%;
    }

    @media screen and (max-width: 320px) {
      width: 82%;
    }
  }

  & ul {
    display: flex;
    justify-content: space-between;
  }

  & ul li {
    list-style: none;
    display: flex;
    align-items: center;

    .active {
      text-shadow: 1px 1px 2px white;
    }
  }
`;

export const Image = styled.img`
  height: 45px;
  width: 55px;

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 50px;
  }

  @media screen and (max-width: 480px) {
    height: 30px;
    width: 40px;
  }

  @media screen and (max-width: 320px) {
    height: 27px;
    width: 35px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }

  &:hover {
    color: ${({ theme: { colors: { white } } }) => white};
    opacity: 1;
  }
`;

export const LogoBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const LangBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  opacity: 0.8;
  padding: 0 5px;
  border-left: ${({ borderLeft }) => borderLeft ? '2px solid white' : null};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }

  &:hover {
    color: ${({ theme: { colors: { white } } }) => white};
    opacity: 1;
  }

`;
