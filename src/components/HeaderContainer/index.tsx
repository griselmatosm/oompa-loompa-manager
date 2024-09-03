import Heading from '../Heading';
import SearchInput from '../SearchInput';
import styles from './HeaderContainer.module.css';

export default function HeaderContainer() {
  return (
    <section className={styles.headerContainer}>
      <SearchInput placeholder='Search' />
      <Heading title='Find your Oompa Loompa' subtitle='There are more than 100k' />
    </section>
  )
}