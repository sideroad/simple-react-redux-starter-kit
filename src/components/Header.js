import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to="/" >
          Home
        </IndexLink>
        {' · '}
        <Link to="/counter" >
          Counter
        </Link>
      </div>
    );
  }
}
