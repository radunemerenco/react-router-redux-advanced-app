import React, {
  Component,
  PropTypes
} from 'react';
import { increment } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncrementComponent from '../../components/IncrementComponent';

class Self extends Component {
  render() {
    return <IncrementComponent
      number={ this.props.algebra.number }
      increment={ this.props.actions.increment }
    />;
  }
}

self.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    algebra: state.algebra
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { increment };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Self);
