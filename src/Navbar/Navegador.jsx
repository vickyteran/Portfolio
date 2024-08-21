import React, { useState, useEffect } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Button} from "react-bootstrap";
import './NavegadorStyle.css';

const Navegador = () => {

  
  

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" variant='dark' className='nav'>
    <Container >
      <Nav.Link className='nav-brand nav-link' href="#home">VMT</Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle' />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
       
        <Nav  >
        <Nav.Link className='nav-link' href='#aboutMe'>About me</Nav.Link>
          <Nav.Link className='nav-link' href='#skills'>Skills</Nav.Link>
          <Nav.Link className='nav-link' href='#projects'>Projects</Nav.Link>
          <Nav.Link className='nav-link' href='#contactMe' eventKey={2} >
            Contact me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegador