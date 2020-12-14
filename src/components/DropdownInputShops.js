import React from 'react';
import {FormControl} from 'react-bootstrap';
import { useEffect, useRef, useState } from "react"
import { loadShops } from '../actions/shops';
import { connect } from 'react-redux';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
const DropdownInputShops = (props) => {
    // call api to get list of shops
    const [shops,setShops] = useState(props.shops)
    useEffect(() => {
        props.dispatch(loadShops());

    }, []);
    useEffect(() => {

        if (props.shops.length > 0) {
            setShops(props.shops);
        }
    }, [props.shops]);
  return (
  
        
    <div style={{width:"25%"}}>
    <FormControl
        style={{borderRadius:"0px"}}
        as="select"
        id="inlineFormCustomSelect"
        custom
        onClick={props.handleDropdown}
      >
        <option key={shops.length} value="">Todos</option>
        {shops.map((shop,index)=>
        <option key={index} value={shop.name}>{shop.name}</option>
        )}
      </FormControl>

    </div>
    
  );
};
const mapStateToProps = (state) => ({
    shops: state.shops
  });
  
  export default connect(mapStateToProps)(DropdownInputShops);