import React from 'react';
import { Row, FormControl } from 'react-bootstrap';
const SearchInput = ({ handleSearch }) => {
  return (
    <Row className="p-3">
        <FormControl onChange={handleSearch} type="text" placeholder="Search" />
    </Row>
  );
};

export default SearchInput;