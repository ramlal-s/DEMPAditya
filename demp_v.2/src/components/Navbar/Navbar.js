import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import logo from "../../resources/images/logo.png";
import profileicon from "../../resources/images/profile-icon.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-purple">
          <img className="logo-image" src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/smartfarm">
                  SMART FARM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="demp">
                  DEMP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="controller">
                  CONTROLLER
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="">
                  <img className="w-30" src={profileicon} alt="user" />
                </NavLink>
              </li> */}
            </ul>
            <div className="topprof">
              <div className="text-left white row">
                <div className="col-md-2 mt-10 text-center">
                  <img className="w-30" src={profileicon} alt="user" />
                </div>
                <div className="col-md-8 text-center">
                  <select name="EN" id="EN" className="topdropdown">
                    <option value="ระดับ">EN</option>
                    <option value="ระดับ">TH</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
