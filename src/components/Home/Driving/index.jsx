import React from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// Styles
import { Wrap, ContentWrap } from './styled';

const Driving = () => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <ContentWrap>
        <h2>{t('home.part5.title')}</h2>
        <span>{t('home.part5.subtitle')}</span>
        <p>{t('home.part5.description')}</p>
      </ContentWrap>
    </Wrap>
  );
};

export default Driving;
