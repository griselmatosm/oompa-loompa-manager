import Heading from '../Heading';
import SearchInput from '../SearchInput';
import styles from './HeadingContainer.module.css';

export default function HeadingContainer() {
  return (
    <section className={styles.headingContainer}>
      <SearchInput placeholder='Search' />
      <Heading title='Find your Oompa Loompa' subtitle='There are more than 100k' />
    </section>
  )
}