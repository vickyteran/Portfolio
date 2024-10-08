import React from 'react';
import "./HomeStyle.css";
import { Container, Button } from "react-bootstrap";
import Contactform from '../components/Contactform';
import Projects from '../components/Projects';
import Skills from '../components/skills/Skills';
import Footer from '../components/footer/Footer';



const Home = () => {

  return (
    <div className="App">
      <header className="welcome-section" id='home'>
        <Container className='welcome-section-text'>
          <h1 className='typewriter'>
            
       Victoria Teran
           </h1>

          <p >Full Stack Developer & Architect</p>
          <Button href='#contactMe' className='button' variant='ligth' >Contact me</Button>
        </Container>
        <Container >
          <img src="/fotoperfil.png" className="perfil" />
        </Container>
      </header>

      <section id='aboutMe'  className="about-section">
        <Container >
          <h2>About Me</h2>
          <p className='about-parrafo'>
            Hello!
            I am Victoria Teran, an architect turned passionate developer who ventured into the world of technology in early 2022. My background in architecture has equipped me with strong design skills and a solid foundation in problem-solving.<br />

           I have worked on various web projects that have helped me gain proficiency in technologies and collaborated in teams under agile methodologies, using tools like Trello, Jira,  Git/GitHub, Figma, and Postman. Having spent a year living abroad, I honed my English skills and gained a valuable international perspective.<br />
            
            I am currently working as a freelance Frontend Developer, but I’m looking to join a team to consolidate and strengthen my skills in a professional environment. I am open to both solidifying existing technologies and learning new ones.

          </p>
          <Button href='/cv.pdf' target='_blank' className='button' variant='ligth'>View Resume</Button>
        </Container>
      </section>
      <section id='skills'  className="skills-section">
        <Container>
          <h2>Skills</h2>
          <Skills/>
        </Container>

      </section>
      <section id='projects'  className="projects-section">
        <Container>
          <h2>Projects</h2>
          <Projects />
        </Container>
      </section>

      <section id='contactMe' className="contact-section">
        <Container>
          <h2>Contact Me</h2>
          <Contactform />
          {/* Agrega aquí la sección de contacto vía email y WhatsApp */}
        </Container>
      </section>
      <Footer/>
    </div>
  )
}

export default Home