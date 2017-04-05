require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import { Link } from 'react-router';

let yeomanImage = require('../images/THD_logo.jpg');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <h2>Homedepot Plugin</h2>
        <div className="notice"><Link to="/example">stylyze</Link></div>
        <div className="notice"><Link to="/hd">homedepot</Link></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

module.exports = AppComponent;
