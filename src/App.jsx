import React from 'react';
import './App.css'
import { Analytics } from "@vercel/analytics/react"

import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'

// Components
import ScrollToTop from './components/ScrollToTop';
import BackButton from './components/BackButton';


// Sections
import Landing from './sections/Landing';
import History from './sections/History';
import NotFound from './sections/NotFound';
import Sources from './sections/Sources';
import Figures from './sections/Figures';
import Data from './sections/Data';
import Collapse from './sections/Collapse';

const RouterConfig = () => {
  const routes = [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '*',
      element: (
        <>
          <BackButton />
          <div className="content">
            {useRoutes([
              { path: '/history', element: <History /> },
              { path: '/sources', element: <Sources /> },
              { path: '/key-figures', element: <Figures /> },
              { path: '/data', element: <Data /> },
              { path: '/collapse', element: <Collapse /> },
              { path: '/death', element: <Navigate to="/collapse"/> },
              { path: '*', element: <NotFound /> },
            ])}
          </div>
        </>
      ),
    },
  ];

  return useRoutes(routes);
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Analytics />
        <ScrollToTop />
        <div className="padding-top"></div>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
