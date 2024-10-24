import React, { useRef } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './StyleProjects.css';

const Projects = () => {
  const projects = [
    {
      name: 'WEDDING INVITATION',
      description: "A modern, automated wedding invitation solution that streamlines the confirmation process and gathers all relevant information in one place. Built with a modular approach using Next.js and Tailwind, it allows for effortless customization for each client. Instead of duplicating code, we use a single codebase and customize styles and content through props, ensuring only one deployment is needed. Fully functional and currently monetized, compatible across mobile and desktop devices.",
      tecnologies: 'REACTJS, NEXTJS, TAILWIND, GITHUB',
      link: 'https://wed-practice.vercel.app/',
      github: "https://github.com/Martinasorialanzi/wedPractice"
    },
    {
      name: 'FINTECH: PAYOUT',
      description: "As part of a multidisciplinary team (frontend, backend, QA, UX design, PM) in NoCountry's labor simulation, I contributed to developing a fully responsive fintech web application. The project incorporated secure user authentication, real-time balance and transaction views, activity filtering and search, and the ability to make transfers. We implemented a light/dark mode for user customization and adhered to agile methodologies (Scrum) throughout the development.",
      tecnologies: 'REACTJS, TAILWIND, REACT ROUTER, JIRA, GITHUB',
      link: 'https://payout-wallet.vercel.app/',
      github: "https://github.com/No-Country-simulation/s17-06-m-java-react"
    },
    {
      name: 'FARMATURNO',
      description: "As part of a multidisciplinary team in NoCountry's labor simulation, I contributed to the development of a web application aimed at optimizing pharmacy queues in Colombia. The project is fully responsive and involved user and pharmacy authentication, appointment scheduling, and management features for both parties. We implemented a robust backend using Node.js, Express, and MongoDB, while managing the frontend state efficiently with Redux Toolkit. Agile methodologies (Scrum) were used throughout the project, ensuring timely delivery and team coordination.",
      tecnologies: 'REACTJS, NODEJS, EXPRESS JS, MONGODB, REDUX TOOLKIT, GITHUB',
      link: 'https://c11-02-m-mern-farmaturno.vercel.app/',
      github: "https://github.com/No-Country/c11-02-m-mern-farmaturno"
    },
    {
      name: 'GYM WEBSITE',
      description: "Developed as part of my studies at Rolling Code, this gym management platform allows clients to create accounts, log in, and access an online store, while administrators can manage membership fee records. The system was designed to enhance administrative efficiency and provide a seamless experience for both gym members and staff.",
      link: 'https://gimnasio.vercel.app/',
      github: "https://github.com/Martinasorialanzi/gimnasio"
    },
    {
      name: 'MOVIES 5i',
      description: "Created during my studies at Rolling Code, this JavaScript-powered movie website allows users to browse, search, and watch movies online. The platform features an interactive interface optimized to enhance the user experience while discovering new films.",
      tecnologies: 'HTML, CSS, JAVASCRIPT, GITHUB',
      link: 'https://movies-5i.netlify.app',
      github: "https://github.com/LucasLon22/Movies-5i"
    },
  ];

  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <Container>
      <div className="carousel-wrapper">
        <Carousel ref={carouselRef} interval={null} indicators={false} controls={false}>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <CardComponent project={project} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <button className="carousel-control-prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </Container>
  );
};

const CardComponent = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p className='project-card-text'>{project.description}</p>
      <p>{project.tecnologies}</p>
      <div className='project-card-links'>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Explore</a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  );
};

export default Projects;

