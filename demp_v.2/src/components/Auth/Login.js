import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import HttpClient from "axios";
import "./login.css";
//import bg from "../../resources/images/bg.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect: false,
      isNavBarHidden: true,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.userName);
    console.log(this.state.password);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    let _data = {
      email: email,
      password: password,
    };
    HttpClient({
      url: `${window.base_url}/${window.login}`,
      method: "POST",
      data: _data,
    })
      .then((res) => {
        if (res.data.token != undefined) {
          localStorage.setItem("techCurve", res.data.token);
          this.setState({ redirect: true });
        }
      })
      .catch((e) => {
        console.error("error:", e.message);
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/demp" />;
    }
    return (
      <div className="login">
        {/* <div className="row">
          <div className="col-md-12">
            <img className="login-image" src={bg} alt="bg-image" />
          </div> */}
        <div className="col-md-12">
          <div className="card loginContainer">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter username"
                  name="email"
                  value={this.state.userName}
                  onChange={this.handleChange}
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
export default Login;
