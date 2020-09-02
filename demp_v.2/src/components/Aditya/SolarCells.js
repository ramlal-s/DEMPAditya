import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

import home from "../../resources/images/icons/home.png";

class SolarCells extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="row m-0">
            <h2 className="stitle  fc-green mb-0">Solar Cells</h2>

            <div className="ml-auto fc-green">
              <Dropdown className="dropdown-btn-wrap">
                <Dropdown.Toggle id="dropdown-basic" className="dropdown-btn">
                  <span className="align-text"> วัน</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="turbine-wrap mt-20">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img src={home} className="home" alt="home"></img>
                {/*  <div className="dif">
                  <img className="w-70 fan1" src={fan1} alt="fan"></img>
                  <img className="w-70 fan2" src={fan2} alt="fan"></img>
                  <img className="w-70 fan3" src={fan3} alt="fan"></img>
                </div> */}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="text-right">
                  <p className="fs-18  grey-2 mb-0">
                    <b>ผลิตได้ต่อเดือนนี้</b>
                  </p>
                  <p className="mb-0">(สิงหาคม)</p>
                  <h1 className="mb-0 clr-g">95,568.10</h1>
                  <p className="fs-18 clr-g mb-0">
                    <b>KWh</b>
                  </p>
                  <p className="fs-14  grey-2 mb-0">เปรียบเทียบเดือนมิถุนายน</p>
                  <p>1234 KWh</p>
                  <h5 className="fs-14  grey-2 mb-0">
                    <b>ค่าเฉลี่ยการผลิต</b>
                  </h5>
                  <p>
                    <b>1 วัน ผลิตได้ 1000kWh</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="scards-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="card-cointainer-bgr">
                  <div className="card-head-b text-center"> มิถุนายน</div>
                  <div className="card-bodyr text-center">
                    <h6 className="text-center mb-0">8658</h6>
                    <p className="text-center fs-12 mb-0">Kwh</p>
                    <p className="text-center fs-12 mb-0">
                      ปัจจุบันผลิตไฟฟ้าได้{" "}
                    </p>
                    <p className="text-center color-sblue fs-12 mb-0">
                      <b>+88 kwh</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-cointainer-bgr">
                  <div className="card-head-b text-center"> มิถุนายน</div>
                  <div className="card-bodyr text-center">
                    <h6 className="text-center mb-0">8658</h6>
                    <p className="text-center fs-12 mb-0">Kwh</p>
                    <p className="text-center fs-12 mb-0">
                      ปัจจุบันผลิตไฟฟ้าได้{" "}
                    </p>
                    <p className="text-center color-sblue fs-12 mb-0">
                      <b>+88 kwh</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SolarCells;
