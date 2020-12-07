import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <Navbar bg="dark" variant="dark" className="mb-3" expand="sm">
            <Navbar.Brand href="/">Coffee Shops PR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/list">Coffee Shops</Nav.Link>
                    <Nav.Link href="/books">Libros</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
      </Navbar>
     );
}
 
export default Navigation;

