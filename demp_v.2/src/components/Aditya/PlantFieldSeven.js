import React, { Component } from "react";
import sun_1 from "../../resources/images/icons/sun_1.png";
import sun_2 from "../../resources/images/icons/sun_2.png";
import cloud from "../../resources/images/icons/cloud.png";
import Upload from "../../resources/images/upload.png";

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
              <p className="fs-14 fc-blue-1 mb-0 text-center">ข้อควรรู้</p>
            </div>

            <div className="row m-10">
              <div className="col-md-3">
                <img className="text-center w-100" src={Upload} alt="Profile" />
              </div>
              <div className="col-md-9 text-left">
                <h4 className="head-gray">ไถหน้าดิน</h4>
              </div>
            </div>

            <div className="row m-10">
              <div className="col-md-3">
                <img className="text-center w-100" src={Upload} alt="Profile" />
              </div>
              <div className="col-md-9 text-left">
                <h4 className="head-gray">ไถหน้าดิน</h4>
              </div>
            </div>

            <div className="row m-10">
              <div className="col-md-3">
                <img className="text-center w-100" src={Upload} alt="Profile" />
              </div>
              <div className="col-md-9 text-left">
                <h4 className="head-gray">ไถหน้าดิน</h4>
              </div>
            </div>

            <div className="col-md-12 m-10">
              <button
                type="button"
                className="btn white btn-set-log mr-18 ml-auto"
              >
                ย้อนกลับ
              </button>
              <button
                type="button"
                className="btn white btn-set-logs mr-18 ml-auto"
              >
                เริ่มปลูก
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SettingLogin;
