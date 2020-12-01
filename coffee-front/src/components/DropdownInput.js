import React from 'react';
import { Row,FormControl} from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
const DropdownInput = ({ handleDropdown }) => {

  return (
    <div>
    <Row className='px-3'>
        <h1>REGION METRO</h1>
    </Row>
    <Row className='px-3'>
    <FormControl
        as="select"
        id="inlineFormCustomSelect"
        custom
        onClick={handleDropdown}
      >
        <option value='0'>Escoger Region</option>
        <option value="metro">Metro</option>
        <option value="oeste">Oeste</option>
      </FormControl>
    </Row>
    </div>
    
  );
};

export default DropdownInput;