import { screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { renderWithProviders } from '../../utils/testUtils';

import Root from '../../routes/root';
import ErrorPage from '../ErrorPage';

describe('ErrorPage', () => {
  test('renders ErrorPage component for an invalid path', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
      },
    ], {
      initialEntries: ['/invalid-path'],
    });

    renderWithProviders(<RouterProvider router={router} />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText(/an unexpected error has occurred/i)).toBeInTheDocument();
  });
})


