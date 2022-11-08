import React from 'react';

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
} from './styled';

const Footer = () => (
  <FooterStyle>
    <ContentWrap>
      <BlocksWrap>
        <BlockWrap>
          <Letter />
          <Span>subscribe to updates</Span>
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
      <BlockWrap>
        <Globe />
        <Span>English</Span>
      </BlockWrap>
    </ContentWrap>
    <ContentWrap flexDirection>
      <SpanWrap>
        <Span>Terms & Conditions</Span>
        <Span>Privacy Policy</Span>
        <Span>Tell us what you think</Span>
        <Span>Ad choices</Span>
      </SpanWrap>
      <div>
        <Span>© 2015 Mazda North American operations. All rights reserved.</Span>
      </div>
    </ContentWrap>
  </FooterStyle>
);

export default Footer;
