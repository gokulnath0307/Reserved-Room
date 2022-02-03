import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import Login from '../Forms/login'
import Register from '../Forms/Register'
import "./Table.css"
import Booking from '../Forms/Booking';
import { CgProfile } from 'react-icons/cg';
import Profile from '../Forms/Profile';



export default function Table() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showBooking, setShowBooking] = useState(false)
    const [showProfile , setShowProfile]=useState(false)

    const [data, setData] = useState([])






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

    useEffect(() => {
        getBooking()
    }, [])

    const getBooking = async () => {
        const response = await axios.get('/booking/getBooking');
        if (response.status === 200) {
            setData(response.data)
        }
    }
    console.log("data===", data)

    if (!localStorage.userToken) {
        return (
            <Container className='Table'>
                <Row>
                    <Col lg={9}>
                        <Card>
                            <table >
                                <thead>
                                    <tr className="p-2">
                                        <th>Department</th>
                                        <th>Reason</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>StartingTime</th>
                                        <th>Endingtime</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>


                            </table>

                            <Slider {...settings}>
                                {
                                    data && data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='p-3'>{value.department}</td>
                                                <td>{value.reason}</td>
                                                <td>{value.name}</td>
                                                <td>{value.date}</td>
                                                <td>{value.start}</td>
                                                <td>{value.end}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </Slider>

                        </Card>

                    </Col>
                    <Col lg={3}>
                        <Button className='mx-2' variant='info' onClick={() => setShowLogin(true)}>
                            Login
                        </Button>
                        <Button className='mx-2' variant='info' onClick={() => setShowRegister(true)}>
                            Register
                        </Button>
                    </Col>
                </Row>
                <Login show={showLogin} onHide={() => setShowLogin(false)} />
                <Register show={showRegister} onHide={() => setShowRegister(false)} />
               
            </Container>
        )
    } else {
        const token = localStorage.getItem('userToken')
        const decoded = jwt_decode(token)
        const name = decoded.name
        console.log(name)

        return (
            <Container className='Table'>
                <div>

                    <h2>Username:
                        <span className='fs-3'>{name}</span>
                        <span className='float-end text-center'>
                            <CgProfile onClick={()=>setShowProfile(true)} />
                            <p className='fs-6 text-center my-2'>View Profile</p>
                        </span>
                    </h2>

                </div>
                <Row className='my-5'>
                    <Col lg={9}>
                        <Card>
                            <table >
                                <thead>
                                    <tr className="p-2">
                                        <th>Department</th>
                                        <th>Reason</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>StartingTime</th>
                                        <th>Endingtime</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>


                            </table>

                            <Slider {...settings}>
                                {
                                    data && data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='p-3'>{value.department}</td>
                                                <td>{value.reason}</td>
                                                <td>{value.name}</td>
                                                <td>{value.date}</td>
                                                <td>{value.start}</td>
                                                <td>{value.end}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </Slider>

                        </Card>

                    </Col>
                    <Col lg={3}>
                        <Button className='mx-2' variant='info' onClick={() => {
                            localStorage.removeItem("userToken")
                            window.location = "/"
                        }}>
                            Logout
                        </Button>
                        <Button className='mx-2' variant='info' onClick={() => setShowBooking(true)}>
                            booking
                        </Button>
                    </Col>
                </Row>
                <Profile show={showProfile} onHide={()=>setShowProfile(false)} />
                <Booking show={showBooking} onHide={() => setShowBooking(false)} />
            </Container>

        )

    }









}
