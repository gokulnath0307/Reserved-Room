import React, {  useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Update({ show, onHide }) {
  
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [date ,setDate]=useState(new Date())

  const onSubmit=()=>{
    let data={
        start,end,date
    }
    console.log(data)
    axios.put('/booking/editBooking',{data})
    .then(res=>{
        
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
              
            <label>Date</label>
            <div className='form'>
              <input type='date' value={date} onChange={e => setDate(e.target.value)} className='' placeholder='Select The Date' required={true} />
            </div>
           

            <button className='formButton'>Edit Booking</button>

          </form >


        </Modal.Body>

      </Modal>
    </div>
  )
}
