import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";

class deviceSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floor: {
        lighting: {
          status: {},
          offline: {},
        },
        aircon: {
          status: {},
          offline: {},
        },
      },
    };
  }
  componentDidMount() {
    axios.get(`${window.deviceSummaryUrl}`).then((res) => {
      //console.log("FW",res);
      // console.log(res.data.data[0].data.lighting);
      // console.log("status",res.data.data[0].data.lighting.status.offline);
      const floor = res.data.data[0].data;
      this.setState({ floor });
    });
  }
  render() {
    const { aircon, lighting } = this.state.floor;
    const airconusage = Math.floor(aircon.usePercent);
    const lightingusage = Math.floor(lighting.usePercent);

    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="title">Device summary</h2>
          </div>
          <div className=" table-event-logs">
            <div className="static-table-list">
              <table className="table">
                <thead className="fc-blue">
                  <tr>
                    <th>Device</th>
                    <th>Total</th>
                    <th>Using</th>
                    <th>Usage</th>
                    <th>Broken</th>
                  </tr>
                </thead>
                <tbody className="topline">
                  <tr>
                    <td>Air Condition</td>
                    <td>{this.state.floor.aircon.total}</td>
                    <td>{this.state.floor.aircon.status.on}</td>
                    <td>
                      <ProgressBar
                        now={airconusage}
                        label={`${airconusage}%`}
                      />
                    </td>
                    <td>{this.state.floor.aircon.status.error}</td>
                  </tr>
                  <tr>
                    <td>Lighting</td>
                    <td>{this.state.floor.lighting.CH_total}</td>
                    <td>{this.state.floor.lighting.status.CH_on}</td>
                    <td>
                      <ProgressBar
                        now={lightingusage}
                        label={`${lightingusage}%`}
                      />
                    </td>
                    <td>{this.state.floor.lighting.status.offline}</td>
                  </tr>
                  {/* <tr>
                    <td>Chiler</td>
                    <td>50</td>
                    <td>1</td>
                    <td>
                      <ProgressBar now={now} label={`${now}%`} />
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Pump</td>
                    <td>50</td>
                    <td>1</td>
                    <td>
                      <ProgressBar now={now} label={`${now}%`} />
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>AHU</td>
                    <td>50</td>
                    <td>1</td>
                    <td>
                      <ProgressBar now={now} label={`${now}%`} />
                    </td>
                    <td>1</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default deviceSummary;
