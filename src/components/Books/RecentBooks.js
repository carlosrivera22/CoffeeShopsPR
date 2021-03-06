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
        axios.get('https://coffeeshopspr.herokuapp.com/api/books/',{
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
            return <Col key={book.id} lg={4} md={12} sm={12}><Book shop_name={book.shop.name} description={book.description} 
                                                   author={book.author}title={book.title} key={book.id} image={book.image} 
                                                   shop_address={book.shop.address} id={book.id}/></Col>
        })
        return <Container fluid="md">
                <Row>{books}</Row>
               </Container>
    }
}
 
export default RecentBooks;