import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../utils/testUtils';
import OompaList from '../OompaList';

describe('OompaList', () => {
  it('should render OompaList component', async () => {
    renderWithProviders(<OompaList />);
  })

  it('should render the initial list of Oompa Loompas', async () => {
    renderWithProviders(
      <MemoryRouter>
        <OompaList />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText(/John/i)).toBeInTheDocument();
  })

  it('should render the next page of Oompa Loompas', async () => {
    renderWithProviders(
      <MemoryRouter>
        <OompaList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Load More' }));

    await waitFor(() => screen.getByText('Loading...'));

    expect(await screen.findByText(/Jane/i)).toBeInTheDocument();
  })
})