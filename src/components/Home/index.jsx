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
  const test = t('home.part3', { returnObjects: true });
  const ref = useRef(null);
  const executeScroll = () => ref.current.scrollIntoView();

  return (
    <>
      <Wrap>
        <Header padding />
        <ContentWrap>
          <Title>{t('home.part2.subtitle')}</Title>
          <span>{t('home.part2.title')}</span>
          <Button onClick={executeScroll} color="white">{t('home.part2.buttonName')}</Button>
        </ContentWrap>
      </Wrap>
      <CardWrap>
        {cars.length
          ? cars.map((item, i) => (
            <Card
              borderRight
              key={item.id}
              link={item.image}
              title={t(`home.part3.card${i + 1}.title`)}
              description={t(`home.part3.card${i + 1}.description`)}
            />
          ))
          : null}
      </CardWrap>
      <AboutModelWrap ref={ref}>
        <ModelContentWrap>
          <h2>{t('home.part4.title')}</h2>
          <span>{t('home.part4.subtitle')}</span>
          <p>{t('home.part4.description')}</p>
        </ModelContentWrap>
      </AboutModelWrap>
      <Driving />
    </>
  );
};

export default Home;
