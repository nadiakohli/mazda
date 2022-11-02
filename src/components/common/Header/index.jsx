/* eslint-disable react/prop-types */
import React from 'react';

// Images
import logo from 'assets/images/logo.png';

// Icons
import { ReactComponent as Location } from 'assets/icons/location.svg';

// Styles
import { HeaderWrap, Logo, NavLink } from './styled';

const Header = ({ backgroundColor }) => (
  <HeaderWrap backgroundColor={backgroundColor}>
    <Logo src={logo} alt="logo" />
    <nav>
      <ul>
        <li>
          <NavLink to="/models">Models</NavLink>
        </li>
        <li>
          <NavLink to="/">Shooping Tools</NavLink>
        </li>
        <li>
          <NavLink to="/">Why mazda</NavLink>
        </li>
        <li>
          <NavLink to="/">Owners</NavLink>
        </li>
        <li>
          <NavLink to="/">Find a dealer</NavLink>
        </li>
        <li>
          <NavLink to="/">
            <Location />
          </NavLink>
        </li>
      </ul>
    </nav>
  </HeaderWrap>
);

export default Header;
