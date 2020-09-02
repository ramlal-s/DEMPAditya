import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import land from "../../resources/images/icons/land.png";
import big_plant_icon from "../../resources/images/icons/big-plant.png";

class PlantFieldThree extends Component {
  render() {
    const bar1 = 45;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle  fc-green ">แปลง 1</h2>
          </div>
          <div className="">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <img
                  src={big_plant_icon}
                  alt="plant"
                  className="setting-icon"
                />
                <p className="fs-14 fc-blue-1 mb-0 text-center">ข้าวหอมมะลิ</p>
                <p className="fs-14 fc-blue-1 mb-0 text-center">
                  <b>150 ตัน</b>
                </p>
              </div>
              <div className="col-md-12 text-center pt-10">
                <div>
                  <h3 className="fc-blue-1">
                    อีก{" "}
                    <span className="plant-title fc-lblue  mb-0">100 วัน</span>{" "}
                    ข้าวจะโตเต็มที่
                  </h3>
                  <h2 className="fc-blue-1">
                    คุณยืนยันที่จะ
                    <span className="plant-title fc-lblue  mb-0">เลิกปลูก</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-12 text-center pt-10">
                <button
                  type="button"
                  className="btn white btn-set-log mr-18 ml-auto"
                >
                  ยกเลิก
                </button>
                <button
                  type="button"
                  className="btn white btn-set-logs mr-18 ml-auto"
                >
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantFieldThree;
