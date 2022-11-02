import React from 'react';

// Components
import Header from 'components/common/Header';
import Button from 'components/common/Button';

// Styles
import { Wrap, ContentWrap, Title } from './styled';

const Main = () => (
  <Wrap>
    <Header />
    <ContentWrap>
      <Title>Introducing the mazda 3</Title>
      <span>The driver&apos;s suv</span>
      <Button>Explore</Button>
    </ContentWrap>
  </Wrap>
);

export default Main;
