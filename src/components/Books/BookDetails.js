import React, { Component } from 'react';
import { Container,Card,Row,Col } from 'react-bootstrap';
import axios from 'axios';
class BookDetails extends Component{
  
    state = {
        books: [],
        shop: ""
   
    }
    componentDidMount() {
        this.getBooks()
    }
    getBooks = () =>{
        axios.get('https://coffeeshopspr.herokuapp.com/api/books/'+this.props.match.params.id,{
            headers: {
                'accept': 'application/json'
            }
        }
        ).then(resp=>{
            this.setState({
                books: resp.data,
                shop:resp.data.shop
               })
            console.log(resp.data)
        })
        
   }
  
    render(){
    return (
        <Container>
            <center>
            <Row className="mb-5 mt-5">
                <Col lg={6} md={12} sm={12}>
                    <Card border="dark" style={{width:"75%"}}>
                        <Card.Img variant="top" src={this.state.books.image} />
                    </Card>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Card border="light" style={{ width: '95%',height:'100%' }}>
                    <center>
                    <Card.Body>
                        <Card.Title><b>{this.state.books.title}</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.books.author}</Card.Subtitle>
            
                        <Card.Text style={{float:"left"}} className="py-1">
                        <hr></hr>
                        {this.state.books.description}
                        <hr></hr>
                    
                        <b>Disponible en:</b>
                        <br></br>
                        {this.state.shop.name}
                        <br></br>
                        <br></br>
                        <span><b>Direccion</b></span>
                        <br></br>
                        <span>{this.state.shop.address}</span>
                     
                        </Card.Text>
    
                      
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                    </center>
                    </Card>
                </Col>
            </Row>
            </center>
        </Container>
    )
}
}
export default BookDetails