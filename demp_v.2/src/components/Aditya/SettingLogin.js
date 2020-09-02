import React, { Component } from "react";
import sun_1 from "../../resources/images/icons/sun_1.png";
import sun_2 from "../../resources/images/icons/sun_2.png";
import cloud from "../../resources/images/icons/cloud.png";

class SettingLogin extends Component {
  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer text-center">
          <div className="widget-title-new">
            <h2 className="stitle fc-blue-1 text-center mb-0">ซื้อ</h2>
          </div>
          <div className="row m-0">
            <div className="col-md-12">
              <p className="drop-1 mb-0">พืช</p>
            </div>
            <div className="col-md-12">
              <select
                name="ข้าวหอมมะลิ"
                id="ข้าวหอมมะลิ"
                className="smartdropdown"
                text-center
              >
                <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
                <option value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</option>
              </select>
            </div>
            <div className="col-md-12">
              <p className="drop-1 mb-0">กิโลกรัมละ (บาท)</p>
            </div>
            <div className="col-md-12">
              <input
                name="20 บาท"
                placeholder="20 บาท"
                className="smartdropdown"
              />
            </div>
            <div className="col-md-12">
              <p className="drop-1 mb-0">ทั้งหมด (กิโลกรัม)</p>
            </div>
            <div className="col-md-12">
              <input
                name="1,000 กิโลกรัม"
                placeholder="1,000 กิโลกรัม"
                className="smartdropdown"
              />
            </div>
            <div className="col-md-12">
              <h3 className="head-login mb-0">เป็นเงิน 20,000 บาท</h3>
            </div>
            <div className="col-md-12">
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
    );
  }
}
export default SettingLogin;
