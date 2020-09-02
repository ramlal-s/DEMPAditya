import React from "react";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";
import axios from "axios";

export default class SettingMain extends React.Component {
  constructor() {
    super();
    this.state = {
      plantsList: {},
      goToDetails: false,
      createPlant: false,
      viewUrl: "",
    };
  }
  componentDidMount() {
    this.getAllPlants();
  }
  getAllPlants = () => {
    axios.get(`${window.base_url}/${window.getPlants}`).then((res) => {
      const data = res.data;
      let rowList = [];
      data.plants.forEach((item) => {
        rowList.push(item);
      });
      this.setState({ plantsList: rowList });
      console.log(this.state.plantsList);
    });
  };
  handleDisplayDetails = (row) => {
    let viewUrl = "/SettingProfile?id=" + row._id;
    this.setState({ viewUrl: viewUrl });
    this.setState({ goToDetails: true });
  };
  handleCreatePlant = () => {
    console.log("clicked");
    this.setState({ createPlant: true });
  };
  render() {
    let { plantsList } = this.state;
    plantsList = Array.from(plantsList);
    if (this.state.goToDetails) {
      return <Redirect to={this.state.viewUrl} />;
    }
    if (this.state.createPlant) {
      return <Redirect to="/CreatePlant" />;
    }
    return (
      <Container fluid>
        <Row>
          <Col sm={3} className="sidebar">
            <Sidebar />
          </Col>

          <Col sm={9}>
            <div className="container main-setting ps">
              <div>
                <button
                  className="col-md-12 text-right plusbtn pointer"
                  onClick={this.handleCreatePlant}
                >
                  + เพิ่มชนิดของพืช
                </button>
              </div>
              <div className="col-xl-12 mt-50">
                <table className="table table-hover">
                  <thead>
                    <tr className="setmenubar text-center">
                      <th scope="col"></th>
                      <th scope="col">ชนิดของพืช</th>
                      <th scope="col">ผลผลิตต่อไร่</th>
                      <th scope="col">ราคาต่อกิโลกรัม</th>
                      <th scope="col">ราคาต่อไร่</th>
                      <th scope="col">ระยะเวลาปลูก</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {plantsList.map((item, index) => {
                      return (
                        <tr className="setting-tab text-center" key={item._id}>
                          <th className="rowCell" scope="row">
                            <img
                              className="w-40"
                              src={item.imgUrl}
                              alt="plant"
                            />
                          </th>
                          <td className="rowCell">{item.name}</td>
                          <td className="rowCell">{item.yieldPerSeed}</td>
                          <td className="rowCell">{item.seedCost} บาท</td>
                          <td className="rowCell">{item.unitCost} บาท</td>
                          <td className="rowCell">{item.plantingPeriod} วัน</td>
                          <td
                            className="rowCell pointer"
                            onClick={() => this.handleDisplayDetails(item)}
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>{" "}
                            ดูรายละเอียด
                          </td>
                        </tr>
                      );
                    })}
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
