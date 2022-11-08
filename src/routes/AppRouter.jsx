import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Helpers
import ScrollToTop from 'helpers/ScrollToTop';

// Pages
import Home from 'pages/Home';
import Models from 'pages/Models';
import Configurator from 'pages/Configurator';
import Owners from 'pages/Owners';
import NotFound from 'pages/NotFound';

const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="/models/:id" element={<Configurator />} />
      <Route path="/owners" element={<Owners />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
