import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useOompaListActions } from '../../hooks/useOompaListActions';
import { SEARCHER_ICON_URL } from '../../utils/constants';
import styles from './SearchInput.module.css';
interface SearchInputProps {
  placeholder: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  const { setFilterTermAction } = useOompaListActions();
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedValue) setFilterTermAction(debouncedValue);
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
        <img className={styles.searchIcon} src={SEARCHER_ICON_URL} alt="search" />
      </div>
    </form>
  )
}