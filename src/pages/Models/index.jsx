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
            ? carsModel.map((item, i) => (
              <AnotherCard
                to={item.id}
                key={item.id}
                link={item.image[0]}
                title={t(`models.model${i + 1}.title`)}
                fuel={t(`models.model${i + 1}.fuel`)}
                color={t(`models.model${i + 1}.color`)}
                salon={t(`models.model${i + 1}.salon`)}
                engine={t(`models.model${i + 1}.engine`)}
                wheel={t(`models.model${i + 1}.wheel`)}
                price={t(`models.model${i + 1}.price`)}
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
