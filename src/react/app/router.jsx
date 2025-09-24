import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';

import HomePage from './routes/Home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: '*',
        element: <HomePage />,
      },
    ],
  },
]);
