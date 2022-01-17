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
  const [err,setErr]=useState([])

  const handleInput=(e)=>{
    e.preventDefault()
    const{name,value}=e.target
    setNewUser({
      ...newUser,[name]:value
    })
  }

  const formValid=()=>{
    let error
    let handleErr=err
    if(formEmpty(err)){
      error={message:"fill the fields"}
      handleErr.push(error)
      setErr({errors:handleErr});
      handleErr=[]
    }else{
      setErr({errors:[]})
      return true
    }
    
  }

  const formEmpty=({name,department,email,password})=>{
    if(!name.length||!department.length||!email.length||!password.length){
      return true
    }else{
      return false
    }
  }

    const handleSubmit=(e)=>{
      e.preventDefault()

      const data={
        name:newUser.name,
        department:newUser.department,
        email:newUser.email,
        password:newUser.password
      }

      if(formValid){
        setErr({errors:[]})

        axios.post('/user/register',data)
        .then(()=>{
          alert("Registerd Successfully")
          window.location='/'
        })
        .catch(()=>{
          return false
        })
      }
    }
    
   const displayErr=(errormsg)=>{
    console.log("we are in displayerrors")

    console.log(errormsg)

 return  errormsg.map((error)=> 
        <p>{error.message}</p>
   )
  
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
          <form>
            <label>Name</label>
            <div className='form'>
              <input type='text' value={newUser.name} name='name' onChange={(e)=>handleInput(e)} placeholder='Enter your Name' />
            </div>
            <label>Department</label>
            <div className='form'>

              <input type='text' value={newUser.department} name='department' onChange={(e)=>handleInput(e)} className='' placeholder='Enter Your Department' />
            </div>
            <label>Email</label>
            <div className='form'>
              <input type='email' value={newUser.email} name='email' onChange={(e)=>handleInput(e)} className='' placeholder='Enter Your Email ID' />
            </div>
            <label>Password</label>
            <div className='form'>
              <input type='text' value={newUser.password} name='password' onChange={(e)=>handleInput(e)} className='' placeholder='Create a Your Password' />
            </div>

            <p>
              {setErr.length>0&&(
                <div>{displayErr(err)}</div>
              )}
            </p>
            <button type='submit' onClick={(e)=>handleSubmit(e)} className='formButton'>Register</button>
          </form>
        </Modal.Body>

      </Modal>
    </div>
  )
}
