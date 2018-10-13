import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add} from '../ducks/reducer';
import {sub} from '../ducks/reducer';
import {multiply} from '../ducks/reducer';
import {divide} from '../ducks/reducer';
import './test.css'

class Test extends Component {
    render() {
        return (
            <div className='reduxTest'>
            <button onClick={this.props.add}>add</button>
            <button onClick={this.props.sub}>subtract</button>
            {this.props.state}
            <button onClick={this.props.multiply}>multiply</button>
            <button onClick={this.props.divide}>divide</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state.num
    }
}

const mapDispatchToProps = {
    add: add,
    sub: sub,
    multiply:multiply,
    divide: divide
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);