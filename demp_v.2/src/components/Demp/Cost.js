import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class Cost extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    /* Chart code */
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
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="title">COST</h2>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
              <div className="cost-bar">
                <p className="small-title mb-0">Months</p>
                <h6 className="voilet-value">Payback</h6>
                <p className="num-font mb-0">150</p>
                <p className="small-title mb-0">Million Bath</p>
                <h5 className="clr-title ">Next Month Prediction</h5>
                <p className="num-font mb-0">32</p>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
              <div className="cost-bar-right">
                <p className="small-title mb-0">Total Cost Save</p>
                <h2 className="mb-0 voilet-value">95.10</h2>
                <p className="small-title mb-0">Million Bath</p>
              </div>
              <div className="cost-bar-right">
                <p className="change">
                  Weekly Change
                  <span className="fs-14 cr">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                    &nbsp;&nbsp;-2063
                  </span>
                </p>
                <p className="change">
                  Monthly Change
                  <span className="fs-14 cg">
                    &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                    &nbsp;&nbsp; +33&nbsp;&nbsp;&nbsp;
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="cost-graph m-l--30">
            <div id="Cost" style={{ width: "100%", height: "230px" }} />;
          </div>
        </div>
      </div>
    );
  }
}

export default Cost;
