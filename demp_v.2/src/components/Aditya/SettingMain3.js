import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";

export default class SettingMain extends React.Component {
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
                  <thead className="setmenubar text-center">
                    <tr>
                      <th scope="col">ชนิดของพืช</th>
                      <th scope="col">ผลผลิตต่อไร่</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <td>pH สูงเกินไป</td>
                      <td>เติมปุ๋ยเบอร์</td>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>{" "}
                        แก้ไข
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <td>pH สูงเกินไป</td>
                      <td>เติมปุ๋ยเบอร์</td>
                      <th></th>
                      <th></th>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>{" "}
                        แก้ไข
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <td>pH สูงเกินไป</td>
                      <td>เติมปุ๋ยเบอร์</td>
                      <th></th>
                      <th></th>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>{" "}
                        แก้ไข
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <td>pH สูงเกินไป</td>
                      <td>เติมปุ๋ยเบอร์</td>
                      <th></th>
                      <th></th>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>{" "}
                        แก้ไข
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <td>pH สูงเกินไป</td>
                      <td>เติมปุ๋ยเบอร์</td>
                      <th></th>
                      <th></th>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>{" "}
                        แก้ไข
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="setting-tab text-center">
                    <tr>
                      <td>pH สูงเกินไป</td>
                      <td>เติมปุ๋ยเบอร์</td>
                      <th></th>
                      <th></th>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>{" "}
                        แก้ไข
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
