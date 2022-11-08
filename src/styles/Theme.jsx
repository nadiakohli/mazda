import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Fonts
import light from 'assets/fonts/Ubuntu-Light.ttf';
import regular from 'assets/fonts/Ubuntu-Regular.ttf';
import medium from 'assets/fonts/Ubuntu-Medium.ttf';
import bold from 'assets/fonts/Ubuntu-Bold.ttf';

export const theme = {
  colors: {
    white: '#ffffff',
    whiteSmoke: '#f5f5f5',
    black: '#000000',
    mirage: '#191919',
    monsoon: '#d5dadf',
    platinum: '#e3e3e3',
    quillGray: '#d5d5d5',
    dawn: '#9fa19f',
    granite: '#808080',
  },
  fonts: {
    ubuntu: 'Ubuntu, sans-serif',
  },
};

// Global style
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu-Light';
    src: url(${light}) format('ttf');
  }

  @font-face {
    font-family: 'Ubuntu-Regular';
    src: url(${regular}) format('ttf');
  }

  @font-face {
    font-family: 'Ubuntu-Medium';
    src: url(${medium}) format('ttf');
  }

  @font-face {
    font-family: 'Ubuntu-Bold';
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
