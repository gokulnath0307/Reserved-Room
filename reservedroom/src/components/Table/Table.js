import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from '../Forms/login'
import Register from '../Forms/Register'
import "./Table.css"

const data = [
    {
        department: "BCA", reason: "staff meeting", StaffName: "Gokul", date: "12/1/2212",
        startingtime: "10.am",
        endtime: "11am"

    },
    {
        department: "MCA", reason: "student meeting", StaffName: "Pownraj", date: "14/1/2212",
        startingtime: "12.pm",
        endtime: "1pm"

    },
    {
        department: "BSC", reason: "hOD MEETING", StaffName: "Arun", date: "18/1/2212",
        startingtime: "3.pm",
        endtime: "5pm",
    },
    {
        department: "BSC", reason: "hOD MEETING", StaffName: "Arun", date: "18/1/2212",
        startingtime: "3.pm",
        endtime: "5pm",
    },
    {
        department: "BSC", reason: "hOD MEETING", StaffName: "Arun", date: "18/1/2212",
        startingtime: "3.pm",
        endtime: "5pm",
    },
]

export default function Table() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

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
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };


    return (
        <Container className='Table'>
            <Row>
                <Col lg={9}>
                    <Card>
                    <table >
                        <tr className="p-5">
                            <th>department</th>
                            <th>Reason</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>StartingTime</th>
                            <th>Endingtime</th>
                        </tr>
                    </table>


                    <Slider {...settings}>
                        {data.map((val, key) => {
                            return (
                                <>
                                    <div className="my-3" >
                                        <tr>
                                            <td>{val.department}</td>
                                            <td>{val.reason}</td>
                                            <td>{val.StaffName}</td>
                                            <td>{val.date}</td>
                                            <td>{val.startingtime}</td>
                                            <td>{val.endtime}</td>
                                        </tr>
                                    </div>
                                </>
                            )
                        })
                        }
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

                </Col>
            </Row>

            <Login show={showLogin} onHide={() => setShowLogin(false)} />
            <Register show={showRegister} onHide={() => setShowRegister(false)} />


        </Container>
    )
}
