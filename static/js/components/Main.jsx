import { bindActionCreators, getState } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import CodeCraftsmanship from './CodeCraftsmanship.jsx';

function mapStateToProps(state) {
  return {
    users: state["users"]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch, getState);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(CodeCraftsmanship);

export default Main;
