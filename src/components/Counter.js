/* @flow */
import React, {Component, PropTypes} from 'react';


export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <h2>
          Counter:
          {' '}
          <span>
            {this.props.counter}
          </span>
        </h2>
        <button className="btn btn-default" onClick={this.props.increment}>
          Increment
        </button>
        <button className="btn btn-default" onClick={this.props.decrement}>
          Decrement
        </button>
        <button className="btn btn-default" onClick={this.props.reset}>
          Reset
        </button>
      </div>
    );
  }
}
