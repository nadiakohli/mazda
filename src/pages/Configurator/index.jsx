import React from 'react';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import ModelSettings from 'components/ModelSettings';

// Styles
import {
  Wrap,
  ContentWrap,
  TitleWrap,
} from './styled';

const Configurator = () => (
  <Wrap>
    <Header backgroundColor="#191919" padding />
    <ContentWrap>
      <TitleWrap>
        <h1>Configuration settings</h1>
      </TitleWrap>
      <ModelSettings />
    </ContentWrap>
    <Footer />
  </Wrap>
);

export default Configurator;
