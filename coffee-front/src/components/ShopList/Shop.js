import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
const Shop = (props) => {
    return ( 
        <Card style={{ width: '20rem' }} className="mx-auto mb-3">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Link href={props.website}><FontAwesomeIcon icon={faFacebookF} /></Card.Link>
        </Card.Body>
        </Card>
     );
}
 
export default Shop;