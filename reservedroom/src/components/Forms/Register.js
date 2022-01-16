import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Register(props) {

  const [newUser, setNewUser] = useState({
    name: '',
    department: '',
    email: '',
    password: ''
  })

  const handleInput=(e)=>{
    const{name,value}=e.target
    setNewUser({
      ...newUser,[name]:value
    })
  }
  // const handleSubmit = async (e) => {
  //   console.log(e)
  //   e.preventDefault()
  //   const {
  //     name,
  //     department,
  //     email,
  //     password
  //   } = newUser

  //   const response = await axios.post('/User/register', {
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name,
  //       department,
  //       email,
  //       password
  //     })
  //   })
  //     const data=await response.json()
  //     if(!data){
  //       alert("fill the field")
  //     }else{
  //       alert('Register Successfully')
  //       window.location('/')
  //     }
  // }

    const handleSubmit=(e)=>{
      e.preventDefault()

      const {name,department,email,password}=newUser
      if(name&&department&&email&&password){
        axios.post('/User/register',newUser)
       .then(()=>{
         alert('Register Successfully')
         window.location('/')
       }) 
       .catch(()=>{
         alert("Fill the Field")
       })
      }
    }
 



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
          <form  method='POST' >
            <label>Name</label>
            <div className='form'>
              <input type='text' value={newUser.name} name='name' onChange={handleInput} className='' placeholder='Enter your Name' />
            </div>
            <label>Department</label>
            <div className='form'>

              <input type='text' value={newUser.department} name='department' onChange={handleInput} className='' placeholder='Enter Your Department' />
            </div>
            <label>Email</label>
            <div className='form'>

              <input type='email' value={newUser.email} name='email' onChange={handleInput} className='' placeholder='Enter Your Email ID' />
            </div>
            <label>Password</label>
            <div className='form'>
              <input type='text' value={newUser.password} name='password' onChange={handleInput} className='' placeholder='Create a Your Password' />
            </div>
            <button type='submit' onClick={()=>handleSubmit()} className='formButton'>Register</button>
          </form>
        </Modal.Body>

      </Modal>
    </div>
  )
}
