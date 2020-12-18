import React from 'react';
import {FormControl} from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
const DropdownInput = ({ handleDropdown }) => {

  return (
  
        
    <div style={{width:"25%"}}>
    <FormControl
        style={{borderRadius:"0px"}}
        as="select"
        id="inlineFormCustomSelect"
        custom
        onChange={handleDropdown}
      >
        <option value="isla">Isla</option>
        <option value="metro">Metro</option>
        <option value="oeste">Oeste</option>
      </FormControl>

    </div>
    
  );
};

export default DropdownInput;