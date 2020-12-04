import React, { Component } from 'react';
import axios from 'axios'
import MetroMap from './MetroMap'
import WestMap from './WestMap'
import Map from './Map'
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
            },
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
        if (i % 2 === 0){
            offset = -2;
        }else{
            offset = 2;
        };
        markers.push({
            markerOffset: offset,
            name: this.state.shops[i].name,
            coordinates: [this.state.shops[i].longitude, this.state.shops[i].latitude]
        });
    };
    if (this.props.region === "METRO"){
    return <Container  style={{position:'fixed'}}>
            <MetroMap markers={markers}/>
           </Container>
    }
    else if (this.props.region === "ISLA"){
        return <Container style={{position:'fixed'}}>
            <Map markers={markers}/>
           </Container>
    }
    else if (this.props.region === "OESTE"){
        return <Container style={{position:'fixed'}}>
            <WestMap markers={markers}/>
           </Container>
    }
   }
}
export default MapPointers