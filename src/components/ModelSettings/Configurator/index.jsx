/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import { carColors, salonTypes, wheelTypes } from 'config/config';

// Styles
import { Wrap, BlockWrap, ContentWrap } from './styled';

const Configurator = ({
  data,
  handleColorChange,
  handleSalonChange,
  handleWheelChange,
  totalPrice,
}) => (
  <Wrap>
    <BlockWrap>
      <h3>Color</h3>
      <ContentWrap>
        {carColors.length
          ? carColors.map((item, id) => (
            <div
              key={item.id}
              className={`${data?.color === item.colorName ? 'active' : ''}`}
              onClick={() => handleColorChange(carColors[id])}
            >
              <img src={item.image} alt="car color" />
            </div>
          ))
          : null}
      </ContentWrap>
    </BlockWrap>
    <BlockWrap>
      <h3>Salon</h3>
      <ContentWrap>
        {salonTypes.length
          ? salonTypes.map((item, id) => (
            <div
              key={item.id}
              className={`${data?.salon === item.type ? 'active' : ''}`}
              onClick={() => handleSalonChange(salonTypes[id])}
            >
              <img src={item.image} alt="salon type" />
            </div>
          ))
          : null}
      </ContentWrap>
    </BlockWrap>
    <BlockWrap>
      <h3>Alloy wheels</h3>
      <ContentWrap>
        {wheelTypes.length
          ? wheelTypes.map((item, id) => (
            <div
              key={item.id}
              className={`${data?.wheel === item.wheel ? 'active' : ''}`}
              onClick={() => handleWheelChange(wheelTypes[id])}
            >
              <img src={item.image} alt="wheel type" />
            </div>
          ))
          : null}
      </ContentWrap>
    </BlockWrap>
    <BlockWrap borderTop>
      <h3>
        Total price:
        {' '}
        {totalPrice}
        {' '}
        $
      </h3>
    </BlockWrap>
  </Wrap>
);

Configurator.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    salon: PropTypes.string,
    wheel: PropTypes.string,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleSalonChange: PropTypes.func.isRequired,
  handleWheelChange: PropTypes.func.isRequired,
};

export default Configurator;
