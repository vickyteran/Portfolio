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
          <h1>Hello</h1>
          <h2>I'm Victoria Teran</h2>
          <p>Full Stack developer & Arquitect</p>
          <Button variant="dark">Contact me</Button>
        </Container>
        <Container>
          <img src="../public/yo.png" className="perfil" />
        </Container>
      </header>

      <section className="about-section">
        <Container>
          <h2>About Me</h2>
          <p>
            Hello, I'm Victoria Teran, a passionate developer who ventured into
            the world of technology in early last year. With a background in
            architecture, I discovered my love for programming and have been
            eager to learn ever since. Combining my creativity and
            problem-solving skills, I am excited to continue growing as a
            developer and contribute to innovative projects.
          </p>
          <Button variant="light">View CV</Button>
        </Container>
      </section>
      <section className="skills-section">
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
      <section className="projects-section">
        <Container>
          <h2>Projects</h2>
          <Projects/>
        </Container>
      </section>

      <section className="contact-section">
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