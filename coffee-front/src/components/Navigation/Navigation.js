import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <Navbar bg="dark" variant="dark" className="mb-3" expand="sm">
            <Navbar.Brand href="/">Coffee Shops PR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/list">Shops</Nav.Link>
                    <Nav.Link href="/books">Book Swap</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
      </Navbar>
     );
}
 
export default Navigation;

