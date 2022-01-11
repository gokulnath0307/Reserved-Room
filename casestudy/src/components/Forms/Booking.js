import React,{useState} from 'react'
import {Form,Modal,Col,InputGroup,Button, Row} from 'react-bootstrap'

export default function Booking(props) {
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
          Booking Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mx-5'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="Login">
      
          
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Department Name</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            placeholder="Department"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
           Enter Your Department Name
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Booking Reason</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            placeholder="Booking Reason"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Enter a Booking Reason
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

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
            Enter your Name
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Date</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="date"
            placeholder="Select booking Date"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Select your Booking Date
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Row>
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Starting Time</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="time"
            placeholder="Select Starting Time"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Select your Starting Time
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Ending Time</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="time"
            placeholder="Select Ending Time"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Select your Ending Time
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      </Row>

    
    
    <Button type="submit" className="my-4" >Register</Button>
    
  </Form>
      </Modal.Body>
      
    </Modal>
        </div>
    )
}
