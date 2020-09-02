import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hand from "../../resources/images/icons/hand.svg";
import strike from "../../resources/images/icons/strike.svg";
import drop from "../../resources/images/icons/drop.svg";
import wave from "../../resources/images/icons/wave.svg";
import sun from "../../resources/images/icons/sun.svg";
import co2_img from "../../resources/images/icons/co2.svg";
import axios from "axios";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class EnergyCards extends Component {
  constructor() {
    super();
    this.state = {
      totalEnergy: {},
      electricity: {},
      water: {},
      gas: {},
      solar: {},
      co2: {},
    };
  }

  componentDidMount() {
    let energy = [];
    // axios.get("http://techcurve.co/aditya/EnergyCards").then((res) => {
    axios
      .get(
        "https://dev01_demp.vekin.co.th/api/v1.0/jetstream/summary/storages/summary.elect_summary/objects?last=1&api_key=1l5NkiyZWb7dmw3LPlhLsxLJBB8PCymM"
      )
      .then((res) => {
        console.log("res data", res.data.data[0]);
        energy = res.data;
        this.setState({ totalEnergy: energy.totalEnergy });
        this.setState({ electricity: energy.electricity });
        this.setState({ water: energy.water });
        this.setState({ gas: energy.gas });
        this.setState({ solar: energy.solar });
        this.setState({ co2: energy.co2 });
        /*  energy.forEach(item => {
        this.setState({ totalEnergy })
      }) */
      });
  }
  render() {
    let energy = this.state.totalEnergy;
    let electricity = this.state.electricity;
    let water = this.state.water;
    let gas = this.state.gas;
    let solar = this.state.solar;
    let co2 = this.state.co2;

    return (
      <div>
        <div className="row m-20 period">
              <div className="perioddrop ml-auto">
                  <select name="period" id="period" className="perioddrop">
                    <option value="Period">Period</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Month">2 Month</option>
                    <option value="3 Month">3 Month</option>
                    <option value="6 Month">6 Month</option>
                  </select>
              </div>
          </div>
        <Carousel responsive={responsive}>
          <div className="energyCard card-dir family te">
            <p className="card-title fs-20 fw-600 ta-center">Total</p>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Save</span>
                {/*<span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>*/}
              </div>
            <div>
              <img className="ml-30" src={hand} alt="hand" />
              <span className="main-value">{/* {energy.value} */}</span>
              <span className="main-unit">{/* {energy.units} */}</span>
              {/*<div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">
                  {energy.save} 
                </span>
                <span className="small-label">{/* {energy.saveUnits} </span>
              </div>*/}
            </div>
            <p className="bottom-value ta-center">
              {/* {energy.cost} */}9905.40 <span className="small-label"> Baht</span>
            </p>
          </div>
          <div className="energyCard card-dir family ele">
            <p className="card-title fs-20 fw-600 ta-center">Electricity</p>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Use</span>
                {/*<span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>*/}
              </div>
            <div>
              <img className="ml-30" src={strike} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">Baht</span>
            </p>
          </div>
          <div className="energyCard card-dir family water">
            <p className="card-title fs-20 fw-600 ta-center">Water</p>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Save</span>
                {/*<span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>*/}
              </div>
            <div>
              <img className="ml-20" src={drop} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
               {/*<div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>*/}
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">Baht</span>
            </p>
          </div>
          <div className="energyCard card-dir family wind">
            <p className="card-title fs-20 fw-600 ta-center">Wind</p>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Save</span>
              </div>
            <div>
              <img className="ml-30" src={wave} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              {/*<div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>*/}
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard card-dir family gas">
            <p className="card-title fs-20 fw-600 ta-center">Gas</p>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Save</span>
              </div>
            <div>
              <img className="ml-30" src={wave} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              {/*<div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>*/}
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard card-dir family solar">
            <p className="card-title fs-20 fw-600 ta-center">Solar</p>
            <div>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Save</span>
              </div>
              <img className="ml-30" src={sun} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              {/*<div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>*/}
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard card-dir family co2">
            <p className="card-title fs-20 fw-600 ta-center">CO2</p>
            <div>
            <div className="mt--10">
                <span className="small-label ml-90 mr-10 ">Save</span>
              </div>
              <img className="ml-30" src={co2_img} alt="co2" />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              {/*<div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>*/}
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
        </Carousel>
        <br />
        {/*      <div className="card card-dir family">
          <div className="energyCard te">
            <p className="card-title fs-20 fw-600 ta-center">{energy.name}</p>
            <div>
              <img className="ml-30" src={hand} alt="hand" />
              <span className="main-value">{energy.value}</span>
              <span className="main-unit">{energy.units}</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">{energy.save}</span>
                <span className="small-label">{energy.saveUnits}</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              {energy.cost} <span className="small-label"> bath</span>
            </p>
          </div>
          <div className="energyCard ele">
            <p className="card-title fs-20 fw-600 ta-center">Electricity</p>
            <div>
              <img className="ml-30" src={strike} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard water">
            <p className="card-title fs-20 fw-600 ta-center">Water</p>
            <div>
              <img className="ml-20" src={drop} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard gas">
            <p className="card-title fs-20 fw-600 ta-center">Wind</p>
            <div>
              <img className="ml-30" src={wave} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard gas">
            <p className="card-title fs-20 fw-600 ta-center">Gas</p>
            <div>
              <img className="ml-30" src={wave} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard solar">
            <p className="card-title fs-20 fw-600 ta-center">Soalr</p>
            <div>
              <img className="ml-30" src={sun} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
          <div className="energyCard co2">
            <p className="card-title fs-20 fw-600 ta-center">CO2</p>
            <div>
              <img className="ml-30" src={co2} />
              <span className="main-value">256</span>
              <span className="main-unit">kWh</span>
              <div className="mt--5">
                <span className="small-label ml-90 mr-10 ">save</span>
                <span className="small-value mr-18 ">74.5</span>
                <span className="small-label">kWh</span>
              </div>
            </div>
            <p className="bottom-value ta-center">
              9905.40 <span className="small-label">bath</span>
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}
export default EnergyCards;
