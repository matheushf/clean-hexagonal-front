import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Dog/presentation/Home/HomePage';
import './index.css';
import { HomeContextProvider } from './Dog/application/homeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeContextProvider>
        <HomePage />
      </HomeContextProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
