import React, {  useEffect, useState } from 'react'
import {Row,Col, Card,Container} from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSideMenu from '../SideMenu/AdminSideMenu'
import'../Admin.css'

export default function AdminDashboard() {
    
    const [booking ,setBooking]=useState([])
    const [id]=useState('')
    useEffect(()=>{
        axios.get(`/booking/getBooking/${id}`)
        .then(res=>{
            setBooking(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        getBooking()
    })

    const getBooking=()=>{
        const loggedUser=localStorage.getItem("userToken")
        const decodeUser=jwt_decode(loggedUser)
        setBooking(decodeUser.id)
        localStorage.clear()
    }
    return (
        <div>
           <div>
               <AdminHeader/>
            </div>
            <Container className="AdminPage">
                <Row className="my-1">
                    <Col lg={3}>
                        <AdminSideMenu/>
                    </Col>
                    <Col lg={9}>
                        <Card className="p-4">
                           <h4>View Booking View</h4>
                           <div className=''>
                               <table>
                                   <thead>
                                       <th>Department</th>
                                       <th>Reason</th>
                                       <th>Staff Name</th>
                                       <th>Date</th>
                                       <th>Starting Time</th>
                                       <th>Ending Time</th>

                                   </thead>
                                   <tbody>
                                       <tr>
                                          {booking.map(value=>
                                            <tr>
                                                <td>{value.department}</td>
                                            </tr>
                                            )} 
                                       </tr>
                                   </tbody>
                               </table>
                           </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
