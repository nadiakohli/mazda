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

const Header = ({ backgroundColor, padding }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrap backgroundColor={backgroundColor} padding={padding}>
      <LogoBtn onClick={() => navigate('/', { replace: true })}>
        <Image src={logo} alt="logo" />
      </LogoBtn>
      <nav>
        <ul>
          <li>
            <NavLink to="/models">Models</NavLink>
          </li>
          <li>
            <NavLink to="/owners">Owners</NavLink>
          </li>
          <li>
            <NavLink to="/">Why mazda</NavLink>
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
  padding: PropTypes.bool,
};

Header.defaultProps = {
  backgroundColor: '',
  padding: false,
};

export default Header;
