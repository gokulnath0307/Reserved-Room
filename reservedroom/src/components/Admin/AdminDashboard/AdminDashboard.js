import React from 'react'
import {Row,Col, Card,Container} from 'react-bootstrap'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSideMenu from '../SideMenu/AdminSideMenu'

export default function AdminDashboard() {


    
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
                           <h4>Welcome to Dashboard</h4>
                           
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
