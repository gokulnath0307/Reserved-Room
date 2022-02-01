import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSideMenu from '../SideMenu/AdminSideMenu'
import axios from 'axios'

export default function UserDetails() {

  const [data,setData]=useState([])
   
  useEffect(()=>{
      getUser()
    },[])
  
  const getUser= async()=>{
    const response=await axios.post('/user/getuser');
    if(response.status===200){
      setData(response.data)
    }
  }
  console.log("data===",data)

  return (
    <div>
      <div>
          <AdminHeader/>
        </div>  
        <div>
        <Container className="AdminPage">
                <Row className="my-1">
                    <Col lg={3}>
                        <AdminSideMenu/>
                    </Col>
                    <Col lg={9}>
                    <Card className="p-4">
                            <h4>Register User Details</h4>
                            <div className='my-4'>
                                <table>
                                    <thead>
                                        <th>Department</th>
                                        <th>Staff Name</th>
                                        <th>Email</th>
                                    </thead>
                                    <tbody>
                                     {
                                       data.map(value=>
                                        <tr>
                                          <td className='p-1 my-2'>{value.department}</td>
                                          <td className='p-1 my-2'>{value.name}</td>
                                          <td className='p-1 my-2'>{value.email}</td>
                                        </tr>
                                        )
                                     }
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    </div>
  )
}
