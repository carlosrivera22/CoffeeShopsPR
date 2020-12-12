import React from 'react';
import { FormControl } from 'react-bootstrap';
const SearchInput = ({ handleSearch }) => {
  return (
    <div style={{width:"75%"}}>
        <FormControl style={{borderRadius:"0px"}} onChange={handleSearch} type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;