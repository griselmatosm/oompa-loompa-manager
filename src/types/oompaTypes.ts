export interface OompaListPage {
  current: number;
  total: number;
  results: OompaWorker[];
}

export interface OompaList {
  current_page: number;
  oompa_list: OompaWorker[];
  total_pages: number;
}

export interface OompaWorker {
  id: number;
  first_name: string;
  last_name: string;
  favorite?: Favorite;
  gender: Gender;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: Country;
  height: number;
}

export interface OompaDetail extends OompaWorker {
  description: string;
  quota: string;
}

export enum Country {
  Loompalandia = 'Loompalandia',
}

export interface Favorite {
  color?: Color;
  food: Food;
  random_string: string;
  song: string;
}

export enum Color {
  Blue = 'blue',
  Red = 'red',
}

export enum Food {
  Chocolat = 'Chocolat',
  CocoaNuts = 'cocoa nuts',
}

export enum Gender {
  F = 'F',
  M = 'M',
}

export const GenderLabel = {
  [Gender.F]: 'Female',
  [Gender.M]: 'Male',
};