import React from "react";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Upload from "../../resources/images/upload.png";
import axios from "axios";

export default class CreatePlant extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      formFields: {
        imgUrl: "http://111.223.33.162:5001/images/mongotree-1598410799683.jpg",
      },
      growthPeriods: [
        {
          information: "",
          from: "",
          to: "",
        },
      ],
      goBack: false,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { formFields, growthPeriods } = this.state;
    console.log(name, value);
    if (
      name === "imgUrl" ||
      name === "information" ||
      name === "from" ||
      name === "to"
    ) {
      this.setState({ ...growthPeriods, [name]: value });
      //  this.setState([...growthPeriods, { [name]: value }]);
      // this.setState((prevState) => ({ ...prevState, [name]: value }));
      /*  this.setState({
        growthPeriods: [...growthPeriods, { [name]: value }],
      }); */
      /*  this.setState({
        growthPeriods: {
          ...growthPeriods,
         {[name]: value} 
        },
      }); */
    } else {
      this.setState({
        formFields: {
          ...formFields,
          [name]: value,
        },
      });
    }
  };
  allData() {
    const { formData, formFields, growthPeriods } = this.state;
    this.setState({
      formFields: {
        ...formFields,
        ...growthPeriods,
      },
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.formFields);
    //  console.log(this.state.growthPeriods);
    console.log(this.state.growthPeriods);
    /*  this.allData();
    const { formFields } = this.state;
    console.log(formFields);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      formFields,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://111.223.33.162:5001/api/plant/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error)); */
    /*  axios({
      method: "post",
      url: "http://111.223.33.162:5001/api/plant/create",
      data: {
        formData,
      },
    }).then(function (res) {
      console.log(res);
    }); */
  };
  render() {
    const { formFields, growthPeriods } = this.state;
    if (this.state.goBack) {
      return <Redirect to="/SettingMain" />;
    }
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
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col xs={6} md={3}>
                        <img
                          className="profile-icon text-center w-100"
                          src={Upload}
                          alt="Upload"
                        />
                      </Col>
                      <Col xs={6} md={1}>
                        <h2 className="profilename">ชื่อ</h2>
                      </Col>
                      <Col xs={6} md={5}>
                        <h2 className="profilename">
                          <input
                            type="text"
                            placeholder="ข้าวหอมมะลิ"
                            value={formFields.name}
                            name="name"
                            onChange={this.handleChange}
                            // required
                          />
                        </h2>
                      </Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">ผลผลิตต่อไร่</Col>
                      <Col xs={6} className="prodata">
                        <input
                          type="text"
                          placeholder="50"
                          value={formFields.yieldPerSeed}
                          name="yieldPerSeed"
                          onChange={this.handleChange}
                          // required
                        />
                      </Col>
                      <Col className="prohead">กิโลกรัม</Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">ราคาต่อกิโลกรัม</Col>
                      <Col xs={6} className="prodata">
                        <input
                          type="text"
                          placeholder="75"
                          value={formFields.seedCost}
                          name="seedCost"
                          onChange={this.handleChange}
                          // required
                        />
                      </Col>
                      <Col className="prohead">บาท</Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">ราคาต่อไร่</Col>
                      <Col xs={6} className="prodata">
                        <input
                          type="text"
                          placeholder="3750"
                          name="unitCost"
                          value={formFields.unitCost}
                          onChange={this.handleChange}
                          //  required
                        />
                      </Col>
                      <Col className="prohead">บาท</Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">ระยะเวลาปลูก</Col>
                      <Col xs={6} className="prodata">
                        <input
                          type="text"
                          placeholder="90"
                          name="plantingPeriod"
                          value={formFields.plantingPeriod}
                          onChange={this.handleChange}
                          //  required
                        />
                      </Col>
                      <Col className="prohead">วัน</Col>
                    </Row>

                    <Row>
                      <Col className="prodetails">ระยะเวลาการเติบโต</Col>
                      <Col className="profimg text-center">
                        <img
                          className="text-center w-100"
                          src={Upload}
                          alt="Profile"
                        />
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="01"
                          name="from"
                          //  value={growthPeriods[0].from}
                          onChange={this.handleChange}
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="20"
                          name="to"
                          // value={growthPeriods[0].to}
                          onChange={this.handleChange}
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prohead">
                        <input
                          type="text"
                          placeholder="ชื่อระยะเวลาการเจริญเติบโต"
                          name="information"
                          //  value={growthPeriods[0].information}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col className="prodata picon">
                        <i className="fa fa-times" aria-hidden="true"></i>{" "}
                      </Col>
                    </Row>

                    <Row>
                      <Col className="prodetails"></Col>
                      <Col className="profimg text-center">
                        <img
                          className="text-center w-100"
                          src={Upload}
                          alt="Profile"
                        />
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="01"
                          name="from"
                          //  value={growthPeriods[1].from}
                          onChange={this.handleChange}
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="20"
                          name="to"
                          // value={growthPeriods[1].to}
                          onChange={this.handleChange}
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prohead">
                        <input
                          type="text"
                          placeholder="ชื่อระยะเวลาการเจริญเติบโต"
                          name="information"
                          // value={growthPeriods[1].information}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col className="prodata picon">
                        <i className="fa fa-times" aria-hidden="true"></i>{" "}
                      </Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">ระดับความชื้นในดินต่ำสุด</Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="50"
                          name="moistureFrom"
                          value={formFields.moistureFrom}
                          onChange={this.handleChange}
                          //  required
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="50"
                          name="moistureTo"
                          value={formFields.moistureTo}
                          onChange={this.handleChange}
                          //  required
                        />{" "}
                        %{" "}
                      </Col>
                      <Col className="prohead"></Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">
                        ค่าความเค็มที่เหมาะสม (ppm)
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="50"
                          name="salinityFrom"
                          value={formFields.salinityFrom}
                          onChange={this.handleChange}
                          //  required
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="50"
                          name="salinityTo"
                          value={formFields.salinityTo}
                          onChange={this.handleChange}
                          //  required
                        />{" "}
                        ppm{" "}
                      </Col>
                      <Col className="prohead"></Col>
                    </Row>

                    <Row md={6}>
                      <Col className="prodetails">ค่า ph ของน้ำที่เหมาะสม</Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="6"
                          name="pHFrom"
                          value={formFields.pHFrom}
                          onChange={this.handleChange}
                          //  required
                        />{" "}
                        ถึง{" "}
                      </Col>
                      <Col className="prodata">
                        <input
                          type="text"
                          placeholder="8"
                          name="pHTo"
                          value={formFields.pHTo}
                          onChange={this.handleChange}
                          // required
                        />{" "}
                        ph{" "}
                      </Col>
                      <Col className="prohead"></Col>
                    </Row>
                    <button type="submit" name="gormSubmit">
                      Submit
                    </button>
                  </form>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
