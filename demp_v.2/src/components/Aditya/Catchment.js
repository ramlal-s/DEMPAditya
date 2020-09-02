import React, { Component } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import plant_icon from "../../resources/images/icons/plant-icon.png";

class Catchment extends Component {
  constructor() {
    super();
    this.state = {
      pondsList: {},
    };
  }
  componentDidMount() {
    this.getPonds();
  }
  getPonds = () => {
    axios.get(`${window.base_url}/${window.getPonds}`).then((res) => {
      //  console.log("stings", res.data);
      const data = res.data;
      let rowList = [];
      data.ponds.forEach((item) => {
        rowList.push(item);
      });
      this.setState({ pondsList: rowList });
    });
  };
  render() {
    let { pondsList } = this.state;
    pondsList = Array.from(pondsList);
    const pondLevel = 40;
    const pondLevel2 = 80;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle  fc-green mb-0">Catchment</h2>
          </div>
          {pondsList &&
            pondsList.map((item) => {
              return (
                <div className="row mt-50" key={item._id}>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="progress progress-bar-vertical">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: `${item.waterLevel}%` }}
                      >
                        <span className="pond-p"> {item.waterLevel}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div>
                      <p className="pondsubtitle mb-0">Pond </p>
                      <p className="mb-0 pondvalue">
                        <b>
                          pH {item.pH} <span className="grayline">|</span>{" "}
                          Alkaline Water
                        </b>
                      </p>
                      <p className="mt-10  mb-10 pondsubtitle">
                        Salinity (ppm)
                      </p>
                      <p className="mb-0 pondvalue">
                        {item.salinity} ppm (Fresh water)
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Catchment;
