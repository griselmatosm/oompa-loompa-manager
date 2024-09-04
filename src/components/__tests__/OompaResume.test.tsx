import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../utils/testUtils';
import OompaResume from '../OompaResume';

describe('OompaResume', () => {
  it('should render OompaResume component', async () => {
    renderWithProviders(<OompaResume name={''} image={''} gender={''} profession={''} description={''} />);
  })
})