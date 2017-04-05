'use strict';

import React, { PropTypes } from 'react';

class CsbListComponent extends React.Component {
  render() {
    let csbsList = this.props.csbs.map((csb, key) => {
      return <div key={key}>
        <span>Key: </span>{ csb.id } &nbsp;|&nbsp;
        <span>Style: </span>{ csb.style }
      </div>
    });
    return (
      <div className="self-component">
        { csbsList }
      </div>
    );
  }
}

CsbListComponent.displayName = 'CsbListComponent';

// Uncomment properties you need
CsbListComponent.propTypes = {
  csbs: PropTypes.array.isRequired
};
// SelfComponent.defaultProps = {};

export default CsbListComponent;
