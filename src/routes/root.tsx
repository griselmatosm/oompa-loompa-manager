import { Outlet } from 'react-router-dom';
import styles from './root.module.css';

export default function Root() {
  return (
    <>
      <header>
        <h1>Oompa Loompa's Crew</h1>
      </header>
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
    </>
  )
}