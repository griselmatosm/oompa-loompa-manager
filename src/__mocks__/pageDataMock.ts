export const pageData: Record<string, { current: number; total: number; results: { id: number; first_name: string; last_name: string; gender: string; age: number; }[]; }> = {
  '1': {
    current: 1,
    total: 20,
    results: [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        age: 30,
      },
    ],
  },
  '2': {
    current: 2,
    total: 20,
    results: [
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        gender: 'F',
        age: 25,
      },
    ],
  },
};