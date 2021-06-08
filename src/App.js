import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import OptionsVariants from './components/OptionsVariants';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <OptionsVariants />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
