import React from 'react';
import { Row,FormControl} from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
const DropdownInput = ({ handleDropdown }) => {

  return (
  
        
    <div style={{width:"10%"}}>
    <FormControl
        style={{borderRadius:"0px", outline:"none" ,outlineOffset: "none"}}
        as="select"
        id="inlineFormCustomSelect"
        custom
        onClick={handleDropdown}
      >
        <option value="isla">Isla</option>
        <option value="metro">Metro</option>
        <option value="oeste">Oeste</option>
      </FormControl>

    </div>
    
  );
};

export default DropdownInput;