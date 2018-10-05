import React, { Component } from 'react'

export const MyContext = React.createContext()

export class context extends Component {
    state = {
        num: 0
    }
  render() {
    return (
        <MyContext.Provider value = {{
            state: this.state,
            add: () => {
                return this.setState({num: this.state.num +1})
            },
            subtract: () => {
                return this.setState({num: this.state.num -1})
            },
            multiply: () => {
                return this.setState({num: this.state.num * this.state.num})
            },
            divide: () => {
                return this.setState({num: this.state.num % this.state.num})
            },
        }}>
            {this.props.children}
        </MyContext.Provider>
    )
  }
}

export default context
