import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButtonStyle } from './styled';

const Button = ({
  children,
  onClick,
  color,
  to,
}) => (
  <ButtonStyle onClick={onClick} color={color} to={`${to}`}>
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  onClick: () => {},
  color: '',
  to: '',
};

export default Button;
