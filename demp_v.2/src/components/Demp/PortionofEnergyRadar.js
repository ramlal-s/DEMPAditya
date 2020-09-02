import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class PortionOfEnergyRadar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    //am4core.addLicense("CH212555597");
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    /* Create chart instance */
    let chart = am4core.create("PortionOfEnergyRadar", am4charts.RadarChart);

    /* Add data */
    chart.data = [
      {
        country: "sun",
        litres: 501,
        litres1: 200,
        litres2: 100,
      },
      {
        country: "mon",
        litres: 301,
        litres1: 100,
        litres2: 500,
      },
      {
        country: "tue",
        litres: 266,
        litres1: 400,
        litres2: 600,
      },
      {
        country: "wed",
        litres: 165,
        litres1: 50,
        litres2: 300,
      },
      {
        country: "thu",
        litres: 139,
        litres1: 600,
        litres2: 300,
      },
      {
        country: "fri",
        litres: 336,
        litres1: 500,
        litres2: 100,
      },
      {
        country: "sat",
        litres: 290,
        litres1: 100,
        litres2: 600,
      },
    ];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.stroke = am4core.color("#bbbbbb");
    categoryAxis.renderer.labels.template.fill = am4core.color("#62368F");
    categoryAxis.renderer.fontSize = 20;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
    valueAxis.renderer.axisFills.template.fillOpacity = 0.05;
    valueAxis.renderer.grid.template.stroke = am4core.color("#bbbbbb");
    valueAxis.renderer.labels.template.fill = am4core.color("#D8D8D8");
    valueAxis.renderer.gridType = "polygons";

    /* Create and configure series */
    let series = chart.series.push(new am4charts.RadarSeries());
    series.stroke = am4core.color("#B39EC9");
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Solar";
    series.strokeWidth = 1;

    /* Create and configure series2 */
    let series1 = chart.series.push(new am4charts.RadarSeries());
    series1.stroke = am4core.color("#F2CD8F");
    series1.dataFields.valueY = "litres1";
    series1.dataFields.categoryX = "country";
    series1.name = "Ele";
    series1.strokeWidth = 1;

    /* Add legend */
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = false;
    var marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    // marker.strokeWidth = 2;
    // marker.strokeOpacity = 1;
    // marker.stroke = am4core.color("#ccc");
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="col-md-4 mt-25">
        <div className="cardContainer">
          <div className="widget-title-new">
            <h2 className="title">PORTION OF ENERGY</h2>
          </div>
          <div
            id="PortionOfEnergyRadar"
            style={{ width: "100%", height: "390px" }}
          />
        </div>
      </div>
    );
  }
}
export default PortionOfEnergyRadar;
