import React from 'react';

import { carColors, salonTypes, wheelTypes } from 'config/config';

// Components
import Square from 'components/common/Square';

// Styles
import { Wrap, BlockWrap, ContentWrap } from './styled';

const Configurator = () => (
  <Wrap>
    <BlockWrap>
      <h3>Color</h3>
      <ContentWrap>
        {carColors.length
          ? carColors.map((item) => (
            <Square key={item.id}>
              <img src={item.image} alt="car color" />
            </Square>
          ))
          : null}
      </ContentWrap>
    </BlockWrap>
    <BlockWrap>
      <h3>Salon</h3>
      <ContentWrap>
        {salonTypes.length
          ? salonTypes.map((item) => (
            <Square key={item.id}>
              <img src={item.image} alt="salon type" />
            </Square>
          ))
          : null}
      </ContentWrap>
    </BlockWrap>
    <BlockWrap>
      <h3>Alloy wheels</h3>
      <ContentWrap>
        {wheelTypes.length
          ? wheelTypes.map((item) => (
            <Square key={item.id}>
              <img src={item.image} alt="wheel type" />
            </Square>
          ))
          : null}
      </ContentWrap>
    </BlockWrap>
  </Wrap>
);

export default Configurator;
