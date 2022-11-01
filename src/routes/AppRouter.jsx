import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route index element={<h1>Home</h1>} />
      <Route path="/models" element={<h1>Models</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </Router>
);

export default AppRouter;
