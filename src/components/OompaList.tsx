import { useAppSelector } from '../hooks/store';
import { useOompaList } from '../hooks/useOompaList';

export default function OompaList() {
  const { size, setSize, isError, isLoading } = useOompaList();
  const { oompa_list: oompaList, current_page: currentPage, total_pages: totalPages } = useAppSelector((state) => state.oompaList);

  if (isError) return <div>Failed to load data</div>;
  if (isLoading && size === 1) return <div>Loading...</div>;


  return (
    <>
      <h1>Oompa Loompa List</h1>
      {oompaList && oompaList.map((oompa) => <li key={oompa.id}>{oompa.first_name}</li>)}
      {currentPage < totalPages && <button onClick={() => setSize(size + 1)} disabled={isLoading}>{isLoading ? 'Loading...' : 'Load More'}</button>}
    </>
  )
}