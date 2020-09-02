import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      goBack: false,
    };
  }
  render() {
    if (this.state.goBack) {
      return <Redirect to="/smartfarm" />;
    }
    return (
      <div>
        <Button
          className="text-center mt-100 settingbtn1 white"
          onClick={() => this.setState({ goBack: true })}
        >
          กลับไปที่หน้าหลัก
        </Button>

        <div className="settingmenu cardContainer white">
          <ul>
            <li className="active">
              <Link to="/SettingMain">ชนิดของพืช</Link>
            </li>
            <li>
              <a href="http://localhost:3000/CreatePlant">แปลงการปลูกพืช</a>
            </li>
            <li>
              <a href="http://localhost:3000/ToD0List">รายการสิ่งที่ต้องทำ</a>
            </li>
            <li>
              <a href="http://localhost:3000/SettingMain3">รายการเตือน</a>
            </li>
            <li>
              <a href="http://localhost:3000/SettingMain4">บ่อน้ำ</a>
            </li>
            <li>
              <a href="">ข้อควรรู้</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
