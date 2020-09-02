import React, { Component } from "react";
import axios from "axios";
import sun_1 from "../../resources/images/icons/sun_1.png";
import sun_2 from "../../resources/images/icons/sun_2.png";
import cloud from "../../resources/images/icons/cloud.png";

class Climate extends Component {
  constructor() {
    super();
    this.state = {
      climate: {},
      currentDate: "",
      currentTemp: "",
      daily: [],
      hourly: [],
    };
  }
  componentDidMount() {
    this.getClimateDetails();
  }
  getClimateDetails = () => {
    let currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    currentDate = day + "-" + month + "-" + year;
    this.setState({ currentDate });
    // console.log(currentDate);
    axios.get(`${window.climate_en}`).then((res) => {
      const climate = res.data;
      this.setState({ climate: climate });
      // console.log("climate data", climate);
      const temp = Math.round(climate.current.temp - 273.15);
      this.setState({ currentTemp: temp });
      /* Daily */
      let forecast = [];
      climate.daily.forEach((item) => {
        let row = [];
        row.push(new Date().getDay(item.dt));
        row.push(Math.round(item.temp.min - 273.15));
        row.push(Math.round(item.temp.max - 273.15));
        row.push(item.weather[0].main);
        row.push(item.weather[0].icon);
        forecast.push(row);
      });
      this.setState({ daily: forecast });
      //  console.log(this.state.daily, "daily");

      /* hourly */
      let hourlyCast = [];
      climate.hourly.forEach((item) => {
        let row = [];
        row.push(new Date().getHours(item.dt));
        row.push(Math.round(item.temp - 273.15));
        row.push(item.weather[0].main);
        row.push(item.weather[0].icon);
        hourlyCast.push(row);
      });
      this.setState({ hourly: hourlyCast });
      // console.log(this.state.hourly, "hourly");
    });
  };
  render() {
    const { currentDate, currentTemp, daily, climate } = this.state;
    const imgUrl = "http://openweathermap.org/img/wn/";
    const imgExt = ".png";
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // const climate = this.state;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle fc-blue-1 text-center mb-0">Today</h2>
            <p className="s-stitle fc-lblue  mb-0">{currentDate}</p>
            <h1 className="value-title fc-blue-1 text-center mt--10">
              {currentTemp}&deg;
            </h1>
          </div>
          {this.state.daily.slice(0, 1).map((listValue, index) => {
            return (
              <div className="row m-0">
                <div className="col-md-8">
                  <img
                    className="sun-cs"
                    src={imgUrl + listValue[4] + imgExt}
                    alt="sun"
                  />
                  <span className="fs-18 fc-blue-1 mt-1 pa">
                    &nbsp; <b>Clouds</b>
                  </span>
                </div>
                <div className="col-md-2 mt--10">
                  <p className="s-stitle fc-lblue text-right mb-0">Max</p>
                  <p className="fs-20 fc-blue-1 text-right mb-0 mt--10">
                    <b>{listValue[2]}</b>
                  </p>
                </div>
                <div className="col-md-2 mt--10">
                  <p className="s-stitle fc-lblue text-right mb-0">Min</p>
                  <p className="fs-20 fc-blue-1 text-right mb-0 mt--10">
                    <b>{listValue[1]}</b>
                  </p>
                </div>
              </div>
            );
          })}
          <div className="mt-2">
            <div className="row text-center w-box m-0 white">
              {this.state.hourly.slice(0, 6).map((listValue, index) => {
                return (
                  <div className="col-md-2">
                    <h5 className="mb-0 ">
                      {new Date().getHours(listValue[0])}
                    </h5>
                    <img
                      className="weatherIcon"
                      src={imgUrl + listValue[3] + imgExt}
                      alt="weather-icon"
                    />
                    <p className="mb-0 b">{listValue[1]}&deg;</p>
                  </div>
                );
              })}
            </div>
          </div>
          <table className="table">
            <tbody>
              {this.state.daily.slice(1, 5).map((listValue, index) => {
                return (
                  <tr key={index}>
                    <td className="c-td b">
                      {/*  {days[new Date().getDay(listValue[0])]} */}
                      {days[listValue[0]]}
                    </td>
                    <td className="text-center c-td">
                      <img
                        className="weatherIcon"
                        src={imgUrl + listValue[4] + imgExt}
                        alt="weather-icon"
                      />
                    </td>
                    <td className="text-right b c-td">{listValue[1]}</td>
                    <td className="c-align b c-td">{listValue[2]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Climate;
