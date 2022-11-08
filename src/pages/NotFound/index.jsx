import React from 'react';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Button from 'components/common/Button';

// Styles
import {
  Wrap,
  ContentWrap,
  InfoWrap,
  ImageWrap,
} from './styled';

const NotFound = () => (
  <Wrap>
    <Header backgroundColor="#191919" padding />
    <ContentWrap>
      <ImageWrap>
        <h1>Error 404</h1>
      </ImageWrap>
      <InfoWrap>
        <h2>Page not found</h2>
        <p>Sorry, the page you want to open doesn&apos;t seem to exist.</p>
        <Button color="black" to="/">Home page</Button>
      </InfoWrap>
    </ContentWrap>
    <Footer />
  </Wrap>
);

export default NotFound;
