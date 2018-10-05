import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './components/test-context'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://scotch-res.cloudinary.com/image/upload/dpr_1,w_1000,q_auto:good,f_auto/v1535753435/mrpmctacavgautwvxvti.png' className="App-logo" alt="logo" />
            <div>
              <Context>
                <div>
                  <Counter/>
                </div>
              </Context>
            </div>
            Learn Context.api
        </header>
      </div>
    );
  }
}

export default App;
