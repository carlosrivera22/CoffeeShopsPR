import React from 'react';
import { Row, FormControl } from 'react-bootstrap';
const SearchInput = ({ handleSearch }) => {
  return (
    <div style={{width:"30%"}}>
        <FormControl style={{borderRadius:"0px",'no-outline-on-focus':'true'}} onChange={handleSearch} type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;