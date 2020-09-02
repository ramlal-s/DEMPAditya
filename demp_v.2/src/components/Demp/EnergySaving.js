import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class EnergySavings extends Component {
  componentDidMount() {
    am4core.addLicense("CH212555597");

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("EnergySavings", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        country: "Last Month",
        visits: 2025,
      },
      {
        country: "Last Week",
        visits: 1882,
      },
      {
        country: "Yesterday",
        visits: 1809,
      },
      {
        country: "Today",
        visits: 1322,
      },
      {
        country: "Average",
        visits: 1122,
      },
    ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.fontSize = 10;
    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.line.strokeWidth = 2;
    categoryAxis.renderer.line.stroke = am4core.color("#8466A3");

    categoryAxis.renderer.labels.template.adapter.add("dy", function (
      dy,
      target
    ) {
      if (target.dataItem && target.dataItem.index & (2 == 2)) {
        return dy + 0;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = am4core.color("#8466A3");
    valueAxis.renderer.fontSize = 10;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;
    series.columns.template.width = am4core.percent(50);

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 1;
    let gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color("#5B86A3"));
    gradient.addColor(am4core.color("#A670AF"));
    gradient.rotation = 129;
    series.columns.template.fill = gradient;
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="cardContainer">
          <div className="widget-title-new ">
            <h2 className="title">ENERGY SAVING</h2>
          </div>
          <div className="widget-title-new ml--26">
            <div
              id="EnergySavings"
              style={{ width: "100%", height: "305px" }}
            />
            <div>
              <p className="ta-center black saveS">
                Today save <span className="voilet-value">230 kWh</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EnergySavings;
