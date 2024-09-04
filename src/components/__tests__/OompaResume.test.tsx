import { describe, it } from 'vitest';
import { renderWithProviders } from '../../utils/testUtils';
import OompaResume from '../OompaResume';

describe('OompaResume', () => {
  it('should render OompaResume component', async () => {
    renderWithProviders(<OompaResume name={''} image={''} gender={''} profession={''} description={''} />);
  })
})