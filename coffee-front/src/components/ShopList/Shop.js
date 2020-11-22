import React from 'react';
import { Card } from 'react-bootstrap';
const Shop = (props) => {
    return ( 
        <Card style={{ width: '40rem' }} className="mx-auto mb-2">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        </Card>
     );
}
 
export default Shop;