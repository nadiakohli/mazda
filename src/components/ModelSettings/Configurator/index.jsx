import React from 'react';
import PropTypes from 'prop-types';

import { carColors, salonTypes, wheelTypes } from 'config/config';

// Components
import Square from 'components/common/Square';

// Styles
import { Wrap, BlockWrap, ContentWrap } from './styled';

const Configurator = ({ data }) => (
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
    <BlockWrap borderTop>
      <h3>
        Total price:
        {' '}
        {data.price}
        {' '}
        $
      </h3>
    </BlockWrap>
  </Wrap>
);

Configurator.propTypes = {
  data: {
    price: PropTypes.number.isRequired,
  }.isRequired,
};

export default Configurator;
