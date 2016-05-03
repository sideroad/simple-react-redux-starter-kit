import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Counter} from 'components';
import * as counterActions from '../modules/counter';

@connect(
  state => ({
    counter: state.counter.counter
  }),
  {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
    reset: counterActions.reset
  })
export default class CounterContainer extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  }

  render() {
    const {
      counter,
      increment,
      decrement,
      reset
    } = this.props;
    return (
      <Counter
        counter={counter}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  }
}
