import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSideMenu from '../SideMenu/AdminSideMenu'

export default function AdminHomepage() {
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
                           <h4>View Booking Details</h4>
                           
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    </div>
  )
}
