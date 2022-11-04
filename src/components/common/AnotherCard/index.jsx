import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  Wrap,
  DescriptionWrap,
  ImageWrap,
  LinkBtn,
} from './styled';

const AnotherCard = ({
  to,
  link,
  title,
  fuel,
  color,
  salon,
  engine,
  alloyWheel,
  price,
}) => (
  <Wrap>
    <ImageWrap>
      <img src={link} alt="car model" />
    </ImageWrap>
    <DescriptionWrap>
      <div>
        <h2>{title}</h2>
        <LinkBtn size="small">{fuel}</LinkBtn>
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
          <span>Alloy wheel:</span>
          {' '}
          {alloyWheel}
        </p>
        <p>
          <span>Price:</span>
          {' '}
          {price}
          {' '}
          $
        </p>
      </div>
      <LinkBtn to={`/models/${to}`}>More details</LinkBtn>
    </DescriptionWrap>
  </Wrap>
);

AnotherCard.propTypes = {
  to: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  salon: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  alloyWheel: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default AnotherCard;
