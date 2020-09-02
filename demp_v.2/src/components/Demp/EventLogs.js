import React from "react";

class EventLogs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="title fc-green">EVENT LOGS</h2>
          </div>
          <div className="today-cont">
            <h5 className="fs-18 white">Today</h5>
          </div>
          <div className="static-table-list">
            <table className="table table-custom ">
              <tbody className="fs-18 black">
                <tr className="tr-custom mb-l">
                  <td className="td-custom">Building 1</td>
                </tr>
                {/*  <tr className="tr-line" /> */}
                <tr className="tr-custom">
                  <td className="td-custom">Floor1</td>
                  <td className="td-custom">Lorem Ipsum Text here !!!</td>
                </tr>
                <tr className="tr-custom">
                  <td className="td-custom">Floor2</td>
                  <td className="td-custom">Lorem Ipsum Text here !!!</td>
                </tr>
                <tr className="tr-custom">
                  <td className="td-custom">Floor3</td>
                  <td className="td-custom">Lorem Ipsum Text here !!!</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-custom">
              <tbody className="fs-18 black">
                <tr className="tr-custom">
                  <td className="td-custom">Building 2</td>
                </tr>
                {/*  <tr className="tr-line" /> */}
                <tr className="tr-custom">
                  <td className="td-custom">Floor1</td>
                  <td className="td-custom">Lorem Ipsum Text here !!!</td>
                </tr>
                <tr className="tr-custom">
                  <td className="td-custom">Floor2</td>
                  <td className="td-custom">Lorem Ipsum Text here !!!</td>
                </tr>
                <tr className="tr-custom">
                  <td className="td-custom">Floor3</td>
                  <td className="td-custom">Lorem Ipsum Text here !!!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default EventLogs;
