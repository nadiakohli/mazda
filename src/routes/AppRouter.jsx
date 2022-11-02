import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import Models from 'pages/Models';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </Router>
);

export default AppRouter;
