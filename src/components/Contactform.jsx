import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './StyleContactform.css';

function Contactform() {

  const contactInfo = [
    { name: 'Argentina', icon: '/location.png' },
    { name: 'victoriamariateran@gmail.com', icon: '/message.png' },
    { name: '+543815736937', icon: '/phone.png' },
    { name: 'Linkedln', icon: '/linkedln.png', path: "https://www.linkedin.com/in/victoriamariateran"},
    { name: 'Git Hub', icon: '/github2.png', path:"https://github.com/vickyteran"  }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS values
    const serviceID = 'service_m43k9tw';
    const templateID = 'template_portfolio';
    const userID = 'Fm_ibsgW1oeGrAhJu';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send email.');
      });
  };

  return (
    <div className='contact'>
      <div className='contact-info'>
        <h5>Stay in Touch!</h5>
        <div className='contact-info-info'>
          {contactInfo.map((contact, index) => (
            <div key={index} className='contact-item'>
              <div className='contact-info-img'>
                <img src={contact.icon} alt={`${contact.name} Icon`} />
              </div>
              <div className='contact-info-text'>
                <a href={contact.path} target='blank'>{contact.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form onSubmit={handleSubmit} className='contact-form'>
        <div className='contact-form-name'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control className='input' type="name" name="name" value={formData.name}
              onChange={handleChange}
              required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='input' type="email" name="email" value={formData.email}
              onChange={handleChange}
              required />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control className='input input-message' as="textarea" name="message" value={formData.message}
              onChange={handleChange}
              required rows={3} />
          </Form.Group>
          <Button type="submit" target='_blank' className='button'  variant='ligth'>
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Contactform;
