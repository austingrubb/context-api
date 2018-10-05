import React, { Component } from 'react'
import {MyContext} from './test-context'
import './counter.css'


export class Person extends Component {
  render() {
    return (
      <div className="counter">
        <MyContext.Consumer>
          {(context)=> {
            return(
              <div>
                <button onClick={context.add}>add</button>
                <button onClick={context.subtract}>subtract</button>
                {context.state.num}
                <button onClick={context.multiply}>multiply</button>
                <button onClick={context.divide}>divide</button>
              </div>
            )
          }}
        </MyContext.Consumer>
        
      </div>
    )
  }
}

export default Person
