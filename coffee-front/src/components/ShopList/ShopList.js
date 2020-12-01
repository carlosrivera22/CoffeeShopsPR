import Shop from './Shop'
import { Row,Col,Container } from 'react-bootstrap';
import MapPointers from '../Map/MapPointers';
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { loadShops } from '../../actions/shops';
import SearchInput from '../SearchInput';

const ShopList = (props) => {
  const [shops, setShops] = useState(props.shops);
  const inputRef = useRef();

  // call api to get list of shops
  useEffect(() => {
    props.dispatch(loadShops());
    inputRef.current = onSearchText;
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
    inputRef.current(event.target.value, props);
  }

  return (
    <Container style={{zIndex: 1}}>
        <SearchInput handleSearch={handleSearch} />
        <Row>
            <Col>
                {shops.map((shop, index) => (
                    <Shop key={index} {...shop} />
                ))}
            </Col>
            <Col>
                <MapPointers />
            </Col>
        </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  shops: state.shops
});

export default connect(mapStateToProps)(ShopList);