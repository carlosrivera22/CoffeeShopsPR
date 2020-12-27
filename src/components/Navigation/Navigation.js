import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <Navbar fixed="top" style={{backgroundColor:'#000'}} variant="dark" expand="sm">
            <Navbar.Brand href="/"><b>La Carreta</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className= "text-white" href="/">Inicio</Nav.Link>
                    <Nav.Link className= "text-white" href="/list">Coffee Shops</Nav.Link>
                    <Nav.Link className= "text-white" href="/books">Libros</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
      </Navbar>
     );
}
 
export default Navigation;

