import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './StyleProjects.css';

const Projects = () => {
  return (
    // <Container>
    // <Carousel interval={null}>
    //   <Carousel.Item>
        <div className="d-flex justify-cntent-between">
          <CardComponent />
          
        </div>
  //     </Carousel.Item>
     
  //     {/* Agrega más Carousel.Items según sea necesario */}
  //   </Carousel>
  // </Container>
  );
};

const CardComponent = () => {

    const projects = [
        {
            name: 'MOVIES 5i',
        description: 'JavaScript-powered movie website where users can browse and watch movies online.',
        tecnologies: 'HTML, CSS, JAVASCRIPT, GITHUB',
        link: 'https://movies-5i.netlify.app'
    },
    {
        name: 'GYM WEBSITE',
    description: 'Gym management system where clients can create an account, log in and access an online store, while administrators can maintain membership fee records.',
    tecnologies: 'REACTJS, NODEJS, MONGODB, POSTMAN, GITHUB',
    link: 'https://gimnasio.vercel.app/'
},
{
    name: 'FARMATURNO',
description: 'Collaborative development of the "FarmaTurno" web application designed to streamline pharmacy queues in Colombia.',
tecnologies: 'REACTJS, NODEJS, EXPRESS JS, MONGODB, REDUX TOOLKIT, GITHUB',
link: 'https://c11-02-m-mern-farmaturno.vercel.app/'
},
{
  name: 'WEDDING INVITATION',
description: 'Wedding invitation where guests can RSVP and access relevant information.',
tecnologies: 'REACTJS, TAILWIND, GITHUB',
link: 'https://wed-practice.vercel.app/'
},


    ]
  return (
    <div className='projects'>
{projects.map((project) => (
 <Card style={{ width: '18rem' }} className='project'>
 
 <Card.Body>
   <Card.Title>{project.name}</Card.Title>
   <Card.Text>
     {project.description}
   </Card.Text>
   <Card.Text>
    {project.tecnologies}
   </Card.Text>
   <Button href={project.link} target='_blank' variant="light"> Explore</Button>
 </Card.Body>
</Card>
))}
    
   
    </div>
  );
}



export default Projects;