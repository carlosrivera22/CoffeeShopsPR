import React, {useEffect, useRef } from 'react';
import { Card,Button } from 'react-bootstrap';
import BookDetails from './BookDetails';
import ReactDOM from 'react-dom';

const Book = (props) => {
    
    const inputRef = useRef([]);
    const ruta = '/books/'+props.id
    useEffect(() => {
        inputRef.current[0] = onButtonClick;
      }, []);

    function handleClick(event) {
    inputRef.current[0](event.target.value, props);
    }

    function onButtonClick(){
        ReactDOM.render(<BookDetails id={props.id}/>, document.getElementById('main'));
    }
    return ( 
        <Card style={{ width: '15rem' }} className="mx-auto mb-2">
        <Card.Img style={{height:'20rem'}} variant="top" src={props.image} />
        <Button onClick={handleClick}  variant="outline-dark">Ver Detalles</Button>
        </Card>
     );
}
 
export default Book;