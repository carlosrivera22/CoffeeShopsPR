import React from 'react';
import { Card } from 'react-bootstrap';
const Shop = (props) => {
    return ( 
        <Card style={{ width: '20rem' }} className="mx-auto mb-3">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        </Card>
     );
}
 
export default Shop;