import React, { Component } from 'react';
import { CurrentValue, PageAlerts } from './components/';
import { Upgrades } from './components/upgrades/'
import './App.css';

class App extends Component {
  render() {
      return (
        <div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <CurrentValue />              
                <Upgrades />
                <PageAlerts />                  
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
