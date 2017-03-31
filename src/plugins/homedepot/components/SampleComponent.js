'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router'

require('../styles/Self.css');

class SampleComponent extends React.Component {
  render() {
    return (
      <div className="self-component">
        <div>Home Depot</div>
        <Link to="/hd/algebra">Open Algebra</Link>
      </div>
    );
  }
}

SampleComponent.displayName = 'SampleComponent';

// Uncomment properties you need
// SampleComponent.propTypes = {
//   myProp: PropTypes.number.isRequired
// };
// SelfComponent.defaultProps = {};

export default SampleComponent;
