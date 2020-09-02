import React, { Component } from "react";

class Controller extends Component {
  render() {
    return (
      <div className="row mr-0">
        <div className="col-md-4 mt-80 ml-10">
          <div className="c-cardContainer">
            <div className="widget-title-new">
              <h2 className="title">
                <i className="fa fa-angle-left fc-blue-1 fs-25"></i> Building 1
              </h2>
              <p className="fc-blue-1 ml-14">
                University of Thai Chambers,
                <br />
                Bangkok,Thailand
              </p>
            </div>
          </div>
          <div className="building-ctrl mt-12">
            <div className="title-bg">
              <h2 className="title fc-blue-1 ff-ns">Building 1</h2>
            </div>
          </div>
        </div>
        <div className="col-md-8 mt-80 ml--10">
          <div className="floor3DC">
            <h1> Floor plan</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Controller;
