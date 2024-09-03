import { OompaWorker } from '../types/oompaTypes';
export function matchesFilterTerm(
  item: OompaWorker,
  filterTerm: string,
  fieldsToSearch: Array<keyof OompaWorker>
) {
  const term = filterTerm.toLowerCase();

  return fieldsToSearch.some((field) =>
    item[field]?.toString().toLowerCase().includes(term)
  );
}
