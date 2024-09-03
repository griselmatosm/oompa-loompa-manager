import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './root.module.css';

export default function Root() {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
    </>
  )
}