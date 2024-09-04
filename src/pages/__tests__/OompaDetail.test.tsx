import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, test } from 'vitest'
import { renderWithProviders } from '../../utils/testUtils'

import Root from '../../routes/root'
import OompaDetail from '../OompaDetail'

describe('OompaDetail', () => {
  test('renders OompaDetail component for the oompa/:id path', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: 'oompa/:id',
            element: <OompaDetail />
          }
        ],
      },
    ],
      { initialEntries: ['/oompa/1'] }
    )

    renderWithProviders(<RouterProvider router={router} />)

  })
})