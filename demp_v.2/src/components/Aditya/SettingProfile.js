import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Redirect } from "react-router-dom";
import Profile from "../../resources/images/profile.png";
import Sidebar from "./Sidebar";
import queryString from "query-string";
import axios from "axios";

export default class SettingProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      plantDetails: {},
      goBack: false,
    };
  }
  componentDidMount() {
    this.getPlantDetails();
  }
  getPlantDetails = () => {
    const params_val = queryString.parse(window.location.search);
    var plantId = params_val.id;

    axios
      .get(`${window.base_url}/${window.getPlantDetails}${plantId}`)
      .then((res) => {
        // console.log("stings", res.data);
        const data = res.data;
        this.setState({ plantDetails: data.plant });
      });
  };
  render() {
    const { plantDetails } = this.state;
    if (this.state.goBack) {
      return <Redirect to="/SettingMain" />;
    }

    //console.log(plantId);
    //  console.log(plantDetails.growthPeriods);
    // let growthPeriods = [];
    // growthPeriods = plantDetails.growthPeriods;
    // console.log("growthPeriods", growthPeriods);
    return (
      <Container fluid>
        <Row>
          <Col sm={3} className="sidebar">
            <Sidebar />
          </Col>

          <Col sm={9}>
            <div className="container main-setting">
              <div className="container">
                <div className="row">
                  <div
                    className="col text-left pointer"
                    onClick={() => this.setState({ goBack: true })}
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    <i className="fa fa-angle-left" aria-hidden="true"></i> กลับ
                  </div>
                  <div className="col text-right">แก้ไข</div>
                </div>
              </div>

              <div className="col-xl-12 mt-25 profile-container">
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <img
                        className="profile-icon text-center w-100"
                        src={plantDetails.imgUrl}
                        alt="Profile"
                      />
                    </Col>
                    <Col xs={12} md={8}>
                      <h2 className="profilename">{plantDetails.name}</h2>
                    </Col>
                  </Row>

                  <Row md={6}>
                    <Col className="prodetails">ผลผลิตต่อไร่</Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.yieldPerSeed}
                    </Col>
                    <Col className="prohead">กิโลกรัม</Col>
                  </Row>

                  <Row md={6}>
                    <Col className="prodetails">ราคาต่อกิโลกรัม</Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.unitCost}
                    </Col>
                    <Col className="prohead">บาท</Col>
                  </Row>

                  <Row md={6}>
                    <Col className="prodetails">ราคาต่อไร่</Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.seedCost}
                    </Col>
                    <Col className="prohead">บาท</Col>
                  </Row>

                  <Row md={6}>
                    <Col className="prodetails">ระยะเวลาปลูก</Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.plantingPeriod}
                    </Col>
                    <Col className="prohead">วัน</Col>
                  </Row>

                  <Row md={4}>
                    <Col className="prodetails">ระยะเวลาการเติบโต</Col>
                    {/*  <Col xs={6} className="profimg">
                      <img
                        className="text-center w-100"
                        src={Profile}
                        alt="Profile"
                      />
                    </Col>
                    <Col xs={6} className="prodata">
                      1 - 20 วัน
                    </Col>
                    <Col className="prohead">ดำนา หว่านเมล็ด</Col> */}
                  </Row>
                  <div>
                    {plantDetails.growthPeriods &&
                      plantDetails.growthPeriods.map((list) => {
                        console.log("list", list);
                        return (
                          <Row md={4}>
                            <Col className="prodetails"></Col>
                            <Col xs={6} className="profimg">
                              <img
                                className="text-center w-100"
                                src={list.imgUrl}
                                alt="Profile"
                              />
                            </Col>
                            <Col xs={6} className="prodata">
                              {list.from} - {list.to} วัน
                            </Col>
                            <Col className="prohead">{list.information}</Col>
                          </Row>
                        );
                      })}
                  </div>
                  {/*    <Row md={4}>
                    <Col className="prodetails"></Col>
                    <Col xs={6} className="profimg">
                      <img
                        className="text-center w-100"
                        src={Profile}
                        alt="Profile"
                      />
                    </Col>
                    <Col xs={6} className="prodata">
                      1 - 20 วัน
                    </Col>
                    <Col className="prohead">ดำนา หว่านเมล็ด</Col>
                  </Row> */}
                  {/*
                  <Row md={4}>
                    <Col className="prodetails"></Col>
                    <Col xs={6} className="profimg">
                      <img
                        className="text-center w-100"
                        src={Profile}
                        alt="Profile"
                      />
                    </Col>
                    <Col xs={6} className="prodata">
                      1 - 20 วัน
                    </Col>
                    <Col className="prohead">ดำนา หว่านเมล็ด</Col>
                  </Row>

                  <Row md={4}>
                    <Col className="prodetails"></Col>
                    <Col xs={6} className="profimg">
                      <img
                        className="text-center w-100"
                        src={Profile}
                        alt="Profile"
                      />
                    </Col>
                    <Col xs={6} className="prodata">
                      1 - 20 วัน
                    </Col>
                    <Col className="prohead">ดำนา หว่านเมล็ด</Col>
                  </Row>

                  <Row md={4}>
                    <Col className="prodetails"></Col>
                    <Col xs={6} className="profimg">
                      <img
                        className="text-center w-100"
                        src={Profile}
                        alt="Profile"
                      />
                    </Col>
                    <Col xs={6} className="prodata">
                      1 - 20 วัน
                    </Col>
                    <Col className="prohead">ดำนา หว่านเมล็ด</Col>
                  </Row> */}

                  <Row md={6}>
                    <Col className="prodetails">ระดับความชื้นในดินต่ำสุด</Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.moistureFrom}% - {plantDetails.moistureTo}%
                    </Col>
                    <Col className="prohead"></Col>
                  </Row>

                  <Row md={6}>
                    <Col className="prodetails">
                      ค่าความเค็มที่เหมาะสม (ppm)
                    </Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.salinityFrom} - {plantDetails.salinityTo}
                    </Col>
                    <Col className="prohead"></Col>
                  </Row>

                  <Row md={6}>
                    <Col className="prodetails">ค่า ph ของน้ำที่เหมาะสม</Col>
                    <Col xs={6} className="prodata">
                      {plantDetails.pHFrom} - {plantDetails.pHTo}
                    </Col>
                    <Col className="prohead"></Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
