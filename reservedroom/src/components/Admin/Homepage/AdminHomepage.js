import React, { useState } from "react";
import { Card, Col, Container, Row ,Tab,Tabs} from "react-bootstrap";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSideMenu from "../SideMenu/AdminSideMenu";
import AddBanner from "./AddBanner";

export default function AdminHomepage() {
  const [key, setKey] = useState("banner");
  return (
    <div>
      <div>
        <AdminHeader />
      </div>
      <Container className="AdminPage">
        <Row>
          <Col lg={3}>
            <AdminSideMenu />
          </Col>
          <Col lg={9}>
            <Card className="p-4">
              <Tabs
                id="tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 TabButton"
              >
                <Tab eventKey="home" title="Add Banner" >
                  <AddBanner/>
                </Tab>
                <Tab eventKey="profile" title="Add Programme">
                  
                </Tab>
                
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
