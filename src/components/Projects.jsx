import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './StyleProjects.css';

function Projects() {

    const projects = [
        {
            name: 'MOVIE SEARCH WEBSITE',
        description: 'For the second module project, we developed a JavaScript-powered movie website. Users can browse and watch movies online.',
        tecnologies: 'HTML, CSS, JAVASCRIPT, GITHUB'
    },
    {
        name: 'GYM WEBSITE',
    description: 'We developed a gym management system as a group project using React.js for the frontend and Node.js for the backend. Clients can access an online store, while administrators can maintain membership fee records.',
    tecnologies: 'REACTJS, NODEJS, MONGODB, POSTMAN, GITHUB'
},
{
    name: 'FARMATURNO',
description: 'We developed a gym management system as a group project using React.js for the frontend and Node.js for the backend. Clients can access an online store, while administrators can maintain membership fee records.',
tecnologies: 'REACTJS, NODEJS, MONGODB, POSTMAN, GITHUB'
}

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
   <Button variant="light"> Explore</Button>
 </Card.Body>
</Card>
))}
    
   
    </div>
  );
}

export default Projects;