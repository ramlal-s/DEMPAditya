import React from "react";

class EventLogs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="row m-0">
            <h2 className="stitle  fc-green mb-0">Income and Expenses</h2>
            <a className="ml-auto fc-green">
              <u>EDIT</u>
            </a>
          </div>
          <div className="row mt-30">
            <div className="col-md-6 text-center">
              <div className="battery-icon"></div>
            </div>
            <div className="col-md-6 text-center">
              <div className="mr-18">
                <h5 className="fc-blue-1">Litium Battery</h5>
                <h1 className="fc-blue-1 batteryvalue">50%</h1>
                <h6 className="fc-blue-1">Battery Remaining</h6>
                <p className="mb-0">
                  <span className="batvalue mb-0">20,245</span>
                  <span>&nbsp; &nbsp;kWh</span>
                </p>
                <p className="mb-0">
                  <span className="batvalue">1</span>
                  <span>Days </span>
                  <span className="batvalue">4</span>
                  <span>&nbsp;Hrs </span>
                  <span className="batvalue">39</span>
                  <span>Min</span>
                </p>
                <p className="mb-0">
                  <span>
                    &nbsp;<b>Highest</b> &nbsp;{" "}
                  </span>
                  <span>
                    &nbsp;<b>Lowest</b>&nbsp;
                  </span>
                </p>
                <p className="mb-0">
                  <span className="batsubvalue mb-0">22,245</span>
                  <span>&nbsp;kWh &nbsp; </span>
                  <span className="batsubvalue mb-0">1,200</span>
                  <span>&nbsp;kWh&nbsp;</span>
                </p>
                <div className="mb-20 text-right">
                  <h6>
                    <b>Life Cycle</b>
                  </h6>
                  <span className="batvalue mb-0">50</span>
                  <span className="batgray mb-0"> / 50000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EventLogs;
