import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButtonStyle } from './styled';

const Button = ({ children, color, to }) => (
  <ButtonStyle color={color} to={`${to}`}>
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  color: '',
  to: '',
};

export default Button;
