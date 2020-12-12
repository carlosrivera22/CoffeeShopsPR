import React, { Component } from 'react';
import axios from 'axios'
import Book from './Book'
import { Row,Col,Container } from 'react-bootstrap';
class RecentBooks extends Component {
    state = {
        books: [],
   
    }
    componentDidMount() {
        this.getBooks()
    }
    getBooks = () =>{
        axios.get('http://127.0.0.1:8000/api/books/',{
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
  
    render() { 
        const books = this.state.books.slice(this.state.books.length-3, this.state.books.length).map(book=>{
            return <Col key={book.id} sm={4}><Book shop={book.shop.name} description={book.description} author={book.author}title={book.title} key={book.id} image={book.image} id={book.id}/></Col>
        })
        return <Container fluid="md">
                <Row>{books}</Row>
               </Container>
    }
}
 
export default RecentBooks;