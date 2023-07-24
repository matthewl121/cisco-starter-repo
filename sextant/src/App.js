import './App.css';
import React, {Component} from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="container">
          <Banner textBanner={"Sextant"}></Banner>
        </div>
        <div>
          <Exhibit name="Exhibit 1"></Exhibit>
          <Exhibit name="Exhibit 2"></Exhibit>
          <Exhibit name="Exhibit 3"></Exhibit>
          <Exhibit name="Exhibit 4"></Exhibit>
          <Exhibit name="Exhibit 5"></Exhibit>
          <Exhibit name="Exhibit 6"></Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
