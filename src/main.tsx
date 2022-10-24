import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import HomePage from './Dog/presentation/Home/HomePage';
import './index.css';
import { HomeContextProvider } from './Dog/application/home/homeContext';
import DetailsPage from './Dog/presentation/Details/DetailsPage';
import { initI18n } from './Dog/infra/i18n';
import { AddDogPage } from './Dog/presentation/AddDog/AddDogPage';

initI18n([initReactI18next]);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeContextProvider>
        <HomePage />
      </HomeContextProvider>
    ),
  },
  {
    path: '/dog/:dogId',
    element: <DetailsPage />,
  },
  {
    path: '/new-dog',
    element: <AddDogPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
