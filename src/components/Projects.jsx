import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {

    const projects = [
        {
            name: 'MOVIE SEARCH WEBSITE',
        description: 'For the second module project, we developed a JavaScript-powered movie website. Users can browse and watch movies online.',
        tecnologies: 'HTML, CSS, JAVASCRIPT'
    },
    {
        name: 'name',
    description: 'hh'
}

    ]
  return (
    <div>
{projects.map((project) => (
 <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>{project.name}</Card.Title>
   <Card.Text>
     {project.description}
   </Card.Text>
   <Card.Text>
    {project.tecnologies}
   </Card.Text>
   <Button variant="primary"> Explore</Button>
 </Card.Body>
</Card>
))}
    
   
    </div>
  );
}

export default Projects;