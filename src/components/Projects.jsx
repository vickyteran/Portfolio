import React, { useRef } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './StyleProjects.css';

const Projects = () => {
  const projects = [
    {
      name: 'WEDDING INVITATION',
      description: 'Modern solution of  a wedding invitation that streamlines the entire confirmation process and gathers all the information in one place. It is compatible with any device, both mobile and desktop.',
      tecnologies: 'REACTJS, TAILWIND, GITHUB',
      link: 'https://wed-practice.vercel.app/'
    },
    {
      name: 'FARMATURNO',
      description: 'Collaborative development. Web application designed to streamline pharmacy queues in Colombia. Users and pharmacys can register, log in, make/offer appointments and administrate them.',
      tecnologies: 'REACTJS, NODEJS, EXPRESS JS, MONGODB, REDUX TOOLKIT, GITHUB',
      link: 'https://c11-02-m-mern-farmaturno.vercel.app/'
    },
    {
      name: 'GYM WEBSITE',
      description: 'Gym management system where clients can create an account, log in and access an online store, while administrators can maintain membership fee records.',
      tecnologies: 'REACTJS, NODEJS, MONGODB, POSTMAN, GITHUB',
      link: 'https://gimnasio.vercel.app/'
    },
    {
      name: 'MOVIES 5i',
      description: 'JavaScript-powered movie website where users can browse and watch movies online.',
      tecnologies: 'HTML, CSS, JAVASCRIPT, GITHUB',
      link: 'https://movies-5i.netlify.app'
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
      <a href={project.link} target="_blank" rel="noopener noreferrer">Explore</a>
    </div>
  );
};

export default Projects;

