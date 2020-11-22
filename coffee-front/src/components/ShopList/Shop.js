import React from 'react';
import { Card } from 'react-bootstrap';

import './Shop.css';
const Shop = (props) => {
    return ( 
        <Card>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.description}</Card.Subtitle>
        </Card.Body>
        </Card>
     );
}
 
export default Shop;