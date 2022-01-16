import React, { useState } from 'react'
import { Button,  Col, Container, Row } from "react-bootstrap"
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
    const [showRegister,setShowRegister]=useState(false)
   

    return (
        <Container className='Table'>
                <Row>
                    <Col lg={9}>
                        <table>
                            <tr>
                                <th>department</th>
                                <th>Reason</th>
                                <th>Name</th>
                                <th>date</th>
                                <th>StartingTime</th>
                                <th>endingtime</th>
                            </tr>
                            {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.department}</td>
              <td>{val.reason}</td>
              <td>{val.StaffName}</td>
              <td>{val.date}</td>
              <td>{val.startingtime}</td>
              <td>{val.endtime}</td>
            </tr>
          )
        })}
                        </table>
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
