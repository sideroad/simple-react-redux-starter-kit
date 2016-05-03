import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Counter} from 'components';
import * as counterActions from '../modules/counter';

@connect(
  state => ({
    counter: state.counter.counter
  }),
  {
    increment: counterActions.increment
  })
export default class CounterContainer extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired
  }

  render() {
    const {
      counter,
      increment
    } = this.props;
    return (
      <Counter counter={counter} increment={increment} />
    );
  }
}
