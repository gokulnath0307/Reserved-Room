import React from 'react';
import {  Button, ButtonGroup, Modal,Table } from 'react-bootstrap';

export default function Profile({ show, onHide }) {

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
                                <td>Depaertment</td>
                                <td>mca</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Gokul</td>
                            </tr>
                            <tr>
                                <td>Email ID</td>
                                <td>tE@GMAIL.COM</td>
                            </tr>
                        </tbody>
                    </Table>
                    
                        <Button className='btn-warning p-2 m-2 w-auto'> Update</Button>  
                    
                </Modal.Body>

            </Modal>
        </div>
    );
}
