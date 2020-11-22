import React, { Component } from 'react';
import axios from 'axios'
import Shop from './Shop';

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
            return <Shop name={shop.name} description={shop.description}/>
        })
        return <div>{shops}</div>
    }
}
 
export default ShopList;