import HeaderContainer from '../components/HeaderContainer'
import OompaList from '../components/OompaList'
export default function Home() {
  return (
    <>
      <HeaderContainer />
      <section style={{ marginTop: '2rem' }}>
        <OompaList />
      </section>
    </>
  )
}