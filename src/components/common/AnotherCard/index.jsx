import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  Wrap,
  DescriptionWrap,
  ImageWrap,
  Button,
} from './styled';

const AnotherCard = ({
  link,
  title,
  fuel,
  color,
  salon,
  engine,
  price,
}) => (
  <Wrap>
    <ImageWrap>
      <img src={link} alt="car model" />
    </ImageWrap>
    <DescriptionWrap>
      <div>
        <h2>{title}</h2>
        <Button size="small">{fuel}</Button>
        <p>
          <span>Color:</span>
          {' '}
          {color}
        </p>
        <p>
          <span>Salon:</span>
          {' '}
          {salon}
        </p>
        <p>
          <span>Engine:</span>
          {' '}
          {engine}
        </p>
        <p>
          <span>Price:</span>
          {' '}
          {price}
        </p>
      </div>
      <div>
        <Button>More details</Button>
      </div>
    </DescriptionWrap>
  </Wrap>
);

AnotherCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  salon: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default AnotherCard;
