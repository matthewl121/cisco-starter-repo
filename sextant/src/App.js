import './App.css';
import React, {Component} from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';
import PylonConnection from './PylonConnection';

class App extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="HeaderRow">
          <div className="container">
            <Banner textBanner={"Sextant Dashboard"}/>
          </div>
        </div>
        <div className="ExhibitsWrapper container">
          <div className="ExhibitsWrapperInner">
            <div className="IPStatistics">
              <span className="IPStatisticsHeader">IP Statistics</span>
            </div>
            <Exhibit name="IP Address (IPv4)">
              <IPAddress url="https://api.ipify.org?format=json"/>
            </Exhibit>
            <Exhibit name="IP Address (IPv6)">
              <IPAddress url="https://api64.ipify.org?format=json"/>
            </Exhibit>
            <Exhibit name="Pylon Latency">
              <PylonConnection />
            </Exhibit>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
