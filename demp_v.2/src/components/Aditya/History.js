import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import plant_icon from "../../resources/images/icons/plant-icon.png";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class History extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    /* Chart code */
    am4core.addLicense("CH212555597");
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("Cost", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    let previousValue;

    for (var i = 0; i < 100; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      if (i > 0) {
        // add color to previous data item depending on whether current value is less or more than previous value
        if (previousValue <= visits) {
          data[i - 1].color = chart.colors.getIndex(0);
        } else {
          data[i - 1].color = chart.colors.getIndex(5);
        }
      }

      data.push({ date: new Date(2018, 0, i + 1), value: visits });
      previousValue = visits;
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";

    // set stroke property field
    series.propertyFields.stroke = "color";

    chart.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarX = scrollbarX;

    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
  }
  render() {
    const bar1 = 70;
    const bar2 = 40;
    const now = 90;
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="stitle  fc-green mb-0">History</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="cost-bar">
                <p className="small-stitle mb-0">Changes compared to today</p>
              </div>
              <div className="cost-bar">
                <p className="small-stitle mb-0">
                  Weekly Change
                  <span className="fs-14 cr">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                    &nbsp;&nbsp;-2063
                  </span>
                </p>
                <p className="small-stitle mb-0">
                  Monthly Change
                  <span className="fs-14 cg">
                    &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                    &nbsp;&nbsp; +33&nbsp;&nbsp;&nbsp;
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="cost-bar-right">
                <p className="small-stitle mb-0">Total income</p>
                <p className="small-stitle mb-0">21 July 2020 - 21 Aug 2020</p>
                <p className="h-value mb-0">15,040,000</p>
                <p className="small-title mb-0">Million Bath</p>
              </div>
            </div>
          </div>
          <div className="cost-graph m-l--30">
            <div id="Cost" style={{ width: "100%", height: "180px" }} />;
          </div>
          <div className="row mt--30">
            <div className="histhead col-md-12 mb-10">ผลผลิตที่ได้</div>
            <div className="col-md-6 mb-10">
              <div className="row">
                <div className="col-md-3 mt-7">
                  <img src={plant_icon} alt="plant" />
                </div>
                <div className="col-md-9">
                  <div className="fc-pink">
                    <span>Crop 1</span> <span className="ml-14">90 Tons</span>
                  </div>
                  <ProgressBar className="pb-1" now={bar1} label={`${bar1}%`} />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-10">
              <div className="row">
                <div className="col-md-3 mt-7">
                  <img src={plant_icon} alt="plant" />
                </div>
                <div className="col-md-9">
                  <div className="fc-pink">
                    <span>Crop 2</span> <span className="ml-14">10 Tons</span>
                  </div>
                  <ProgressBar className="pb-2" now={bar2} label={`${bar2}%`} />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-10">
              <div className="row">
                <div className="col-md-3 mt-7">
                  <img src={plant_icon} alt="plant" />
                </div>
                <div className="col-md-9">
                  <div className="fc-pink">
                    <span>Crop 3</span> <span className="ml-14">50 Tons</span>
                  </div>
                  <ProgressBar className="pb-3" now={now} label={`${now}%`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
