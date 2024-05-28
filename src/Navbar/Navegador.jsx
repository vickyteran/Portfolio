import React, { useState, useEffect } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Button} from "react-bootstrap";

const Navegador = () => {

  
  

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">VMT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
       
        <Nav  >
        <Nav.Link href='#aboutMe'>About me</Nav.Link>
          <Nav.Link href='#skills'>Skills</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#contactMe' eventKey={2} >
            Contact me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegador