import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../src/components/Auth/Login";
import Navbar from "../src/components/Navbar/Navbar";
import SmartFarm from "../src/components/Aditya/Smartfarm";
import Controller from "../src/components/Controller/Controller";
import Demp from "./components/Demp/DempMain";
import PlantType from "./components/Aditya/PlantType";
import SettingMain from "./components/Aditya/SettingMain";
import CreatePlant from "./components/Aditya/CreatePlant";
import ToD0List from "./components/Aditya/ToD0List";
import SettingMain3 from "./components/Aditya/SettingMain3";
import SettingMain4 from "./components/Aditya/SettingMain4";
import SettingProfile from "./components/Aditya/SettingProfile";
import Profile from "./components/Setting/Profile";
import AddNewUser from "./components/Setting/AddNewUser";
import AddNewUserEdit from "./components/Setting/AddNewUserEdit";
import UserSetting from "./components/Setting/UserSetting";

function App() {
  return (
    <div>
      <Router>
        {/*  {this.state.isNavBarHidden ? null : <Navbar />} */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/smartfarm">
            <SmartFarm />
          </Route>
          <Route exact path="/demp">
            <Demp />
          </Route>
          {/* <Route exact path="/PlantType">
            <PlantType />
          </Route> */}
          <Route exact path="/SettingMain">
            <SettingMain />
          </Route>
          <Route exact path="/CreatePlant">
            <CreatePlant />
          </Route>
          <Route exact path="/ToD0List">
            <ToD0List />
          </Route>
          <Route exact path="/SettingMain3">
            <SettingMain3 />
          </Route>
          <Route exact path="/SettingMain4">
            <SettingMain4 />
          </Route>
          <Route exact path="/SettingProfile">
            <SettingProfile />
          </Route>
          <Route exact path="/controller">
            <Controller />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/AddNewUser">
            <AddNewUser />
          </Route>
          <Route exact path="/AddNewUserEdit">
            <AddNewUserEdit />
          </Route>
          <Route exact path="/UserSetting">
            <UserSetting />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
