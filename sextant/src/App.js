import './App.css';
import React, {Component} from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';

class App extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="container">
          <Banner textBanner={"Sextant"}></Banner>
        </div>
        <div>
          <Exhibit name="Exhibit 1">
            <IPAddress url="https://api.ipify.org?format=json"></IPAddress>
          </Exhibit>
          <Exhibit name="Exhibit 2">
              <IPAddress url="https://api64.ipify.org?format=json"></IPAddress>
          </Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
