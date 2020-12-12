import React, { Component, useEffect, useRef, useState } from 'react';
import { loadBooks } from '../../actions/books';
import Book from './Book'
import axios from 'axios'
import { Row,Col,Container } from 'react-bootstrap';
const ShopBooks = (props) => {
    const [books,setBooks] = useState([]);

    //call api to get list of books
    useEffect(() => {
        getBooks();
        console.log("being called")
    },[])
    const getBooks = () =>{
        axios.get('http://127.0.0.1:8000/api/books/',{
            headers: {
                'accept': 'application/json'
            }
        }
        ).then(resp=>{
            setBooks(resp.data)
            console.log(resp.data)
        })
        
   }
   const book_elements = books.slice(0, books.length).map(book=>{
       if(props.shop_id === book.shop.id){
            return <Col key={book.id} sm={4}><Book shop_name={book.shop.name} description={book.description} 
                                           author={book.author}title={book.title} key={book.id} image={book.image} 
                                           shop_address={book.shop.address} id={book.id}/></Col>
       }
})
    return (
        <Container>
            <h1 className="py-3"><b>{props.shop_name}</b></h1>
            <hr></hr>
            <Row className="py-3">
            {book_elements}
            </Row>
        </Container>
    )
    
    }

 
export default ShopBooks;