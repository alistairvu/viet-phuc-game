import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {
  AppCategoryPicker,
  AppCategorySelections,
  AppCurrentChoices,
} from "../components"

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <AppCategoryPicker />
        </Col>
        <Col lg={6}>
          <AppCurrentChoices />
        </Col>
        <Col lg={3}>
          <AppCategorySelections />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
