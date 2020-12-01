import Shop from './Shop'
import { Row,Col,Container } from 'react-bootstrap';
import MapPointers from '../Map/MapPointers';
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { loadShops } from '../../actions/shops';
import SearchInput from '../SearchInput';
import DropdownInput from '../DropdownInput'

const ShopList = (props) => {
  const [shops, setShops] = useState(props.shops);
  const [region, setRegion] = useState('OESTE');
  const inputRef = useRef([]);


  // call api to get list of shops
  useEffect(() => {
    props.dispatch(loadShops());
    inputRef.current[0] = onSearchText;
    inputRef.current[1] = onDropdownSelect;
  }, []);
  useEffect(() => {
    if (props.shops.length > 0) {
        setShops(props.shops);
    }
  }, [props.shops]);
  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.shops.filter((shop) =>
        shop.name.toLowerCase().includes(text.toLowerCase()) 
        || shop.address.toLowerCase().includes(text.toLowerCase()) 
      );
    } else {
      filtered = props.shops;
    }
    setShops(filtered);
  }
  function handleSearch(event) {
    inputRef.current[0](event.target.value, props);
  }

  function onDropdownSelect(text,props){
    let selection;
    if(text != '0'){
      setRegion(text.toUpperCase())
      selection = props.shops.filter((shop) =>
      shop.region.toLowerCase().includes(text.toLowerCase()));
    } else {
      selection = props.shops
      setRegion("METRO")
    }
    setShops(selection)
  }

  function handleDropdown(event){
    inputRef.current[1](event.target.value,props)
  }
  
  return (
    <Container style={{zIndex: 1}}>
      <Row className='px-3'>
  <h1>REGION {region}</h1>
      </Row>
      <DropdownInput handleDropdown={handleDropdown}/>
        <SearchInput handleSearch={handleSearch} />
        <br/>
        <Row>
            <Col md={6}>
                {shops.map((shop, index) => (
                    <Shop key={index} {...shop} />
                ))}
            </Col>
            <Col md={6} className="d-none d-lg-block">
                <MapPointers/>
            </Col>
        </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  shops: state.shops
});

export default connect(mapStateToProps)(ShopList);