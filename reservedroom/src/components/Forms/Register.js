import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Register(props) {

  const [name,setName]=useState('');
  const [department,setDepartment]=useState('')
  const [email,setEmail]=useState('')
  const [password ,setPassword]=useState('')
  const [err, setErr] = useState([]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data={
      name,department,email,password
    }
    if(validate()){
      setErr(err)
      console.log(data)
      axios.post('/user/register',data)
    //  console.log(data)
      .then(()=>{
        
        alert("Registerd Successfully")
        window.location='/'
      })
      .catch(err=>{
        console.log(err)
      })
    }
  };

  const validate = (values) => {
    const errors = [];
    const regex = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;

    if (!name) {
      errors.name = "Name is required";
    }
    if (!department) {
      errors.department = "Department is required";
    }
    if (!email) {
      errors.email = "Email id is required";
    }else if(regex.test(email)){
      errors.email="This is not a valid email format"
    }
    if (!password.length >4) {
      errors.password = "Password must be 4 character";
    } else if (password <8) {
      errors.password = "Password must be 8 character";
    }
    return errors;
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
        <Modal.Body className="mx-5">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <div className="form">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                required={true}
              />
              <p className="text-danger">{err.name}</p>
            </div>
            <label>Department</label>
            <div className="form">
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className=""
                placeholder="Enter Your Department"
                required={true}
              />
              <p className="text-danger">{err.department}</p>
            </div>
            <label>Email</label>
            <div className="form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=""
                placeholder="Enter Your Email ID"
                required={true}
              />
              <p className="text-danger">{err.email}</p>
            </div>
            <label>Password</label>
            <div className="form">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=""
                placeholder="Create a Your Password"
                required={true}
              />
              <p className="text-danger">{err.password}</p>
            </div>

            <button
               className="formButton"
            >
              Register
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
