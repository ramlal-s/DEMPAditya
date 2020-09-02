import React, { Component } from "react";
import sun_1 from "../../resources/images/icons/sun_1.png";
import plant_icon from "../../resources/images/icons/plant-icon.png";

class Widget2 extends Component {
  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="row m-0">
            <h2 className="stitle fc-green mb-0">Things to do</h2>
            <button
              type="button"
              className="btn white get pink-purple p-0 br-26 ml-25"
            >
              <span className="mt-0">Today</span>
            </button>
            <a className="ml-auto fc-green">
              <u>EDIT</u>
            </a>
          </div>
          <div className="mt-10">
            <div className="row text-center m-0 p-box white">
              <div className="">
                <img src={plant_icon} alt="plant" />
                <span className="mb-0">&nbsp;&nbsp; Crop 1</span>
              </div>
            </div>
            <div className="form-check custom-cb m-10">
              <input
                className="form-check-input mt-7"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label cost-blue">Task 1</label>
            </div>
            <div className="form-check custom-cb m-10">
              <input
                className="form-check-input mt-7"
                type="checkbox"
                value=""
                id="defaultCheck2"
                checked
                disabled
              />
              <label className="form-check-label"> Task 2</label>
            </div>
          </div>
          <div className="mt-10">
            <div className="row text-center m-0 p-box white">
              <div className="">
                <img src={plant_icon} alt="plant" />
                <span className="mb-0">&nbsp;&nbsp; Crop 2</span>
              </div>
            </div>
            <div className="form-check custom-cb m-10">
              <input
                className="form-check-input mt-7"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label cost-blue">Task 1</label>
            </div>
            <div className="form-check custom-cb m-10">
              <input
                className="form-check-input mt-7"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label className="form-check-label  cost-blue"> Task 2</label>
            </div>
          </div>
          <div className="mt-10">
            <div className="row text-center m-0 p-box white">
              <div className="">
                <img src={plant_icon} alt="plant" />
                <span className="mb-0">&nbsp;&nbsp; Crop 3</span>
              </div>
            </div>
            <div className="form-check custom-cb m-10">
              <input
                className="form-check-input mt-7"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label cost-blue">Task 1</label>
            </div>
            <div className="form-check custom-cb m-10">
              <input
                className="form-check-input mt-7"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label className="form-check-label  cost-blue"> Task 2</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Widget2;
