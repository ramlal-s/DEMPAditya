import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import sun from "../../resources/images/icons/sun_1.png";
import wave from "../../resources/images/icons/wave_1.png";
import gas from "../../resources/images/icons/gas_1.png";
import wind from "../../resources/images/icons/wind_1.png";
import axios from "axios";

class PortionOfEnergy extends Component {
  constructor() {
    super();
    this.state = {
      energyPortions: {
        co2: {},
        electricityUnit: {},
        renewableGenerated: {},
      },
      gas: 1,
      water: 2,
    };
  }
  componentDidMount() {
    am4core.addLicense("CH212555597");

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("PortionOfEnergy", am4charts.PieChart);
    var POE_data = [];
    var final_data = [];
    axios
      .get(
        "https://api.jetstream.gmbh/v1.1/demp-management/storages/demp-management.taksin_elect_summary/objects?last=1&api_key=OTY3Y2RkMDUtZTEzZS00N2ZjLWIwYzYtYjI2ZWViOWJhNjQ1"
      )
      .then((res) => {
        let energyPortions = res.data.data[0].data;
        this.setState({ energyPortions });
        POE_data = res.data.data;
        POE_data.forEach((item) => {
          let electricity = item.data.electricityUnit.value;
          electricity = Number.parseFloat(electricity).toFixed(2);
          let renewable = item.data.renewableGenerated.value;
          renewable = Number.parseFloat(renewable).toFixed(2);
          let co2 = item.data.co2.value;
          co2 = Number.parseFloat(co2).toFixed(2);
          final_data.push(
            {
              energy: "Electricity",
              value: electricity,
            },
            {
              energy: "solar",
              value: renewable,
            },
            {
              energy: "CO2",
              value: co2,
            },
            {
              energy: "Gas",
              value: 1,
            },

            {
              energy: "Water",
              value: 2,
            }
          );
        });
        chart.data = final_data;

        // Add data
        /*  chart.data = [
      {
        energy: "Electricity",
        value: 501.9,
      },
      {
        energy: "CO2",
        value: 301.9,
      },
      {
        energy: "Solar",
        value: 201.1,
      },
      {
        energy: "Water",
        value: 165.8,
      },
      {
        energy: "Gas",
        value: 139.9,
      },
     
    ]; */

        // Set inner radius
        chart.innerRadius = am4core.percent(50);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "energy";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        // slice colors
        /*  let gradient = new am4core.LinearGradient();
        gradient.addColor(am4core.color("#5B86A3"));
        gradient.addColor(am4core.color("#A670AF")); */
        pieSeries.colors.list = [
          am4core.color("#8466A3"),
          am4core.color("#F2B789"),
          am4core.color("#A670AF"),
        ];
      });
  }

  render() {
    let energy = this.state.energyPortions;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="title fc-green">PORTION OF ENERGY</h2>
          </div>
          <div className="row">
            <div className="col-md-8">
              <span className="g-c-value">25%</span>
              <div
                id="PortionOfEnergy"
                style={{ width: "100%", height: "200px" }}
              ></div>
            </div>
            <div className="col-md-4">
              <p className=" grey mb-0 mt-70">Total Energy</p>
              <p className="cost-blue  fs-24">208.89 kW</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="portion-widgets p-2">
                <img src={wave} alt="wave" width="20px" />
                <span className="black"> Electicity</span>
                <p className="grey mb-0 ml-25">
                  {Number.parseFloat(energy.electricityUnit.value).toFixed(2)}{" "}
                  &nbsp;
                  {energy.electricityUnit.unit}
                </p>
                <p className="cost-blue mb-0 ml-25">9,096 Baht</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="portion-widgets p-2">
                <img src={sun} alt="sun" width="20px" />
                <span className="black"> Solar</span>
                <p className="grey mb-0 ml-25">
                  {Number.parseFloat(energy.renewableGenerated.value).toFixed(
                    2
                  )}{" "}
                  &nbsp;
                  {energy.renewableGenerated.unit}
                </p>
                <p className="cost-blue mb-0 ml-25">9,096 Baht</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="portion-widgets p-2">
                <img src={gas} alt="gas" width="20px" />
                <span className="black"> Gas:</span>
                <p className="grey mb-0 ml-25">
                  {this.state.gas}
                  &nbsp; kWh
                </p>
                <p className="cost-blue mb-0 ml-25">9,096 Baht</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="portion-widgets p-2">
                <img src={wind} alt="wave" width="20px" />
                <span className="black"> Gas:</span>
                <p className="grey mb-0 ml-25">
                  {this.state.gas}
                  &nbsp; kWh
                </p>
                <p className="cost-blue mb-0 ml-25">9,096 Baht</p>
              </div>
            </div>

            {/*  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="portion-widgets">
                <img src="img/venkin/Group-5.png" width="18px" /> CO2:{" "}
                {Number.parseFloat(energy.co2.value).toFixed(2)}{" "}
                {energy.co2.unit}
                <div className="poe-green">
                  <span> 9,096 Baht</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PortionOfEnergy;
