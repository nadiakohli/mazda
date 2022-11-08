import React, { useRef } from 'react';

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
  const ref = useRef(null);
  const executeScroll = () => ref.current.scrollIntoView();

  return (
    <>
      <Wrap>
        <Header />
        <ContentWrap>
          <Title>Introducing the mazda 3</Title>
          <span>The driver&apos;s suv</span>
          <Button onClick={executeScroll} color="white">Explore</Button>
        </ContentWrap>
      </Wrap>
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
      <AboutModelWrap ref={ref}>
        <ModelContentWrap>
          <h2>Car and Driver</h2>
          <span>The Mazda 3</span>
          <p>
            Filled with ambitions, the brand&apos;s compact car is offered as a sedan or hatchback
            with a variety of options for those interested in sophisticated design and engaging
            driving dynamics. With three engine options, two drivetrains, and many more package
            options, owners can discover the Mazda3 that best fits with their driving preference.
          </p>
        </ModelContentWrap>
      </AboutModelWrap>
      <Driving />
    </>
  );
};

export default Home;
