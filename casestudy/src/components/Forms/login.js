import React,{useState} from 'react'
import {Modal,Form,Col,InputGroup,Button} from 'react-bootstrap'
import "./Form.css"
import Register from './Register';

export default function Login(props) {
    const [validated, setValidated] = useState(false);
    const [modalshow,setModalShow]=useState(false)

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
          Login Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mx-5'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="Login">
      
          
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Enter a username.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">&#128274;</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Enter a Password
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

    
    
    <Button type="submit" className="my-4" >Login</Button>
    <p>if you don't account : <a href='/register' onClick={()=>setModalShow(false)}>Register</a></p>
  </Form>
      </Modal.Body>
      
    </Modal>
    <Register
    show={modalshow} onHide={() => setModalShow(false)}
    />
        </div>
    )
}
