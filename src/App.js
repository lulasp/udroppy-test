import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import OptionsVariants from './components/OptionsVariants';
import SaveButtons from './components/SaveButtons';
import { connect } from 'react-redux';

function App({ variants }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', variants);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <OptionsVariants />
              <SaveButtons />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    variants: state.variants
  }
}

export default connect(mapStateToProps)(App)
