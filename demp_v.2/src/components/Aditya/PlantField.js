import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import land from "../../resources/images/icons/land.png";
import plus from "../../resources/images/icons/plus.png";

class PlantField extends Component {
  render() {
    const bar1 = 70;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle  fc-green ">Plant 2 (4 RAI)</h2>
          </div>
          <div className="pf-box">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                <img className="land-icon" src={land} alt="land" />
                <p className="fs-14 fc-blue-1 mb-0 text-center ">
                  <b>0 Ton</b>
                </p>
                <p className="fs-14 fc-blue-1 mb-0 text-center">
                  <b>Water Level 88 mm</b>
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="mt-30 text-center">
                  <h2 className="stitle fc-blue-1 mt-50 mb-0">
                    Start planting
                  </h2>
                  <img className="w-40 mt-10 ml-10" src={plus} alt="add" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="fs-18 fc-blue-1">Soil Moisture</p>
            <p className="fs-14 fc-lblue mb-0 text-center">Current Humidity</p>
            <p className="fs-14 fc-blue-1 mb-0 text-center">45% Favorable</p>
            <ProgressBar className="pf-bar" now={45} label={`I`} />

            <div className="row">
              <div className="col-md-4 text-right">
                <p className="fs-14 fc-blue-1 mb-0">pH</p>
              </div>
              <div className="col-md-1 text-right">|</div>
              <div className="col-md-7 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">Alkaline water</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-right">
                <p className="fs-14 fc-blue-1 mb-0">Salinity</p>
              </div>
              <div className="col-md-1 text-right">|</div>
              <div className="col-md-7 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">0.5ppm (Fresh Water)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantField;
