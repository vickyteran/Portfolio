import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './StyleContactform.css';

function Contactform() {

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

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_m43k9tw', 'template_portfolio', Form.current, {
  //       publicKey: 'Fm_ibsgW1oeGrAhJu',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };


  return (
    <Form onSubmit={handleSubmit} >
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control className='input' type="name" name="name" value={formData.name}
          onChange={handleChange}
          required  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='input' type="email" name="email" value={formData.email}
          onChange={handleChange}
          required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Message</Form.Label>
        <Form.Control className='input' as="textarea" name="message" value={formData.message}
          onChange={handleChange}
          required rows={3} />
      </Form.Group>
      <Button  type="submit"  target='_blank' className='button' >
        Send
      </Button>
    </Form>
  );
}

export default Contactform;