import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import user from '../../resources/images/user.png';
import profileicon from '../../resources/images/profile-icon.png';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

export default class SmartFarm extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row >
            <Col sm={8} className="mt-150">
                <h1 class="h-value mb-50">แก้ไขบัญชีผู้ใช้</h1>
                <div class="cardProfile">
                <Row>
                    <Col sm={2} className="fs-18 fc-blue-1 text-left p-15">ชื่อ</Col>  
                    <Col sm={10} className="fs-18 text-left p-15"> 
                        <Form.Control type="ชื่อ" placeholder="ชื่อ" />
                    </Col>
                </Row>

                <Row>
                    <Col sm={2} className="fs-18 fc-blue-1 text-left p-15">อีเมล</Col>  
                    <Col sm={10} className="fs-18 text-left p-15"> 
                        <Form.Control type="อีเมล" placeholder="อีเมล" />
                    </Col>
                </Row>

                <Row>
                    <Col sm={2} className="fs-18 fc-blue-1 text-left p-15">รหัสผ่าน</Col>  
                    <Col sm={10} className="fs-18 text-left p-15"> 
                        <Form.Control type="รหัสผ่าน" placeholder="รหัสผ่าน"/>
                        <Form.Control type="ยืนยันรหัสผ่าน" className="mt-10" placeholder="ยืนยันรหัสผ่าน" />
                    </Col>
                </Row>

                <Row>
                    <Col sm={2} className="fs-18 fc-blue-1 text-left p-15">เบอร์ติดต่อ</Col>  
                    <Col sm={10} className="fs-18 text-left p-15"> 
                        <Form.Control type="phone" placeholder="08 XXXX XXXX" />
                    </Col>
                </Row>

                <Row>
                    <Col sm={2} className="fs-18 fc-blue-1 text-left p-15">ระดับ</Col>  
                    <Col sm={10} className="fs-18 text-left p-15"> 
                        <Dropdown className="prodropdn">
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                ระดับ
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </Col>
                </Row>
                </div>
            </Col>
            <Col sm={4} className="mt-80">
                <div className=" m-10">
                    <div class="text-left w-box white row">
                            <div className="col-md-2 mt-10 text-center">
                            <img                  
                                src={profileicon}
                                alt="user"
                                />  
                            </div>
                            <div className="col-md-6 mt-22">
                                <h4>Natchanok T.</h4>
                                <p>natchanok.t@vekin.co.th</p>
                            </div>
                            <div className="col-md-4 text-center mt-30">
                                Admin
                            </div>
                    </div>
                </div>
                <div class="cardProfile">
                    <img                  
                    src={user}
                    alt="user"
                    />                    
                </div>
            </Col>
        </Row>
        <div className="row mr-0 mt-50 md-5">
            <button
                type="button"
                className="btn outline-secondary btn-outline mr-18 ml-auto"
                >เลือกภาพ
            </button>
        </div>
        <div className="row mr-0 mt-2 md-10">
            <button
                type="button"
                className="btn white btn-settings mr-18 ml-auto"
                >แก้ไขบัญชีผู้ใช้
            </button>
        </div>
      </Container>
    );
  }
}
