import React from "react";
import Map from "./Map";
import EnergyCards from "./EnergyCards";
import EnergySavings from "./EnergySaving";
import EnergyPowerConsumption from "./EnergyPowerConsumption";
import Cost from "./Cost";
import PortionOfEnergyRadar from "./PortionofEnergyRadar";
import DeviceSummary from "./deviceSummary";
import PortionOfEnergy from "./PortionOfEnergy";
import EventLogs from "./EventLogs";
import Battery from "./Battery";
export default class DempMain extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <EnergyCards />
        <br />
        <br />
        <div className="row mr-0 m-l-15">
          <EnergySavings />
          <EnergyPowerConsumption />
          <Cost />
          <PortionOfEnergyRadar />
          <DeviceSummary />
          <PortionOfEnergy />
          <EventLogs />
          <Battery />
        </div>
      </div>
    );
  }
}
