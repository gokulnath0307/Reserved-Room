import React, { useState,useEffect } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Login from '../Forms/login'
import Register from '../Forms/Register'
import "./Table.css"
import Booking from '../Forms/Booking';



export default function Table() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showBooking, setShowBooking] = useState(false)
    const [data,setData]=useState([])

    
   
   
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
        getBooking()
      },[])
    
    const getBooking= async()=>{
      const response=await axios.get('/booking/getBooking');
      if(response.status===200){
        setData(response.data)
      }
    }
    console.log("data===",data)

    


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
                           data&& data.map((value,index)=>{
                               return(
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
            <Booking show={showBooking} onHide={() => setShowBooking(false)} />



        </Container>
    )
}
