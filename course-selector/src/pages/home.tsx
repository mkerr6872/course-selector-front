import '../App.css'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
      <>
        <Container id='Home-Container'>
            <Row id='Home-Top-Row'>Asdf</Row>
            <Container id='Home-Content-Main'>
                <Row>
                <Col id='Home-Content-Left'>B</Col>
                <Col id='Home-Content-Center'>C</Col>
                <Col id='Home-Content-Right'>D</Col>
                </Row>
            </Container>
        </Container>
      </>
    );
  };

export default Home