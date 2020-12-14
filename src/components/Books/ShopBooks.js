import React, { Component, useEffect, useRef, useState } from 'react';
import Book from './Book'
import axios from 'axios'
import { Row,Col,Container } from 'react-bootstrap';
class ShopBooks extends Component {
    state = {
        books: [],
        shop: ""
   
    }
    componentDidMount() {
        this.getBooks()
        this.getCoffeeShop()
    }
    getBooks = () =>{
        axios.get('http://127.0.0.1:8000/api/coffee_shop/'+this.props.match.params.id+'/books',{
            headers: {
                'accept': 'application/json'
            }
        }
        ).then(resp=>{
            this.setState({
                books: resp.data,
               })
            console.log(resp.data)
        })
        
   }

   getCoffeeShop = () =>{
    axios.get('http://127.0.0.1:8000/api/coffee_shops/'+this.props.match.params.id,{
        headers: {
            'accept': 'application/json'
        }
    }).then(resp=>{
        this.setState({
            shop:resp.data
           })
        console.log(resp.data)
    })
   }

   render(){
    const book_elements = this.state.books.slice(0, this.state.books.length).map(book=>{
        return <Col key={book.id} lg={4} md={6} sm={12}><Book shop_name={book.shop.name} description={book.description} 
                                        author={book.author}title={book.title} key={book.id} image={book.image} 
                                        shop_address={book.shop.address} id={book.id}/></Col>
        
    })

    return (
        <Container>
            <h1 className="py-3"><b>{this.state.shop.name}</b></h1>
            <hr></hr>
            <Row className="py-3">
            {book_elements}
            </Row>
        </Container>
    )
   }
    }

 
export default ShopBooks;