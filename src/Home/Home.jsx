import React from 'react';
import "./HomeStyle.css";
import Card from 'react-bootstrap/Card';
import { Container, Button} from "react-bootstrap";
import { SiPostman } from "react-icons/si";
import Contactform from '../components/Contactform';
import Projects from '../components/Projects';


const Home = () => {
  const postman = SiPostman;
    const icons = [
        {
          name: "HTML",
          img: "../public/html.png",
        },
        {
          name: "CSS",
          img: "../public/css.png",
        },
        {
          name: "JAVASCRIPT",
          img: "../public/js.png",
        },
        {
          name: "REACT",
          img: "../public/react.png",
        },
        {
          name: "NODEJS",
          img: "../public/nodejs.png",
        },
        {
          name: "GITHUB",
          img: "../public/github.png",
        },
        {
          name: "MONGO DB",
          img: "../public/mongodb.png"
        },
        {
          name: "POSTMAN",
          img: "../public/postman.jpg"
        },
      ];
  return (
    <div className="App">
    <header className="welcome-section">
        <Container>
          <h1>Victoria Terán </h1>
          
          <p>Full Stack developer & Arquitect</p>
          <Button href='#contactMe' variant="dark">Contact me</Button>
        </Container>
        <Container>
          <img src="../public/yo.png" className="perfil" />
        </Container>
      </header>

      <section id='aboutMe' className="about-section">
        <Container >
          <h2>About Me</h2>
          <p>
          Hello, I'm Victoria Teran, a passionate developer who delved into the world of technology in early 2022. With a background in architecture, I discovered my love for programming and have been eager to learn ever since. Having spent a year living abroad, I honed my English skills and gained a valuable international perspective. Currently seeking my first role as a developer, I'm excited to contribute to innovative projects with my creative and problem-solving skills.
          </p>
          <Button variant="light">View Resume</Button>
        </Container>
      </section>
      <section id='skills' className="skills-section">
        <Container>
          <h2>Skills</h2>
          </Container>
          <div className='iconos'>
          {icons.map((icon) => (
            <Card className='icon'>
      <Card.Img variant="top" src= {icon.img} />
      <Card.Body>
        <Card.Title>{icon.name}</Card.Title>
      </Card.Body>
    </Card>

          ))}
          
          </div>
        
      </section>
      <section id='projects' className="projects-section">
        <Container>
          <h2>Projects</h2>
          <Projects/>
        </Container>
      </section>

      <section id='contactMe' className="contact-section">
        <Container>
          <h2>Contact</h2>
          <Contactform/>
          {/* Agrega aquí la sección de contacto vía email y WhatsApp */}
        </Container>
      </section>
    </div>
  )
}

export default Home