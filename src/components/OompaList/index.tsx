import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import { useOompaList } from '../../hooks/useOompaList';
import { GenderLabel, OompaWorker } from '../../types/oompaTypes';
import { matchesFilterTerm } from '../../utils/helpers';
import OompaCard from '../OompaCard';
import styles from './OompaList.module.css';

export default function OompaList() {
  const { isLoading, isError, size, setSize } = useOompaList();
  const { oompa_list: oompaList, current_page: currentPage, total_pages: totalPages, filterTerm } = useAppSelector(
    (state) => state.oompaList
  );

  const fieldsToSearch: Array<keyof OompaWorker> = ['first_name', 'last_name', 'profession'];

  const filteredOompaList = oompaList.filter((oompa) =>
    matchesFilterTerm(oompa, filterTerm, fieldsToSearch)
  );


  if (isError) return <div>Failed to load data</div>;
  if (isLoading && size === 1) return <div>Loading...</div>;

  const hasMorePages = currentPage < totalPages;

  return (
    <>
      <ul className={styles.oompaList}>
        {filteredOompaList.map((oompa) => (
          <li key={oompa.id}>
            <Link to={`/oompa/${oompa.id}`}>
              <OompaCard
                name={`${oompa.first_name} ${oompa.last_name}`}
                image={oompa.image}
                gender={GenderLabel[oompa.gender]}
                profession={oompa.profession}
              />
            </Link>
          </li>
        ))}
      </ul>

      {hasMorePages && (
        <button style={{ marginTop: '2rem' }} onClick={() => setSize(size + 1)} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </>
  );
}
