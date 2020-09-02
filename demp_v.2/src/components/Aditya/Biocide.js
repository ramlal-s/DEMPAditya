import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

import biocide from "../../resources/images/icons/biocide.png";

class Biocide extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-4 mt-20">
        <div className="cardContainer">
          <div className="row m-0">
            <h2 className="stitle  fc-green mb-0">Biocide</h2>

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
          <div className="turbine-wrap mt-30">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img src={biocide} className="home" alt="biocide"></img>
                <div className="water-blue white r-15 text-center w-200">
                  {" "}
                  ความดันในบ่อ 1.84 mbar
                </div>
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
                <div className="card-cointainer-vr">
                  <div className="card-head-y text-center"> มิถุนายน</div>
                  <div className="card-bodyr text-center">
                    <h6 className="text-center mb-0">47400</h6>
                    <p className="text-center fs-12 mb-0">Kwh</p>
                    <p className="text-center fs-12 mb-0">
                      ปัจจุบันผลิตไฟฟ้าได้{" "}
                    </p>
                    <p className="text-center color-y fs-12 mb-0">
                      <b>+89 kwh</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-cointainer-vr">
                  <div className="card-head-y text-center"> มิถุนายน</div>
                  <div className="card-bodyr text-center">
                    <h6 className="text-center mb-0">47400</h6>
                    <p className="text-center fs-12 mb-0">Kwh</p>
                    <p className="text-center fs-12 mb-0">
                      ปัจจุบันผลิตไฟฟ้าได้{" "}
                    </p>
                    <p className="text-center color-y fs-12 mb-0">
                      <b>+89 kwh</b>
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

export default Biocide;
