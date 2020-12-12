import React from 'react';
import { Container,Card,Row,Col } from 'react-bootstrap';

const BookDetails = (props) =>{
    return (
        <Container>
            <center>
            <Row className="mb-5 mt-5">
                <Col lg={6} md={12} sm={12}>
                    <Card border="dark" style={{width:"75%"}}>
                        <Card.Img variant="top" src={props.image} />
                    </Card>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Card border="light" style={{ width: '95%',height:'100%' }}>
                    <center>
                    <Card.Body>
                        <Card.Title><b>{props.title}</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
            
                        <Card.Text style={{float:"left"}} className="py-1">
                        <hr></hr>
                        {props.description}
                        <hr></hr>
                        <div>
                            <b>Disponible en:</b>
                            <br></br>
                            <p>{props.shop}</p>
                        </div>
                        </Card.Text>
    
                      
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                    </center>
                    </Card>
                </Col>
            </Row>
            </center>
        </Container>
    )
}
export default BookDetails