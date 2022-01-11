import React,{useState} from 'react'
import {Form,Modal,Col,InputGroup,Button} from 'react-bootstrap'

export default function Register(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          
        }
    
        setValidated(true);
      };
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mx-5'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="Login">
      
          
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Name</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            placeholder="Name"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
           Enter a Name
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Department</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Enter a Department
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Email</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="email"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Enter a Email
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            create a Password
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

    
    
    <Button type="submit" className="my-4" >Register</Button>
    
  </Form>
      </Modal.Body>
      
    </Modal>
        </div>
    )
}
