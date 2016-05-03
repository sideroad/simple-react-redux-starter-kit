/* @flow */
import React, {Component} from 'react';


export default class Counter extends Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired
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
      </div>
    );
  }
}
