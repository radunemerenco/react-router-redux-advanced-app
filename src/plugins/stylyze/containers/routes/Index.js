'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import actions from '../../actions';
import LoginComponent from '../../components/LoginComponent';


require('../../styles/routes/Index.css');

class Index extends React.Component {
  render() {
    return (
      <LoginComponent
        login={this.props.actions.login}
        loggedIn={this.props.user.login}
      />
    );
  }
}

Index.displayName = 'RoutesIndex';

function mapStateToProps(state) {
  const props = { user: state.user };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
