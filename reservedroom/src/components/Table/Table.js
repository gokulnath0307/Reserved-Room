import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from '../Forms/login'
import Register from '../Forms/Register'
import "./Table.css"
import axios from 'axios';
import Booking from '../Forms/BookingForm';

// const data = [
//     {
//         department: "BCA", reason: "staff meeting", StaffName: "Gokul", date: "12/1/2212",
//         startingtime: "10.am",
//         endtime: "11am"

//     },
//     {
//         department: "MCA", reason: "student meeting", StaffName: "Pownraj", date: "14/1/2212",
//         startingtime: "12.pm",
//         endtime: "1pm"

//     },
//     {
//         department: "BSC", reason: "hOD MEETING", StaffName: "Arun", date: "18/1/2212",
//         startingtime: "3.pm",
//         endtime: "5pm",
//     },
//     {
//         department: "BSC", reason: "hOD MEETING", StaffName: "Arun", date: "18/1/2212",
//         startingtime: "3.pm",
//         endtime: "5pm",
//     },
//     {
//         department: "BSC", reason: "hOD MEETING", StaffName: "Arun", date: "18/1/2212",
//         startingtime: "3.pm",
//         endtime: "5pm",
//     },
// ]

export default function Table() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showBooking , setShowBooking]=useState(false)
    const [booking ,setBooking]=useState([])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 50,
        beforeChange: function (currentSlide, nextSlide) {
          //  console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
         //   console.log("after change", currentSlide);
        }
    };

    useEffect(()=>{
        axios.get('/booking/getBooking')
        .then(data=>{
            setBooking(data)
           // console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const TableRendering=()=>[
         booking.map((value,index)=>
         <tr>
             <td>{value.department}</td>\
             <td>{value.reason}</td>
             <td>{value.name}</td>
             <td>{value.date}</td>
             <td>{value.startingTime}</td>
             <td>{value.endingTime}</td>
         </tr>
         )
    ]


    return (
        <Container className='Table'>
            <Row>
                <Col lg={9}>
                    <Card>
                    <table >
                        <tr className="p-5">
                            <th>Department</th>
                            <th>Reason</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>StartingTime</th>
                            <th>Endingtime</th>
                        </tr>
                    </table>


                    <Slider {...settings}>
                        {TableRendering}
                    </Slider>
                    </Card>

                </Col>
                <Col lg={3} >
                    <Button className='mx-2' variant='info' onClick={() => setShowLogin(true)}>
                        Login
                    </Button>
                    <Button className='mx-2' variant='info' onClick={() => setShowRegister(true)}>
                        Register
                    </Button>
                    <Button className='mx-2' variant='info' onClick={() => setShowBooking(true)}>
                        booking
                    </Button>

                </Col>
            </Row>

            <Login show={showLogin} onHide={() => setShowLogin(false)} />
            <Register show={showRegister} onHide={() => setShowRegister(false)} />
            <Booking  show={showBooking} onHide={() => setShowBooking(false)} />


        </Container>
    )
}
