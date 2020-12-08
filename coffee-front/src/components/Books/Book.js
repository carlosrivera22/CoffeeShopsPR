import React from 'react';
import { Card,Button } from 'react-bootstrap';
const Book = (props) => {
    return ( 
        <Card style={{ width: '15rem' }} className="mx-auto mb-2">
        <Card.Img style={{height:'20rem'}} variant="top" src={props.image} />
        <Button variant="outline-dark">Ver Detalles</Button>
        </Card>
     );
}
 
export default Book;