import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import land from "../../resources/images/icons/land.png";
import plant_icon from "../../resources/images/icons/plant.PNG";

class PlantFieldFour extends Component {
  render() {
    const bar1 = 70;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="title fc-green">Plant Field</h2>
          </div>
          <div className="">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-center">
                <img className="plant-icon w-100" src={plant_icon} alt="land" />
                <p className="fs-18 fc-blue-1 mb-0 text-center">
                  <b>name</b>
                </p>
                <p className="fs-18 fc-blue-1 mb-0 text-center">
                  <b>name</b>
                </p>
              </div>
              <div className="col-md-7 text-right ">
                <div>
                  <h2 className="fc-blue-1">title Nzme</h2>
                  <p>
                    <span className="s-stitle fc-lblue  mb-0">sub title</span>
                    <span className="fs-18">
                      <b>&nbsp; &nbsp;75 val </b>
                    </span>
                  </p>
                  <p className="small-stitle fc-lblue  mb-0">Bath</p>
                  <p className="mb-0">
                    <span className="s-stitle fc-lblue fs-12 mb-0">title</span>
                    <span className="fs-12 fc-blue-1 fs-12">
                      <b>&nbsp; &nbsp;15 monthVal 2523</b>
                    </span>
                  </p>
                  <p className="mb-0">
                    <span className="s-stitle fc-lblue fs-12 mb-0">
                      sub title
                    </span>
                    <span className="fs-12 fc-blue-1 fs-14">
                      <b>&nbsp; &nbsp;15 monthVal 2523</b>
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn white  pink-purple p-0 br-26 w-200"
                  >
                    <span className="mt-0">some button</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="fs-18 fc-blue-1">Title</p>
            <p className="fs-14 fc-lblue mb-0 text-center">name</p>
            <p className="fs-14 fc-blue-1 mb-0 text-center">name</p>
            <ProgressBar className="pf-bar" now={bar1} label={`${bar1}%`} />
            <div className="row">
              <div className="col-md-6 text-right">
                <p className="fs-14 fc-blue-1 mb-0">name</p>
              </div>
              <div className="col-md-1 text-right">|</div>
              <div className="col-md-5 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">name</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-right">
                <p className="fs-14 fc-blue-1 mb-0">name</p>
              </div>
              <div className="col-md-1 text-right">|</div>
              <div className="col-md-5 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantFieldFour;
