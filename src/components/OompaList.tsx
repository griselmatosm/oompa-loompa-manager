import { useOompaList } from '../hooks/useOompaList';

export default function OompaList() {
  const { data, size, setSize } = useOompaList();
  console.log(data, size);

  return (
    <>
      <h1>Oompa Loompa List</h1>
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </>
  )
}