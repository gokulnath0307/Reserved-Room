import React from 'react';
import {Modal,Table } from 'react-bootstrap';
import jwt_decode from 'jwt-decode'
export default function Profile({ show, onHide }) {

     const token = localStorage.getItem('userToken')
        const decoded = jwt_decode(token)
        const name = decoded.name
        const department =decoded.department
        const email =decoded.email



    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-5'>
                    <Table bordered>
                        <tbody className="text-center fs-5">
                            <tr>
                                <td>Department</td>
                                <td>{department}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Email ID</td>
                                <td>{email}</td>
                            </tr>
                        </tbody>
                    </Table> 
                </Modal.Body>

            </Modal>
        </div>
    );
}
