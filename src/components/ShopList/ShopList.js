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
  const [region, setRegion] = useState('ISLA');
  const [no_results_text, setNoResultsText] = useState("")
  const inputRef = useRef([]);


  // call api to get list of shops
  useEffect(() => {
    props.dispatch(loadShops());
    inputRef.current[0] = onSearchText;
    inputRef.current[1] = onDropdownSelect;
  }, []);
  useEffect(() => {

    if (props.shops.length > 0) {
        console.log(region)
        setShops(props.shops);
    }
  }, [props.shops]);
  
  function onSearchText(text, props, region) {
    let filtered;
    if (text && region === 'ISLA') {
      filtered = props.shops.filter((shop) =>
        shop.name.toLowerCase().includes(text.toLowerCase()) 
        || shop.address.toLowerCase().includes(text.toLowerCase()) 
      );
      setNoResultsText("")
    } 
    else if(text){
      filtered = props.shops.filter((shop) =>
        (shop.name.toLowerCase().includes(text.toLowerCase()) 
        || shop.address.toLowerCase().includes(text.toLowerCase()))
        && shop.region.toUpperCase() === region
      );
      setNoResultsText("")
    }
    else {
      if(region === 'ISLA'){
        filtered = props.shops;
      }else{
        filtered = props.shops.filter((shop) => 
          shop.region.toUpperCase() === region
        );
      }
      setNoResultsText("")
    }
    if (filtered.length === 0){
      setNoResultsText("No hay Resultados")
    }
    setShops(filtered);
  }
  function handleSearch(event) {
    inputRef.current[0](event.target.value, props, region);
  }

  function onDropdownSelect(text,props){
    let selection;
    if(text !== 'isla'){
      setRegion(text.toUpperCase())
 
      selection = props.shops.filter((shop) =>
      shop.region.toLowerCase().includes(text.toLowerCase()));
    } else {
      setRegion(text.toUpperCase())

      selection = props.shops
    }
    setShops(selection)
  }

  function handleDropdown(event){
    inputRef.current[1](event.target.value,props)
  }
  
  return (
    <Container style={{zIndex: 1}}>
      <Row className='px-3 py-5'>
        <h1>COFFEE SHOPS: <b>{region}</b></h1>
      </Row>
      <Row className="px-3">
        <DropdownInput handleDropdown={handleDropdown}/>
        <SearchInput handleSearch={handleSearch} />
      </Row>
        <br/>
        <Row>
            <Col className="py-5" lg={2}>
                {shops.map((shop, index) => (
                    <Shop key={index} {...shop} />
                ))}
                <h1>{no_results_text}</h1>
            </Col>
            <Col lg={10} className="d-none d-lg-block">
                <MapPointers region={region}/>
            </Col>
        </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  shops: state.shops
});

export default connect(mapStateToProps)(ShopList);