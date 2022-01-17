import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Button, Col, Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import Booking from './Booking'
import axios from 'axios';
import moment from 'moment';

export default function Calendar() {

    const [showBooking, setShowBooking] = useState(false)
    const [event, setEvent] = useState([])
    const calendarRef = useRef(null)

  
    const onEventAdded = (e) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            startingTime: moment(e.startingTime).toDate(),
            endingTime: moment(e.endingTime).toDate(),
            // department: e.department,
            // reason: e.reason,
            // name: e.name,
            email: e.email,

        })
    }

    async function handleEventAdd(data) {
        console.log(data.booking )
        await axios.post('http://localhost:5000/bookingForm/add', data.booking)
    }

    async function handleDateSet(data) {
        const response = await axios.get('http://localhost:5000/booking/getBooking?startingTime=' +
            moment(data.startingTime).toISOString() +
            "&endingTime=" + moment(data.endingTime).toISOString())
        setEvent(response.data)

    }
    return (
        <div>
            <Header />

            <Container className='my-4'>
                <Row>
                    <Col lg={9} className='calendar'>
                        <FullCalendar
                            ref={calendarRef}
                            events={event}
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            eventAdd={(e) => handleEventAdd(e)}
                            datesSet={(date) => handleDateSet(date)}

                        />
                    </Col>
                    <Col lg={2}>
                        <Button variant='info' onClick={() => setShowBooking(true)}>
                            Add Booking
                        </Button>
                    </Col>
                </Row>
                <Booking show={showBooking} onHide={() => setShowBooking(false)} onEventAdded={(e)=>onEventAdded(e)}/>
            </Container>
        </div>
    )
}
 