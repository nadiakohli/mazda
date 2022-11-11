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
        <h2>{t('home.drivingMatters.title')}</h2>
        <span>{t('home.drivingMatters.subtitle')}</span>
        <p>{t('home.drivingMatters.description')}</p>
      </ContentWrap>
    </Wrap>
  );
};

export default Driving;
