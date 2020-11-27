import React, { Component } from 'react';
import axios from 'axios'
import Shop from './Shop'
import { Row,Col,Container } from 'react-bootstrap';
import MapPointers from '../Map/MapPointers';
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
            
        })
        
   }
  
    render() { 
        const shops = this.state.shops.slice(0, this.state.shops.length).map(shop=>{
            return <Shop image={shop.image}  name={shop.name} description={shop.description} facebook={shop.facebook} address={shop.address} />
                   
        })

        return  <Container style={{zIndex: 1}}>
                    <div style={{width: '25%', float:'left'}}>
                        {shops}
                    </div>
                    <div style={{width: '100%', float:'right', position:'fixed'}}>
                            <MapPointers/>
                    </div>
                </Container>
    }
}
 
export default ShopList;