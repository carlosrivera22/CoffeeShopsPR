import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/">DE LA ISLA</Navbar.Brand>
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

