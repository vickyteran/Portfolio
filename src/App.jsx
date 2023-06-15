import { useState } from 'react'
import './App.css'
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  

  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header className="welcome-section">
    
      <Container>
        
        <h1>Hello</h1>
        <h2>I'm Victoria Teran</h2>
        <p>Full Stack developer & Arquitect</p>
        <Button variant='dark'>Contact me</Button>
        
        
      </Container>
      <Container>
        <img src='../public/yo.png' className='perfil'/>
        </Container>
      
     
    </header>
    
    <section className="about-section">
      <Container>
        <h2>About Me</h2>
        {/* Agrega aquí información sobre ti, certificaciones y experiencias */}
        <Button>View CV</Button>
      </Container>
    </section>
    <section className="skills-section">
      <Container>
        <h2>Skills</h2>
        {/* Agrega aquí tu grilla de skills */}
      </Container>
    </section>
    <section className="projects-section">
      <Container>
        <h2>Projects</h2>
        {/* Agrega aquí tus proyectos en forma de cards */}
      </Container>
    </section>
    
    <section className="contact-section">
      <Container>
        <h2>Contact</h2>
        {/* Agrega aquí la sección de contacto vía email y WhatsApp */}
      </Container>
    </section>
  </div>
  )
}

export default App
