import React from 'react';

// Translate
import { useTranslation } from 'react-i18next';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Button from 'components/common/Button';

// Styles
import {
  Wrap,
  ContentWrap,
  ImageWrap,
  InfoWrap,
} from './styled';

const Owners = () => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <Header backgroundColor="#191919" />
      <ContentWrap>
        <ImageWrap>
          <h1>{t('owners.title')}</h1>
        </ImageWrap>
        <InfoWrap>
          <h2>{t('owners.info.title')}</h2>
          <p>{t('owners.info.description')}</p>
          <Button size="large" color="black" to="/">{t('owners.info.buttonName')}</Button>
        </InfoWrap>
      </ContentWrap>
      <Footer />
    </Wrap>
  );
};
export default Owners;
