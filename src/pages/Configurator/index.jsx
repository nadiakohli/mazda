import React from 'react';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import ModelSettings from 'components/ModelSettings';

// Translate
import { useTranslation } from 'react-i18next';

// Styles
import {
  Wrap,
  ContentWrap,
  TitleWrap,
} from './styled';

const Configurator = () => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <Header backgroundColor="#191919" />
      <ContentWrap>
        <TitleWrap>
          <h1>{t('configurator.title')}</h1>
        </TitleWrap>
        <ModelSettings />
      </ContentWrap>
      <Footer />
    </Wrap>
  );
};

export default Configurator;
