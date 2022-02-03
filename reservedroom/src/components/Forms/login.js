import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import "./Form.css"

export default function Login({show,onHide}) {
 
  const[login,setLogin]=useState({
    email:'',
    password:''
  })
  const [err,setErr]=useState([])
  
  const handleInput=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setLogin({
      ...login,[name]:value
    })
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault()

    const data={
      email:login.email,
      password:login.password
    }
  console.log(data)
    if(formValid){    
     // console.log("working");
      setErr({errors:[]})
     // console.log("going to see axios");
      axios.post('/user/login',data)
      .then(res=>{
        console.log(res.data)
        if(res.data === "Email id not found"){
          alert("Email id not found")
        }else if(res.data === "Incorrect Password"){
          alert("Incorrect Password")
        }else{
          localStorage.setItem('userToken',res.data)
          localStorage.setItem("role","user")
          alert("Login Successfully")
          window.location='/'
          // console.log(res.data)
        }
      })
    }
  }
  const formValid=()=>{
    let error;
    let handleErr=err
    if(formEmpty(err)){
      error={message:"fill the the fields"}
      handleErr.push(error)
      
      setErr({errors:handleErr});
      handleErr =[];
    }else{
      setErr({errors:[]})
      return true
    }
  }
  const formEmpty=({email,password})=>{
    
    if(!email.length||!password.length){
      return true
    }else{
      return false
    }
  }



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
          <form>
            <label>Email</label>
            <div className='form'>
              <input type='text' name='email' value={login.email} onChange={(e)=>handleInput(e)} className='' placeholder='Email' required/>
            </div>
            <label>Password</label>
            <div className='form'>
              <input type='text' name='password' value={login.password} onChange={(e)=>handleInput(e)} className='' placeholder='Password' required />
            </div>
            <button type='submit' onClick={(e) => handleSubmit(e)} className='formButton'>Login</button>
          </form>
        </Modal.Body>

      </Modal>

    </div>
  )
}
