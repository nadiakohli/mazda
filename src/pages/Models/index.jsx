import React from 'react';

import { carsModel } from 'config/config';

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

const Models = () => (
  <Wrap>
    <Header backgroundColor="#191919" />
    <ContentWrap>
      <TitleWrap>
        <h1>Our Models</h1>
      </TitleWrap>
      <CardWrap>
        {carsModel.length
          ? carsModel.map((item) => (
            <AnotherCard
              to={item.id}
              key={item.id}
              link={item.image[0]}
              title={item.title}
              fuel={item.fuel}
              color={item.color}
              salon={item.salon}
              engine={item.engine}
              wheel={item.wheel}
              price={item.price}
            />
          ))
          : null}
      </CardWrap>
    </ContentWrap>
    <Footer />
  </Wrap>
);

export default Models;
