import Navbar from './Navbar/Navbar';
import Container from './Container/Container';

function Layout({children}) {
  return (
    <Container>
      <Navbar />

      <main>
        {children}
      </main>
    </Container>
  )
}

export default Layout
