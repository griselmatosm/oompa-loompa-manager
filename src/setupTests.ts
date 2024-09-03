import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { server } from './mocksServer/worker';
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// Start worker before all tests
beforeAll(() => { server.listen() })

//  Close worker after all tests
afterAll(() => {server.close()})

// Reset handlers after each test `important for test isolation`
afterEach(() => {server.resetHandlers()})