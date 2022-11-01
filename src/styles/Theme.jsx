import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Fonts
import thin from 'assets/fonts/Roboto-Thin.ttf';
import light from 'assets/fonts/Roboto-Light.ttf';
import regular from 'assets/fonts/Roboto-Regular.ttf';
import medium from 'assets/fonts/Roboto-Medium.ttf';
import bold from 'assets/fonts/Roboto-Bold.ttf';

const theme = {
  colors: {
    white: '#ffffff',
    mirage: '#191919',
    monsoon: '#838485',
  },
  fonts: {
    roboto: 'Roboto, sans-serif',
  },
};

// Global style
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Thin';
    src: url(${thin}) format('ttf');
  }

  @font-face {
    font-family: 'Roboto-Light';
    src: url(${light}) format('ttf');
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${regular}) format('ttf');
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url(${medium}) format('ttf');
  }
  
  @font-face {
    font-family: 'Roboto-Bold';
    src: url(${bold}) format('ttf');
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Theme;
