import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <h1>Oompa Loompa's Crew</h1>
      </header>
      <Outlet />
    </>
  )
}