import { bindActionCreators, getState } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import TriangleReact from './TriangleReact';

function mapStateToProps(state) {
  return {
    users: state["users"]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch, getState);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(TriangleReact);

export default Main;
