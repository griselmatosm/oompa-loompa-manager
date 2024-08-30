import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import Root from '../../routes/root'
import Home from '../Home'

describe('Home', () => {
  test('renders Home page for the root path', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          { index: true, element: <Home /> },
        ]
      },
    ])

    render(<RouterProvider router={router} />)

    expect(screen.getByText(/Find your Oompa Loompa/i)).toBeInTheDocument()
  })
})