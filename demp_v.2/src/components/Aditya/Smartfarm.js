import React from "react";
import Map from "../Demp/Map";
import Buttons from "./buttons";
import Climate from "./Climate";
import History from "./History";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";
import PlantSummary from "./PlantSummary";
import Catchment from "./Catchment";
import PlantField from "./PlantField";
import WindTurbines from "./WindTurbines";
import SolarCells from "./SolarCells";
import Biocide from "./Biocide";
import Battery from "./Battery";
import PlantFieldTwo from "./PlantFieldTwo";
import PlantFieldThree from "./PlantFieldThree";
import PlantFieldFive from "./PlantFieldFive";
import PlantFieldSix from "./PlantFieldSix";
import PlantFieldSeven from "./PlantFieldSeven";
import SettingLogin from "./SettingLogin";
export default class SmartFarm extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <Buttons />
        <div className="row mr-0 m-l-15">
          <Biocide />
          <SolarCells />
          <WindTurbines />
          <Battery />
          <Climate />
          <Widget2 />
          <Widget3 />
          <History />
          <PlantSummary />
          <Catchment />
          <PlantField />
          <PlantFieldTwo />
          <PlantFieldThree />
          <PlantFieldFive />
          <PlantFieldSix />
          <PlantFieldSeven />

          {/*   <SettingLogin /> */}
        </div>
        <br /> <br /> <br /> <br />
      </div>
    );
  }
}
