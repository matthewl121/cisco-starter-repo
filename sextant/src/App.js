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
        <div className="container">
          <Banner textBanner={"Sextant"}></Banner>
        </div>
        <div>
          <Exhibit name="IP Address (IPv4)">
            <IPAddress url="https://api.ipify.org?format=json"></IPAddress>
          </Exhibit>
          <Exhibit name="IP Address (IPv6)">
              <IPAddress url="https://api64.ipify.org?format=json"></IPAddress>
          </Exhibit>
          <Exhibit name="Pylon Latency">
            <PylonConnection></PylonConnection>
          </Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
