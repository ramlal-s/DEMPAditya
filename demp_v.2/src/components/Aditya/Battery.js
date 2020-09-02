import React, { Component } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import plant_icon from "../../resources/images/icons/plant-icon.png";

class Battery extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const pondLevel = 40;
    const pondLevel2 = 80;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle  fc-green mb-0">Net Zero</h2>
          </div>
          <div className="row mt-50">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="allign-b">
                <div className="battery-wrap">
                  <ProgressBar className="battery-bar">
                    <ProgressBar
                      className="ec"
                      now={50}
                      key={1}
                      label={`Energy Consumption`}
                    />
                    <ProgressBar
                      className="re"
                      now={50}
                      key={2}
                      label={`Renewable Energy`}
                    />
                  </ProgressBar>
                </div>
              </div>
              {/*   <div className="progress battery-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "50%" }}
                   style={{ height: `${item.waterLevel}%` }}
                >
                  <span className="fs-10">
                    {" "}
                    <b>Energy Consumption</b>
                  </span>
                </div>
               
              </div> */}
              {/* <ProgressBar className="battery-bar" now={45} label={`I`} /> */}
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div>
                <p className=" pondvalue mb-0">
                  <b>Energy Consumption</b>
                </p>
                <p className="  mb-10 pondsubtitle">2222 Kwh</p>
              </div>
              <div className="mt-50">
                <p className=" pondvalue mb-0">
                  <b>Renewable Energy </b>
                </p>
                <p className=" pondsubtitle">2222 Kwh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Battery;
