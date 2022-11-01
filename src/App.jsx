import React from 'react';

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
