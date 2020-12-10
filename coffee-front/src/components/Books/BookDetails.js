import React, {Component} from 'react';
import axios from 'axios'
import Book from './Book'
import { Container } from 'react-bootstrap';

const BookDetails = (props) =>{
    return (
        <Container>
            <h1>BOOK ID: {props.id}</h1>
        </Container>
    )
}
export default BookDetails