import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import "./Form.css"

export default function Login({show,onHide}) {
 
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
 
  const handleSubmit=()=>{
    axios.post('/User/login',)
    .then(res=>{alert(res.data.message)})
    window.location('/')
  }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault()

  //   const response = await fetch('/User/login', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email, password
  //     })
  //   })

  //   const data = await response.json()

  //   if (!data) {
  //     alert("Invaild password")
  //   } else {
  //     alert("login Successfull")
  //     window.location('/')
  //   }
  // }


  



  return (
    <div>
      <Modal
      onHide={onHide}
        show={show}
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
          <form method='POST'  >
            <label>Email</label>
            <div className='form'>
              <input type='text' value={email} onChange={e=>setEmail(e.target.value)} className='' placeholder='Email' />
            </div>
            <label>Password</label>
            <div className='form'>
              <input type='text' value={password} onChange={e=>setPassword(e.target.value)} className='' placeholder='Password' />
            </div>
            <button type='submit' onClick={() => handleSubmit()} className='formButton'>Register</button>
          </form>
        </Modal.Body>

      </Modal>

    </div>
  )
}
