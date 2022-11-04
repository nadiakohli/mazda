import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrap } from './styled';

const Square = ({ children }) => (
  <Wrap>{children}</Wrap>
);

Square.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Square;
