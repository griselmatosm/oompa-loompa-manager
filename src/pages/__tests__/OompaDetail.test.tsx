import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
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

    render(<RouterProvider router={router} />)

  })
})