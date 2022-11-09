import React from 'react';

// Translation
import i18n from 'utils/i18n';
import { useTranslation } from 'react-i18next';

// Icons
import { ReactComponent as Letter } from 'assets/icons/letter.svg';
import { ReactComponent as Globe } from 'assets/icons/globe.svg';
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
            <Span>{t('home.footer.subscribe')}</Span>
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
            <Globe />
            <Btn type="button" onClick={() => changeLanguage('en')}>{t('home.footer.lang1')}</Btn>
          </BlockWrap>
          <BlockWrap>
            <Btn borderLeft type="button" onClick={() => changeLanguage('ua')}>{t('home.footer.lang2')}</Btn>
          </BlockWrap>
        </LangWrap>
      </ContentWrap>
      <ContentWrap flexDirection>
        <SpanWrap>
          <Span>{t('home.footer.li1')}</Span>
          <Span>{t('home.footer.li2')}</Span>
          <Span>{t('home.footer.li3')}</Span>
          <Span>{t('home.footer.li4')}</Span>
        </SpanWrap>
        <div>
          <Span>{t('home.footer.rights')}</Span>
        </div>
      </ContentWrap>
    </FooterStyle>
  );
};

export default Footer;
