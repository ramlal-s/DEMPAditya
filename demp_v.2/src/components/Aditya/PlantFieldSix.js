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
            <h2 className="stitle  fc-green text-left">แปลง 1 (4 ไร่)</h2>
          </div>
          <div className="row m-0">
            <div className="col-md-12">
              <p className="drop-1 mb-0">ชนิดของพืช</p>
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
              <p className="drop-1 mb-0">วันที่ปลูก</p>
            </div>
            <div className="col-md-12">
              <input
                type="date"
                id="date"
                name="date"
                className="smartdropdown"
              />
            </div>

            <div className="row m-0">
              <div className="col-md-6 text-center">
                <p className="drop-1 mb-0">คาดการณ์ผลผลิต</p>
                <input
                  type="text"
                  placeholder="20,000 กิโลกรัม"
                  name="date"
                  className="smallinput"
                />
              </div>
              <div className="col-md-6 text-center">
                <p className="drop-1 mb-0">คาดการณ์รายได้</p>
                <input
                  type="text"
                  placeholder="100,000 บาท"
                  name="date"
                  className="smallinput"
                />
              </div>
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
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SettingLogin;
