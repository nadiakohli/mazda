import React from 'react';

// Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Routes
import AppRouter from 'routes/AppRouter';

// Theme
import Theme, { GlobalStyle } from 'styles/Theme';

const App = () => (
  <Theme>
    <AppRouter />
    <GlobalStyle />
  </Theme>
);

export default App;
