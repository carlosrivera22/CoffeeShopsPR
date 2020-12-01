import React, { Component } from 'react';
import axios from 'axios'
import MetroMap from './MetroMap'
import { Container } from 'react-bootstrap';

class MapPointers extends Component {
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

    const markers = [];
    var i;
    var offset;
    for (i=0; i < this.state.shops.length; i++){
        if (i % 2 ===0){
            offset = -2;
        }else{
            offset = 2;
        };
        markers.push({
            markerOffset: offset,
            name: this.state.shops[i].name,
            coordinates: [this.state.shops[i].longitude, this.state.shops[i].latitude]
        });
        console.log(markers)
    };
    
    return <Container fluid="md" style={{position:'fixed'}}>
            <MetroMap markers={markers}/>
           </Container>
   }
}
export default MapPointers