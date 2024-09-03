import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useOompaListActions } from '../../hooks/useOompaListActions';
import styles from './SearchInput.module.css';
interface SearchInputProps {
  placeholder: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  const { setFilterTermAction } = useOompaListActions();
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setFilterTermAction(debouncedValue);
  }, [debouncedValue, setFilterTermAction]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(event.target.value)
  }
  return (
    <form className={styles.searchInputContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <div className={styles.searchIconContainer}>
        <img className={styles.searchIcon} src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png" alt="search" />
      </div>
    </form>
  )
}