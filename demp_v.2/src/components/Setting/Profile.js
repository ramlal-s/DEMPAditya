import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import user from '../../resources/images/user.png';
import profileicon from '../../resources/images/profile-icon.png';

export default class SmartFarm extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row >
            <Col sm={8} className="mt-150">
                <h1 class="h-value mb-50">บัญชีของฉัน</h1>
                <div class="cardProfile">
                <Row>
                    <Col sm={4} className="fs-18 fc-blue-1 text-left p-15">Name</Col>  
                    <Col sm={8} className="fs-18 text-left p-15">Natchanok T.</Col>
                </Row>

                <Row>
                    <Col sm={4} className="fs-18 fc-blue-1 text-left p-15">Email</Col>  
                    <Col sm={8} className="fs-18 text-left p-15">Natchanok@vekin.co.th</Col>
                </Row>

                <Row>
                    <Col sm={4} className="fs-18fc-blue-1 text-left p-15">Password</Col>  
                    <Col sm={8} className="fs-18 text-left p-15">******************</Col>
                </Row>

                <Row>
                    <Col sm={4} className="fs-18 fc-blue-1 text-left p-15">Phone Number</Col>  
                    <Col sm={8} className="fs-18 text-left p-15">+66 86132456</Col>
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
        <div className="row mr-0 mt-50 md-25">
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
