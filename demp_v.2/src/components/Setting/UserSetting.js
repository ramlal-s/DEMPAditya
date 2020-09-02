import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import profileicon from '../../resources/images/profile-icon.png';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

export default class SmartFarm extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row >
            <Col sm={4} className="ml-auto mt-80">
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
            </Col>
            <Col sm={12} className="">
                <h1 class="h-value mb-50">แก้ไขบัญชีผู้ใช้</h1>

                <div class="cardProfile">
                    <Row>
                        <Col className="text-right"><span className="stitle"> 2 บัญชี &nbsp;&nbsp;</span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; filter by</Col>
                        <Col>
                            <select name="ระดับ" id="ระดับ" class="smartdropdown">
                                <option value="ระดับ">ระดับ</option>
                                <option value="ระดับ">ระดับ</option>
                                <option value="ระดับ">ระดับ</option>
                                <option value="ระดับ">ระดับ</option>
                            </select>
                        </Col>
                        <Col className="wbutton">
                            <Button variant="outline-secondary">ค้นหา</Button>{' '}
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </div>
                <br></br>
                <div class="cardProfile">
                <Table responsive>
                    <thead className="text-center protable">
                        <tr>
                        <th>ชื่อ</th>
                        <th>อีเมล</th>
                        <th>ระดับ</th>
                        <th>อนุมัติโดย</th>
                        </tr>
                    </thead>
                    <tbody className="text-center protable">
                        <tr>
                        <td>Natchanok</td>
                        <td>Natchanok.t@vekin.com</td>
                        <td>ผู้ดูแลระบบ</td>
                        <td>Vekin <span className="edibtn text-right">แก้ไข <i class="fa fa-pencil" aria-hidden="true"></i></span></td>
                        </tr>
                        <tr>
                        <td>Sani</td>
                        <td>Sani.s@vekin.com</td>
                        <td>ผู้ดูแลระบบ</td>
                        <td>Vekin <span className="edibtn text-right">แก้ไข <i class="fa fa-pencil" aria-hidden="true"></i></span></td>
                        </tr>
                        
                    </tbody>
                    </Table>
                </div>
            </Col>
            
        </Row>
        <div className="row mr-0 mt-50 md-5">
            <button
                type="button"
                className="btn outline-secondary btn-red mr-18 mr-auto"
                >เลือกภาพ
            </button>
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
