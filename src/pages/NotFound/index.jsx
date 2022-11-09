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
  InfoWrap,
  ImageWrap,
} from './styled';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <Header backgroundColor="#191919" />
      <ContentWrap>
        <ImageWrap>
          <h1>{t('notFound.title')}</h1>
        </ImageWrap>
        <InfoWrap>
          <h2>{t('notFound.info.title')}</h2>
          <p>{t('notFound.info.description')}</p>
          <Button color="black" to="/">{t('notFound.info.buttonName')}</Button>
        </InfoWrap>
      </ContentWrap>
      <Footer />
    </Wrap>
  );
};

export default NotFound;
