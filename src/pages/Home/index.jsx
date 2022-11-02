import React from 'react';

import { cars } from 'config/config';

// Components
import Main from 'components/Home/Main';
import AboutModel from 'components/Home/AboutModel';
import Footer from 'components/common/Footer';
import Card from 'components/common/Card';
import Driving from 'components/Home/Driving';

// Styles
import { CardWrap } from './styled';

const Home = () => (
  <>
    <Main />
    <CardWrap>
      {cars.length
        ? cars.map((item) => (
          <Card
            borderRight
            key={item.id}
            link={item.image}
            title={item.title}
            description={item.description}
          />
        ))
        : null}
    </CardWrap>
    <AboutModel />
    <Driving />
    <Footer />
  </>
);

export default Home;
