import React from "react";
import mapImage from "../../resources/images/bg.svg";

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <img className="map-image mt-70" src={mapImage} alt="map" />
      </div>
    );
  }
}
