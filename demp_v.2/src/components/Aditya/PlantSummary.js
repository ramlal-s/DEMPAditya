import React, { Component } from "react";
import sun_1 from "../../resources/images/icons/sun_1.png";
import plant_icon from "../../resources/images/icons/plant-icon.png";
import big_plant_icon from "../../resources/images/icons/big-plant.png";
class PlantSummary extends Component {
  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="row m-0">
            <h2 className="stitle fc-blue-1 fc-green mb-0">Plant</h2>
            {/*  <a className="ml-auto">Edit</a> */}
          </div>
          <div className="mt-10">
            <div className="text-right w-box white">
              <h4 className="ml-auto fs-20">Plant 1</h4>
              <div className="row ">
                <div className="col-md-2 mt--22">
                  <img src={big_plant_icon} alt="plant" />
                </div>
                <div className="col-md-4">
                  <p className="mb-0 vilot-l lh-18"> Total quantity</p>
                  <p className="mb-0 vilot-l">Price per ton</p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 ">
                    <b>450</b> Bath
                  </p>
                  <p className="mb-0 lh-18">
                    <b>1000</b> Ton
                  </p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 vilot-l lh-18"> Total</p>
                  <p className="mb-0 fs-18">
                    <b>450,000</b>
                  </p>
                  <p className="mb-0 vilot-l lh-14">Bath</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-right w-box white">
              <h4 className="ml-auto fs-20">Plant 2</h4>
              <div className="row ">
                <div className="col-md-2 mt--22">
                  <img src={big_plant_icon} alt="plant" />
                </div>
                <div className="col-md-4">
                  <p className="mb-0 vilot-l lh-18"> Total quantity</p>
                  <p className="mb-0 vilot-l">Price per ton</p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 ">
                    <b>650</b> Bath
                  </p>
                  <p className="mb-0 lh-18">
                    <b>5000</b> Ton
                  </p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 vilot-l lh-18"> Total</p>
                  <p className="mb-0 fs-18">
                    <b>850,000</b>
                  </p>
                  <p className="mb-0 vilot-l lh-14">Bath</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-right w-box white">
              <h4 className="ml-auto fs-20">Plant 3</h4>
              <div className="row ">
                <div className="col-md-2 mt--22">
                  <img src={big_plant_icon} alt="plant" />
                </div>
                <div className="col-md-4">
                  <p className="mb-0 vilot-l lh-18"> Total quantity</p>
                  <p className="mb-0 vilot-l">Price per ton</p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 ">
                    <b>50</b> Bath
                  </p>
                  <p className="mb-0 lh-18">
                    <b>500</b> Ton
                  </p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 vilot-l lh-18"> Total</p>
                  <p className="mb-0 fs-18">
                    <b>50,000</b>
                  </p>
                  <p className="mb-0 vilot-l lh-14">Bath</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-right w-box white">
              <h4 className="ml-auto fs-20">Plant 4</h4>
              <div className="row ">
                <div className="col-md-2 mt--22">
                  <img src={big_plant_icon} alt="plant" />
                </div>
                <div className="col-md-4">
                  <p className="mb-0 vilot-l lh-18"> Total quantity</p>
                  <p className="mb-0 vilot-l">Price per ton</p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 ">
                    <b>450</b> Bath
                  </p>
                  <p className="mb-0 lh-18">
                    <b>1000</b> Ton
                  </p>
                </div>
                <div className="col-md-3">
                  <p className="mb-0 vilot-l lh-18"> Total</p>
                  <p className="mb-0 fs-18">
                    <b>450,000</b>
                  </p>
                  <p className="mb-0 vilot-l lh-14">Bath</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PlantSummary;
