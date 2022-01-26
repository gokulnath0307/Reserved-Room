import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Button, Col, Container, Row } from 'react-bootstrap'
import { VscAccount } from 'react-icons/vsc';
import jwt_decode from 'jwt-decode'
import Header from '../Header/Header'
import Booking from './Booking'
import axios from 'axios';
import moment from 'moment';
import Profile from './Profile'

export default function Calendar() {

    const [showBooking, setShowBooking] = useState(false)
    const [showProfile,setShowProfile]=useState(false)
    const [event, setEvent] = useState([])
    const calendarRef = useRef(null)

  
    const onEventAdded = (e) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            startingTime: moment(e.startingTime).toDate(),
            endingTime: moment(e.endingTime).toDate(),
            department: e.department,
            
           

        })
    }

    async function handleEventAdd(data) {
       console.log(data.events)
        await axios.post('/booking/add', data.events) 
        console.log(data.events)
    }

    async function handleDateSet(data) {
        const response = await axios.get('/booking/getBooking?startingTime='+
            moment(data.startingTime).toISOString() +
            "&endingTime=" + moment(data.endingTime).toISOString())
        setEvent(response.data)
       // console.log(response.data)
    }

    const token = localStorage.getItem('userToken')
   // console.log((token))
    const decoded = jwt_decode(token)
    const Username=decoded.name
    
    const logOut =()=>{
    
        localStorage.removeItem('userToken')
        alert("LogOut Successfully")
        window.location='/'


    }

    return (
        <div>
          {/* <Header /> */}

            <Container className='my-4'>
                <div>
                    <p className='fs-4 text-end'><span>User:</span><span className='fs-3'>{Username}</span>
                    <span className='mx-3'><VscAccount size={35} onClick={() => setShowProfile(true)}  /></span>
                    <span><Button className='btn-danger mx-3' onClick={()=>logOut()}>Logout</Button></span>
                    </p>
                </div><br/>
                <Row>
                    <Col lg={9} className='calendar'>
                        <FullCalendar
                            ref={calendarRef}
                            events={event}
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            eventAdd={e => handleEventAdd(e)}
                            datesSet={date => handleDateSet(date)}

                        />
                    </Col>
                    <Col lg={2}>
                        <Button variant='info' onClick={() => setShowBooking(true)}>
                            Add Booking
                        </Button>
                    </Col>
                </Row>
                <Booking show={showBooking} onHide={() => setShowBooking(false)} onEventAdded={(e)=>onEventAdded(e)}/>
                <Profile show={showProfile} onHide={()=>setShowProfile(false)}/>
            </Container> 
 ``       </div>
    )
}
 