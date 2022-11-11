import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// import i18n from 'utils/i18n';
import { useTranslation } from 'react-i18next';

// Images
import logo from 'assets/images/logo.png';

// Styles
import {
  HeaderWrap,
  Image,
  NavLink,
  LogoBtn,
  LangBtn,
} from './styled';

const Header = ({ backgroundColor, padding }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrap backgroundColor={backgroundColor} padding={padding}>
      <LogoBtn onClick={() => navigate('/', { replace: true })}>
        <Image src={logo} alt="logo" />
      </LogoBtn>
      <nav>
        <ul>
          <li>
            <NavLink to="/models">{t('header.menu.li1')}</NavLink>
          </li>
          <li>
            <NavLink to="/owners">{t('header.menu.li2')}</NavLink>
          </li>
          <li>
            <NavLink to="/">{t('header.menu.li3')}</NavLink>
          </li>
          <li>
            <LangBtn
              className={`${i18n.language === 'en' ? 'active' : ''}`}
              type="button"
              onClick={() => changeLanguage('en')}
            >
              {t('header.menu.li4')}
            </LangBtn>
            <LangBtn
              className={`${i18n.language === 'ua' ? 'active' : ''}`}
              borderLeft
              type="button"
              onClick={() => changeLanguage('ua')}
            >
              {t('header.menu.li5')}
            </LangBtn>
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
