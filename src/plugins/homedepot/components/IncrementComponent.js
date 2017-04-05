'use strict';

import React, { PropTypes } from 'react';
import SampleComponent from './SampleComponent';
import CsbListComponent from '../../stylyze/components/CsbListComponent';

require('../styles/Self.css');

class IncrementComponent extends React.Component {
  render() {
    return (
      <div className="self-component">
        <h3>Home Depot</h3>
        <div>{ this.props.number }</div>
        <div><button onClick={ this.handleClick.bind(this) }>Add 1</button></div>
        <hr/>
        <h3>CsbList (a component from stylyze plugin)</h3>
        <div><button onClick={ this.handleClick1.bind(this) }>Fetch CSBS</button></div>
        <CsbListComponent csbs={ this.props.csbs } />
      </div>
    );
  }

  handleClick() {
    this.props.increment()
  }

  handleClick1() {
    this.props.getCsbs()
  }

/*  static displayName = 'IncrementComponent'
  static propTypes = {
    increment: PropTypes.number.isRequired
  }*/
}

IncrementComponent.displayName = 'IncrementComponent';

// Uncomment properties you need
IncrementComponent.propTypes = {
  number: PropTypes.number.isRequired,
  csbs: PropTypes.array.isRequired,
  increment: PropTypes.func.isRequired
};
// SelfComponent.defaultProps = {};

export default IncrementComponent;
