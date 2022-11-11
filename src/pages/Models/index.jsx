import React from 'react';

import { carsModel } from 'config/config';

// Translate
import { useTranslation } from 'react-i18next';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import AnotherCard from 'components/common/AnotherCard';

// Styles
import {
  Wrap,
  ContentWrap,
  TitleWrap,
  CardWrap,
} from './styled';

const Models = () => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <Header backgroundColor="#191919" />
      <ContentWrap>
        <TitleWrap>
          <h1>{t('models.title')}</h1>
        </TitleWrap>
        <CardWrap>
          {carsModel.length
            ? carsModel.map((item) => (
              <AnotherCard
                to={item.id}
                key={item.id}
                link={item?.image[0]}
                title={item?.title}
                fuel={t('models.fuel')}
                color={t(`models.${item.title}.color`)}
                salon={t(`models.${item.title}.salon`)}
                engine={item?.engine}
                wheel={t(`models.${item.title}.wheel`)}
                price={item?.price}
              />
            ))
            : null}
        </CardWrap>
      </ContentWrap>
      <Footer />
    </Wrap>
  );
};

export default Models;
