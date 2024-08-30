import React from 'react';
import "./StyleSkills.css";
import Card from 'react-bootstrap/Card';



const Skills = () => {

    const icons = [
        {
          name: "HTML",
          img: "/html.png",
          experience: 4 
        },
        {
          name: "CSS",
          img: "/css.png",
          experience: 4
        },
        {
          name: "JAVA SCRIPT",
          img: "/js.png",
          experience: 3
        },
        {
          name: "REACT",
          img: "/react.png",
          experience: 3
        },
        {
          name: "NODEJS",
          img: "/nodejs.png",
          experience: 2
        },
        {
          name: "GITHUB",
          img: "/github.png",
          experience: 4
        },
        {
          name: "MONGO DB",
          img: "/mongodb.png",
          experience: 2
        },
        {
          name: "POSTMAN",
          img: "/postman.png",
          experience: 4
        },
        {
          name: "REDUX",
          img: "/redux.png",
          experience: 3
        },
        {
          name: "TAILWIND",
          img: "/tailwind.png",
          experience: 3
        },
        {
          name: "BOOTSTRAP",
          img: "/bootstrap.png",
          experience: 3
        },
        {
          name: "AGILE METHODOLOGIES",
          img: "/agile.png",
          experience: 4
        },
      
      ];
    
  return (
    
<div className='iconos'>
          {icons.map((icon) => (
            <div className='icon' key={icon.name}>
              <div className="card">
                <div className="card-face card-front">
                  <Card.Img className='icon-img' variant="top" src={icon.img} alt='logo' />
                  <Card.Body>
                    <Card.Title className='icon-title'>{icon.name}</Card.Title>
                  </Card.Body>
                </div>
                <div className="card-face card-back">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`star ${index < icon.experience ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    
  )
}

export default Skills