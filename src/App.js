import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Context from './components/test-context'
import Counter from './components/counter-context'
import Test from './components/redux-test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="context">
          <img src='https://scotch-res.cloudinary.com/image/upload/dpr_1,w_1000,q_auto:good,f_auto/v1535753435/mrpmctacavgautwvxvti.png' className="App-logo" alt="logo" />
            Learn Context.api
            <div>
              <Context>
                <div>
                  <Counter/>
                </div>
              </Context>
            </div>
        </header>
          <div className='redux'>
            <img src='http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png' className="App-logo" alt="logo" />
            Learn Redux
            <div>
              <Test/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
