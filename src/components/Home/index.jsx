import React, { useRef } from 'react';

// Translate
import { useTranslation } from 'react-i18next';

import { cars } from 'config/config';

// Components
import Header from 'components/common/Header';
import Button from 'components/common/Button';
import Driving from 'components/Home/Driving';
import Card from 'components/common/Card';

// Styles
import {
  Wrap,
  ContentWrap,
  Title,
  CardWrap,
  AboutModelWrap,
  ModelContentWrap,
} from './styled';

const Home = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const executeScroll = () => ref.current.scrollIntoView();

  return (
    <>
      <Wrap>
        <Header padding />
        <ContentWrap>
          <Title>{t('home.description.subtitle')}</Title>
          <span>{t('home.description.title')}</span>
          <Button onClick={executeScroll} color="white">{t('home.description.buttonName')}</Button>
        </ContentWrap>
      </Wrap>
      <CardWrap>
        {cars.length
          ? cars.map((item, i) => (
            <Card
              borderRight
              key={item.id}
              link={item.image}
              title={t(`home.cards.card${i + 1}.title`)}
              description={t(`home.cards.card${i + 1}.description`)}
            />
          ))
          : null}
      </CardWrap>
      <AboutModelWrap ref={ref}>
        <ModelContentWrap>
          <h2>{t('home.aboutModel.title')}</h2>
          <span>{t('home.aboutModel.subtitle')}</span>
          <p>{t('home.aboutModel.description')}</p>
        </ModelContentWrap>
      </AboutModelWrap>
      <Driving />
    </>
  );
};

export default Home;
