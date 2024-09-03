import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <nav className={styles.headerNav}>
          <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" alt="logo" />
          <h1>Oompa Loompa's Crew</h1>
        </nav>
      </Link>
    </header>
  )
}