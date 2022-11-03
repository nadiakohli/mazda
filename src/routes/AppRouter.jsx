import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import Models from 'pages/Models';
import Configurator from 'components/Configurator';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="/models/:id" element={<Configurator />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </Router>
);

export default AppRouter;
