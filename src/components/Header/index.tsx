import { Link } from 'react-router-dom'
import { LOGO_URL } from '../../utils/constants'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <nav className={styles.headerNav}>
          <img src={LOGO_URL} alt="logo" />
          <h1>Oompa Loompa's Crew</h1>
        </nav>
      </Link>
    </header>
  )
}