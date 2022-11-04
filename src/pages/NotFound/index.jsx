import React from 'react';

// Images
import notFoundImg from 'assets/images/NotFound404.jpg';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Button from 'components/common/Button';

// Styles
import { Wrap, ContentWrap, InfoWrap } from './styled';

const NotFound = () => (
  <Wrap>
    <Header backgroundColor="#191919" />
    <ContentWrap>
      <img src={notFoundImg} alt="not found" />
      <InfoWrap>
        <h1>Page not found</h1>
        <p>Sorry, the page you want to open doesn&apos;t seem to exist.</p>
        <Button color="black" to="/">Home page</Button>
      </InfoWrap>
    </ContentWrap>
    <Footer />
  </Wrap>
);

export default NotFound;
