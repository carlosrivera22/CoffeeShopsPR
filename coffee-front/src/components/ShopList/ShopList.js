import React, { Component } from 'react';
import axios from 'axios'
import Shop from './Shop'
import { Row,Col,Container } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
class ShopList extends Component {
    state = {
        shops: [],
   
    }
    componentDidMount() {
        this.getShops()
    }
    getShops = () =>{
        axios.get('http://127.0.0.1:8000/api/coffee_shops/',{
            headers: {
                'accept': 'application/json'
            }
        }
        ).then(resp=>{
            this.setState({
                shops: resp.data,
               })
            console.log(resp.data)
        })
        
   }
  
    render() { 
        const shops = this.state.shops.slice(0, this.state.shops.length).map(shop=>{
            return <Col sm={4}><Shop image={shop.image}  name={shop.name} description={shop.description} facebook={shop.facebook} address={shop.address} /></Col>
        })
        return <Container fluid="md">
                <Row>{shops}</Row>
               </Container>
    }
}
 
export default ShopList;