import React, {
  Component,
  PropTypes
} from 'react';
import selfActions from '../../actions';
import stylyzeActions from '../../../stylyze/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncrementComponent from '../../components/IncrementComponent';

class Algebra extends Component {
  render() {
    return <IncrementComponent
      number={ this.props.algebra.number }
      csbs={ this.props.gallery.csbs }
      increment={ this.props.actions.increment }
      getCsbs={ this.props.actions.getCsbs }
    />;
  }
}

self.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    algebra: state.algebra,
    gallery: state.gallery
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  //const actions = { increment };
  let allActions = {};
  Object.assign(allActions, selfActions, stylyzeActions);
  const actionMap = { actions: bindActionCreators(allActions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Algebra);
