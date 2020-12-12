import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
const Shop = (props) => {
    return ( 
        <Card style={{ height: '28rem', width: '15rem' }} className="mx-auto mb-2">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title><b>{props.name}</b></Card.Title>
            {/* <Card.Text>{props.description}</Card.Text> */}
            <Card.Link href={props.facebook}><FontAwesomeIcon icon={faFacebookF} /></Card.Link>
            <Card.Link href={props.facebook}><FontAwesomeIcon icon={faBook} /></Card.Link>
            <hr/>
            <Card.Text><i>{props.address}</i></Card.Text>
        </Card.Body>
        </Card>
     );
}
 
export default Shop;