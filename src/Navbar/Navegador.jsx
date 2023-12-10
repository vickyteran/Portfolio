import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Button} from "react-bootstrap";

const Navegador = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">VMT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
       
        <Nav  >
        <Nav.Link >About me</Nav.Link>
          <Nav.Link >Skills</Nav.Link>
          <Nav.Link >Projects</Nav.Link>
          <Nav.Link eventKey={2} >
            Contact me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegador