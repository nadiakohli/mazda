import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Images
import logo from 'assets/images/logo.png';

// Icons
import { ReactComponent as Location } from 'assets/icons/location.svg';

// Styles
import {
  HeaderWrap,
  Image,
  NavLink,
  LogoBtn,
} from './styled';

const Header = ({ backgroundColor }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrap backgroundColor={backgroundColor}>
      <LogoBtn onClick={() => navigate('/', { replace: true })}>
        <Image src={logo} alt="logo" />
      </LogoBtn>
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
};

Header.propTypes = {
  backgroundColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: '',
};

export default Header;
