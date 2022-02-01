import React, {  useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import axios from 'axios'

export default function Booking({ show, onHide }) {
  const [department, setDepartment] = useState('')
  const [reason, setReason] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [date ,setDate]=useState(new Date())

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      start,end,date,department,reason,name,email
    }
      axios.post('/booking/add', data)
        .then(() => {
          alert('Booking successfully')
         setTimeout(()=>window.location = '/',500) 
        })
        .catch(err => {
          console.log(err)
        })
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
          <form onSubmit={onSubmit}>

            <Row>
              <Col lg={6}>
              <label>Start Time</label>
            <div className='form'>
              <select className='form' value={start} onChange={e=>setStart(e.target.value)} required={true}>
                <option>Select starting time</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 PM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
              </select>
            </div>
            
              </Col>
              <Col lg={6}>
              <label>End Time</label>
            <div className='form'>
            <select className='form' value={end} onChange={e=>setEnd(e.target.value)} required={true}>
                <option>Select Ending time</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 PM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
              </select>
            </div>
              </Col>
            </Row>
            <label>Date</label>
            <div className='form'>
              <input type='date' value={date} onChange={e => setDate(e.target.value)} className='' placeholder='Select The Date' required={true} />
            </div>
            <label>Department</label>
            <div className='form'>
              <input type='text' value={department} onChange={e => setDepartment(e.target.value)} className='' placeholder='Enter Your Department' required />
            </div>
            <label>Reason For Booking</label>
            <div className='form'>
              <input type='text' value={reason} onChange={e => setReason(e.target.value)} className='' placeholder='Enter your Reason For Booking' required />
            </div>
            <label>Staff Name</label>
            <div className='form'>
              <input type='text' value={name} onChange={e => setName(e.target.value)} className='' placeholder='Enter your Name' required />
            </div>
            <label>Email</label>
            <div className='form'>
              <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='' placeholder='Enter Your Email ID' required />
            </div>

            <button className='formButton'>Booking</button>

          </form >


        </Modal.Body>

      </Modal>
    </div>
  )
}
