import React from 'react';

// Translation
import i18n from 'utils/i18n';
import { useTranslation } from 'react-i18next';

// Icons
import { ReactComponent as Letter } from 'assets/icons/letter.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as GooglePlus } from 'assets/icons/googlePlus.svg';
import { ReactComponent as YouTube } from 'assets/icons/youtube.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Pinterest } from 'assets/icons/pinterest.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';

// Styles
import {
  FooterStyle,
  ContentWrap,
  BlocksWrap,
  BlockWrap,
  Span,
  SpanWrap,
  LangWrap,
  Btn,
} from './styled';

const Footer = () => {
  const { t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <FooterStyle>
      <ContentWrap>
        <BlocksWrap>
          <BlockWrap>
            <Letter />
            <Span>{t('footer.subscribe')}</Span>
          </BlockWrap>
          <div>
            <Facebook />
            <GooglePlus />
            <YouTube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </BlocksWrap>
        <LangWrap>
          <BlockWrap>
            <Btn
              type="button"
              onClick={() => changeLanguage('en')}
              className={`${i18n.language === 'en' ? 'active' : ''}`}
            >
              {t('footer.lngEn')}
            </Btn>
          </BlockWrap>
          <BlockWrap>
            <Btn
              borderLeft
              type="button"
              onClick={() => changeLanguage('ua')}
              className={`${i18n.language === 'ua' ? 'active' : ''}`}
            >
              {t('footer.lngUa')}
            </Btn>
          </BlockWrap>
        </LangWrap>
      </ContentWrap>
      <ContentWrap flexDirection>
        <SpanWrap>
          <Span>{t('footer.li1')}</Span>
          <Span>{t('footer.li2')}</Span>
          <Span>{t('footer.li3')}</Span>
          <Span>{t('footer.li4')}</Span>
        </SpanWrap>
        <div>
          <Span>{t('footer.rights')}</Span>
        </div>
      </ContentWrap>
    </FooterStyle>
  );
};

export default Footer;
