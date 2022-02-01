import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSideMenu from '../SideMenu/AdminSideMenu'
import '../Admin.css'
import Update from '../../Forms/Update'

export default function AdminDashboard() {

  
    const [data,setData]=useState([])
    const [showForm,setShowForm]=useState(false)
   
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
        
    const deleteBooking= async(id)=>{
            if(window.confirm("Are you delete the event")){
                console.log(id)
                const response =await axios.post('/booking/deleteBooking',{id})
                if(response.status===200){
                    alert('delete successfully')
                    getBooking(response._id); 
                }
            }
    }

    

    return (
        <div>
            <div>
                <AdminHeader />
            </div>
            <Container className="AdminPage">
                <Row className="my-1">
                    <Col lg={3}>
                        <AdminSideMenu />
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
                                        <th>Edit/Delete</th>

                                    </thead>
                                    <tbody className='p-3'>
                                        
                                            {data.map((value,index) =>
                                                <tr key={index} >
                                                    <td className='p-3'>{value.department}</td>
                                                    <td className='p-3'>{value.reason}</td>
                                                    <td className='p-3'>{value.name}</td>
                                                    <td className='p-3'>{value.date}</td>
                                                    <td className='p-3'>{value.start}</td>
                                                    <td className='p-3'>{value.end}</td>
                                                    <td >
                                           <FaEdit onClick={()=>setShowForm(true)}size={28} className='mx-2' />
                                           <MdDelete onClick={()=>deleteBooking(value._id)} size={28} className='mx-2'/>
                                       </td>
                                                </tr>
                                            )}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Update show={showForm} onHide={()=>setShowForm(false)}/>
        </div>
    )
}
