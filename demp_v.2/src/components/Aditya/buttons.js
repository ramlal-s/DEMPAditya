import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import upload from "../../resources/images/icons/upload.png";
import download from "../../resources/images/icons/download.png";
import settings from "../../resources/images/icons/settings-icon.png";

export default class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      close: false,
      redirect: false,
    };
  }
  handleModalShow = () => {
    this.setState({ modalShow: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/SettingMain" />;
    }
    return (
      <div>
        <div className="row mr-0 mt-25 md-25">
          <button
            type="button"
            onClick={() => this.setState({ show: true })}
            className="btn white btn-upload ml-25"
          >
            <img src={upload} alt="upload" /> Sell
          </button>
          <button
            type="button"
            onClick={() => this.setState({ show: true })}
            className="btn white btn-download ml-25"
          >
            <img src={download} alt="download" /> Buy
          </button>
          <button
            type="button"
            onClick={() => this.setState({ redirect: true })}
            className="btn white btn-settings mr-18 ml-auto"
          >
            <img src={settings} alt="settings-icon" /> settings
          </button>
        </div>
        <Modal
          show={this.state.show}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/*  <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div>
              <div className="cardContainer bg-white text-center">
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
                      onClick={() => this.setState({ show: false })}
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
          </Modal.Body>
          {/*   <Modal.Footer>
            <Button onClick={() => this.setState({ show: false })}>
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
