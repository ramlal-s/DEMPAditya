import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";
import axios from "axios";

export default class ToD0List extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldsList: {},
      show: false,
      close: false,
      redirect: false,
    };
  }
  componentDidMount() {
    this.getAllFields();
  }
  getAllFields = () => {
    axios.get(`${window.base_url}/${window.getAllFields}`).then((res) => {
      const data = res.data;
      let rowList = [];
      data.fields.forEach((item) => {
        rowList.push(item);
      });
      this.setState({ fieldsList: rowList });
      console.log(this.state.fieldsList);
    });
  };
  handleDisplayDetails = (row) => {
    console.log(row._id);
    this.setState({ show: true });
  };
  handleModalShow = () => {
    this.setState({ modalShow: true });
  };
  render() {
    let { fieldsList } = this.state;
    fieldsList = Array.from(fieldsList);
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm={3} className="sidebar">
              <Sidebar />
            </Col>

            <Col sm={9}>
              <div className="container main-setting">
                <div className="col-md-12 text-left">
                  <h2>รายการสิ่งที่ต้องทำประจำวัน</h2>
                </div>
                {fieldsList.map((item, index) => {
                  return (
                    <div className="col-xl-12 mt-50 " key={item._id}>
                      <table className="table table-hover profile-container">
                        <thead className="setmenubar">
                          <tr>
                            <th scope="col">{item.name}</th>
                            <th scope="col"></th>

                            <th scope="col">
                              <div
                                className="col-md-12 text-right plusbtnset pointer"
                                onClick={() => this.handleDisplayDetails(item)}
                              >
                                + เพิ่มรายการที่ต้องทำ
                              </div>
                            </th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>

                        <tbody className="setting-tab">
                          <tr>
                            <td> </td>
                            <td>pH สูงเกินไป</td>
                            <td>เติมปุ๋ยเบอร์</td>
                            <td> </td>
                            <td>
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                              ></i>{" "}
                            </td>
                          </tr>
                        </tbody>

                        <tbody className="setting-tab">
                          <tr>
                            <td>
                              <input type="checkbox"></input>{" "}
                            </td>
                            <td>รดน้ำ</td>
                            <td>ทุกวัน</td>
                            <td>
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                            </td>
                            <td>
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                              ></i>{" "}
                            </td>
                          </tr>
                        </tbody>

                        <tbody className="setting-tab">
                          <tr>
                            <td>
                              <input type="checkbox"></input>{" "}
                            </td>
                            <td>ตรวจสอบศัตรูพืช</td>
                            <td>ทุก 2 วัน</td>
                            <td>
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                            </td>
                            <td>
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                              ></i>{" "}
                            </td>
                          </tr>
                        </tbody>

                        <tbody className="setting-tab">
                          <tr>
                            <td>
                              <input type="checkbox"></input>{" "}
                            </td>
                            <td>ใส่ปุ๋ย 100940</td>
                            <td>10 วันหลังจากเริ่มปลูก</td>
                            <td>
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                            </td>
                            <td>
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                              ></i>{" "}
                            </td>
                          </tr>
                        </tbody>

                        <tbody className="setting-tab">
                          <tr>
                            <td>
                              <input type="checkbox"></input>{" "}
                            </td>
                            <td>ใส่ปุ๋ย 28940</td>
                            <td>10 วันหลังจากใส่ปุ๋ย 100940</td>
                            <td>
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                            </td>
                            <td>
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                              ></i>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          show={this.state.show}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div>
              <div className="cardContainer bg-white text-center">
                <div className="widget-title-new">
                  <h2 className="stitle fc-blue-1 text-center mb-0">
                    รายการสิ่งที่ต้องทำบนแปลงที่มีการเพาะปลูก
                  </h2>
                </div>

                <Row>
                  <Col sm={4} className="fs-18 pophead text-left p-15">
                    รายการที่ต้องทำ
                  </Col>
                  <Col sm={8} className="fs-18 text-left p-15">
                    <input type="text" placeholder="รดน้ำ" />
                  </Col>
                </Row>

                <Row>
                  <Col sm={4} className="fs-18 pophead text-left p-15">
                    ระยะเวลา
                  </Col>
                  <Col sm={8} className="fs-18 text-left pophead p-15">
                    <input type="radio" id="male" name="gender" value="male" />{" "}
                    เป็นประจำ
                  </Col>
                  <Col sm={4} className="fs-18 pophead text-left"></Col>
                  <Col sm={8} className="fs-18 text-left">
                    <input type="radio" id="male" name="gender" value="male" />
                    <select
                      name="ข้าวหอมมะลิ"
                      id="ข้าวหอมมะลิ"
                      className="textprobox"
                      text-center
                    >
                      <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                      <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                      <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                      <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                    </select>
                  </Col>
                  <Col sm={4} className="fs-18 pophead text-left"></Col>
                  <Col sm={8} className="fs-18 text-left">
                    <input
                      type="text"
                      placeholder="3"
                      className="textinputbox"
                    />
                    <select
                      name="ข้าวหอมมะลิ"
                      id="ข้าวหอมมะลิ"
                      className="textprobox"
                      text-center
                    >
                      <option value="วัน">วัน</option>
                      <option value="วัน 1">วัน 1</option>
                      <option value="วัน 2">วัน 2</option>
                      <option value="วัน 3">วัน 3</option>
                    </select>
                  </Col>

                  <Col sm={4} className="fs-18 pophead text-left p-15"></Col>
                  <Col sm={8} className="fs-18 text-left pophead p-15">
                    <input type="radio" id="male" name="gender" value="male" />{" "}
                    หลังจาก
                  </Col>
                  <Col sm={4} className="fs-18 pophead text-left p-15"></Col>
                  <Col sm={8} className="fs-18 text-left">
                    <select
                      name="ข้าวหอมมะลิ"
                      id="ข้าวหอมมะลิ"
                      className="textprobox"
                      text-center
                    >
                      <option value="เริ่มปลูก">เริ่มปลูก</option>
                      <option value="เริ่มปลูก 1">เริ่มปลูก 1</option>
                      <option value="เริ่มปลูก 2">เริ่มปลูก 2</option>
                      <option value="เริ่มปลูก 3">เริ่มปลูก 3</option>
                    </select>
                    <input
                      type="text"
                      placeholder="10"
                      className="textinputbox"
                    />
                    <select
                      name="ข้าวหอมมะลิ"
                      id="ข้าวหอมมะลิ"
                      className="textprobox"
                      text-center
                    >
                      <option value="สัปดาห์">สัปดาห์</option>
                      <option value="สัปดาห์ 1">สัปดาห์ 1</option>
                      <option value="สัปดาห์ 2">สัปดาห์ 2</option>
                      <option value="สัปดาห์ 3">สัปดาห์ 3</option>
                    </select>
                  </Col>

                  <div className="col-md-12 mt-25">
                    <button
                      type="button"
                      onClick={() => this.setState({ show: false })}
                      className="btn white btn-set-log mr-18 ml-auto"
                    >
                      ยกเลิก
                    </button>
                    <button
                      type="button"
                      className="btn white btn-set-logs mr-18 ml-auto"
                    >
                      ยืนยัน
                    </button>
                  </div>
                </Row>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
