import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Datetime from 'react-datetime';

export default function Booking({ show, onHide, onEventAdded }) {
  const [department, setDepartment] = useState('')
  const [reason, setReason] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [startingTime, setStartingTime] = useState(new Date())
  const [endingTime, setEndingTime] = useState(new Date())

  const onSubmit = (e) => {
    e.preventDefault();
    onEventAdded({
      department,
      reason,
      name,
      email,
      startingTime,
      endingTime
    })

    console.log(onEventAdded)
    

  } 
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
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
          <form >
            <label>Start Time</label>
            <div className='form'>
              <Datetime value={startingTime} onChange={date => setStartingTime(date)} />
            </div>
            <label>End Time</label>
            <div className='form'>
              <Datetime value={endingTime} onChange={date => setEndingTime(date)} />
            </div>
            <label>Department</label>
            <div className='form'>
              <input type='text' value={department} onChange={e => setDepartment(e.target.value)} className='' placeholder='Enter Your Department' required/>
            </div>
            <label>Reason</label>
            <div className='form'>
              <input type='text' value={reason} onChange={e => setReason(e.target.value)} className='' placeholder='Enter your Reason' required/>
            </div>
            <label>Name</label>
            <div className='form'>
              <input type='text' value={name} onChange={e => setName(e.target.value)} className='' placeholder='Enter your Name' required/>
            </div>
            <label>Email</label>
            <div className='form'>
              <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='' placeholder='Enter Your Email ID' required/>
            </div>

            <button onSubmit={(e)=>onSubmit(e)} className='formButton'>Booking</button>
             
          </form >


        </Modal.Body>

      </Modal>
    </div>
  )
}
