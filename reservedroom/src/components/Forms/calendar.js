import React,{useRef, useState} from 'react'
import "react-datetime/css/react-datetime.css";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Button, Col, Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import Booking from './Booking'
import axios from 'axios';
import moment from 'moment';

export default function Calendar() {

    const [showBooking,setShowBooking]=useState(false)
    const [event,setEvent]=useState([])
    const calendarRef = useRef(null)


    const onEventAdd=(e)=>{
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            startingTime:moment(e.startingTime).toDate(),
            endingTime:moment(e.endingTime).toDate(),
            department:e.department,
            reason:e.reason,
            name:e.name,
            email:e.email,
            
        })
    }

    async function handleEventAdd(data){
        await axios.post('/BookingForm/add',data.events)
    }

    async function handleDateSet(data){
        const response=await axios.get('/BookingForm/getBooking?startingTime='+
        moment(data.startingTime).toISOString()+
        "&endingTime"+moment(data.endingTime).toISOString())
        setEvent(response.data)

    }
    return (
        <div>
            <Header />

            <Container className='my-4'>
                <Row>
                    <Col lg={10} className='calendar'>
                        <FullCalendar
                            ref={calendarRef}
                            events={event}
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            eventAdd={e=>handleEventAdd(e)}
                            datesSet={date=>handleDateSet(date)}

                        />
                    </Col>
                    <Col lg={2}>
                    <Button variant='info' onClick={() => setShowBooking(true)}>
                           Add Booking
                        </Button>
                    </Col>
                </Row>
                <Booking show={showBooking} onHide={() => setShowBooking(false)} onEventAdd={e=>onEventAdd(e)} />
            </Container>
        </div>
    )
}
