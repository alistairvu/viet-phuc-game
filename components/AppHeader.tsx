import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const AppHeader: React.FC = () => {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <Navbar.Brand>Viet Phuc Game</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default AppHeader
