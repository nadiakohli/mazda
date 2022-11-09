import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Helpers
import ScrollToTop from 'helpers/ScrollToTop';

// Pages
const Home = lazy(() => import('pages/Home'));
const Models = lazy(() => import('pages/Models'));
const Configurator = lazy(() => import('pages/Configurator'));
const Owners = lazy(() => import('pages/Owners'));
const NotFound = lazy(() => import('pages/NotFound'));

const AppRouter = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
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
  </Suspense>
);

export default AppRouter;
