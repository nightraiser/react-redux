import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';
class Page extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
             <h1>Counter = {this.props.counter}</h1>
             &nbsp;<button onClick={this.props.increment}>increment</button>
             &nbsp;<button onClick={this.props.decrement}>decrement</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})

const mapStateToProps = (state) => ({
    counter: state.counter
})
export default connect(mapStateToProps, mapDispatchToProps)(Page);