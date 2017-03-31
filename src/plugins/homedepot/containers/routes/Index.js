'use strict';

import React from 'react';
import {  increment } from '../../actions';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import SampleComponent from '../../components/SampleComponent';

require('../../styles/routes/Index.css');

class Index extends React.Component {
  render() {
    return (
      <SampleComponent increment={ this.props.actions.increment }/>
    );
  }
}

Index.displayName = 'RoutesIndex';

function mapStateToProps(state) {
  const props = { increment: state.increment };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { increment };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
