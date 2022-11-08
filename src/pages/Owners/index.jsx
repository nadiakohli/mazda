import React from 'react';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Button from 'components/common/Button';

// Styles
import {
  Wrap,
  ContentWrap,
  ImageWrap,
  InfoWrap,
} from './styled';

const Owners = () => (
  <Wrap>
    <Header backgroundColor="#191919" />
    <ContentWrap>
      <ImageWrap>
        <h1>To the Mazda&apos;s owners</h1>
      </ImageWrap>
      <InfoWrap>
        <h2>You are in good hands</h2>
        <p>
          Feel the unity with your Mazda. Our experienced engineers and highly qualified service specialists
          will provide high-quality service for your vehicle, so that your Mazda is maximally protected and
          always shows the best performance indicators.
        </p>
        <Button size="large" color="black" to="/">Learn about the benefits</Button>
      </InfoWrap>
    </ContentWrap>
    <Footer />
  </Wrap>
);

export default Owners;
