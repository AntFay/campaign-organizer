import React, { Component } from 'react';
import './App.css';
import unitJson from './units.json';

import EncounterView from './views/components/encounter-view';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: unitJson.units
    }
  }

  render() {
    return (
      <div className="App">
        <EncounterView units={ this.state.units } />
      </div>
    );
  }
}

export default App;
