import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";
import Upload from "../../resources/images/upload.png";

export default class CreatePlant extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={3} className="sidebar">
            <Sidebar />
          </Col>

          <Col sm={9}>
            <div className="container main-setting">
              <div className="col-md-12 text-right plusbtn">
                + เพิ่มชนิดของพืช
              </div>

              <div className="col-xl-12 mt-50">
                <table className="table table-hover">
                  <thead className="text-center">
                    <tr className="setmenubar">
                      <th scope="col"></th>
                      <th scope="col">ชนิดของพืช</th>
                      <th scope="col">ผลผลิตต่อไร่</th>
                      <th scope="col">ราคาต่อกิโลกรัม</th>
                      <th scope="col">ราคาต่อไร่</th>
                      <th scope="col">ระยะเวลาปลูก</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <th scope="row">
                        <img
                          className="setting-icon text-center w-100"
                          src={Upload}
                          alt="Upload"
                        />
                      </th>
                      <td className="rowCell">ข้าวหอมมะลิ</td>
                      <td>50kg</td>
                      <td>75 บาท</td>
                      <td>3,750 บาท</td>
                      <td>90 วัน</td>
                      <td>
                        <i className="fa fa-search" aria-hidden="true"></i>{" "}
                        ดูรายละเอียด
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <th scope="row">
                        <img
                          className="setting-icon text-center w-100"
                          src={Upload}
                          alt="Upload"
                        />
                      </th>
                      <td className="rowCell">ข้าวหอมมะลิ</td>
                      <td className="rowCell">50kg</td>
                      <td className="rowCell">75 บาท</td>
                      <td className="rowCell">3,750 บาท</td>
                      <td className="rowCell">90 วัน</td>
                      <td className="rowCell">
                        <i className="fa fa-search" aria-hidden="true"></i>{" "}
                        ดูรายละเอียด
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <th scope="row">
                        <img
                          className="setting-icon text-center w-100"
                          src={Upload}
                          alt="Upload"
                        />
                      </th>
                      <td>ข้าวหอมมะลิ</td>
                      <td>50kg</td>
                      <td>75 บาท</td>
                      <td>3,750 บาท</td>
                      <td>90 วัน</td>
                      <td>
                        <i className="fa fa-search" aria-hidden="true"></i>{" "}
                        ดูรายละเอียด
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <th scope="row">
                        <img
                          className="setting-icon text-center w-100"
                          src={Upload}
                          alt="Upload"
                        />
                      </th>
                      <td>ข้าวหอมมะลิ</td>
                      <td>50kg</td>
                      <td>75 บาท</td>
                      <td>3,750 บาท</td>
                      <td>90 วัน</td>
                      <td>
                        <i className="fa fa-search" aria-hidden="true"></i>{" "}
                        ดูรายละเอียด
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
