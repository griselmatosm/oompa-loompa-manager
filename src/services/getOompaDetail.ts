import { BASE_URL } from '../utils/constants';

export const getKey = (id: number) => `${BASE_URL}/${id}`;