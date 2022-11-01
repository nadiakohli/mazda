import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButtonStyle } from './styled';

const Button = ({ children }) => (
  <ButtonStyle>{children}</ButtonStyle>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
