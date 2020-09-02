import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import land from "../../resources/images/icons/land.png";
import plant_icon from "../../resources/images/icons/plant.PNG";

class PlantFieldThree extends Component {
  render() {
    const bar1 = 45;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle  fc-green ">Plant 2 (4 RAI)</h2>
          </div>
          <div className="">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-center">
                <img className="plant-icon w-100" src={plant_icon} alt="land" />
                <p className="fs-14 fc-blue-1 mb-0 text-center">
                  <b>150 Tons</b>
                </p>
                <p className="fs-14 fc-blue-1 mb-0 text-center">
                  <b>Water level 88mm</b>
                </p>
              </div>
              <div className="col-md-7 text-right ">
                <div>
                  <h2 className="fc-blue-1">Plant 1</h2>
                  <p>
                    <span className="s-stitle fc-lblue  mb-0">Planted</span>
                    <span className="fs-18">
                      <b>&nbsp; &nbsp;75 days </b>
                    </span>
                  </p>
                  <p className="small-stitle fc-lblue  mb-0">Term 1</p>
                  <p className="mb-0">
                    <span className="s-stitle fc-lblue fs-12 mb-0">
                      Sowing date
                    </span>
                    <span className="fs-12 fc-blue-1 fs-12">
                      <b>&nbsp; &nbsp;15 Jan 2020</b>
                    </span>
                  </p>
                  <p>
                    <span className="s-stitle fc-lblue fs-12 mb-0">
                      Harvesting Date
                    </span>
                    <span className="fs-12 fc-blue-1 fs-14">
                      <b>&nbsp; &nbsp;15 Aug 2020</b>
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn white mutebtn  p-0 br-26 w-200"
                  >
                    <span className="mt-0">Harvest</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="fs-18 fc-blue-1">Soil moisture</p>
            <p className="fs-14 fc-lblue mb-0 text-center">Current humidity</p>
            <p className="fs-14 fc-blue-1 mb-0 text-center">45% Favorable</p>
            <ProgressBar className="pf-bar" now={bar1} label={`I`} />

            <div className="row">
              <div className="col-md-4 text-right">
                <p className="fs-14 fc-blue-1 mb-0">pH</p>
              </div>
              <div className="col-md-1 text-right">|</div>
              <div className="col-md-7 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">Alkaline Water</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-right">
                <p className="fs-14 fc-blue-1 mb-0">Salinity</p>
              </div>
              <div className="col-md-1 text-right">|</div>
              <div className="col-md-7 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">0.5ppm (Fresh water)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantFieldThree;
