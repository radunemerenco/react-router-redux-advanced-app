import React from 'react';
import { Link } from 'react-router';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h2>Apt2b Plugin</h2>
        <div className="notice"><Link to="/hd">Homedepot plugin</Link></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

module.exports = AppComponent;
