import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import OompaDetail from './pages/OompaDetail.tsx';
import Root from './routes/root.tsx';
import { setupStore } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'oompa/:id',
        element: <OompaDetail />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
