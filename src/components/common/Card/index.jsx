import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrap, DescriptionWrap } from './styled';

const Card = ({
  link,
  title,
  description,
  borderRight,
}) => (
  <Wrap>
    <img src={link} alt="car model" />
    <DescriptionWrap borderRight={borderRight}>
      <h3>{title}</h3>
      <p>{description}</p>
    </DescriptionWrap>
  </Wrap>
);

Card.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  borderRight: PropTypes.string,
};

Card.defaultProps = {
  borderRight: '',
};

export default Card;
