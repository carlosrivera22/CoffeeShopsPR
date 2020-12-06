import React from 'react';
import { Row,Col,Container,Image } from 'react-bootstrap';
// import Img from './public/temp_logo.png'

const Home = () => {
    return(
        <Container>
        <Row>
            <Col>
            <Image src="../temp_logo.png" rounded />
            </Col>
        </Row>
        </Container>
    );
}

export default Home;