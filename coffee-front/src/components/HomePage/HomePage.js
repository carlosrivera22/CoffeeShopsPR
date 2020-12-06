import React from 'react';
import { Row,Col,Container,Image,Button,InputGroup,FormControl } from 'react-bootstrap';
// import Img from './public/temp_logo.png'

const HomePage = () => {
    return(
        <Container>
            <Row className="py-3">
            <Col>
            <Image style={{width:"250px"}} src="../potential_logo2.gif" rounded />
            </Col>
        </Row>
        <Row className="py-3">
        <Col lg={6} sm={6} xs={6}>
            <Button variant="outline-dark" size="lg" block>
                Coffee Shops
            </Button>
        </Col>
        <Col lg={6} sm={6} xs={6}>
            <Button variant="outline-dark" size="lg" block>
                Libros
            </Button>
        </Col>
        </Row>
        <hr></hr>
        <Row className="py-5">
            <Col>
                <h1>Sobre Nosotros</h1>
                <center><p style={{width:"90%"}}className="py-3">
                    Brindamos informacion sobre los mejores Coffee Shops de Puerto Rico. 
                    Hemos colaborado con algunos Coffee Shops para proveerle a nuestros 
                    clientes libros de manera gratuita siguiendo la dinamica "Deja uno, llevate uno!". 
                </p></center>
            </Col>
        </Row>
        <hr></hr>
        <Row className="py-5">
            <Col md={{ span: 6, offset: 3 }}>
            <h1>Newsletter</h1>
                <InputGroup className="mb-3 py-3">
                    <FormControl
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-dark">Subscribete</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
        </Container>
    );
}

export default HomePage;