import React from 'react';
import { connect } from 'react-redux';
import AwesomeComponent from '../components';
import { awesomeEvent } from '../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onClickHandler: () => {
    dispatch(awesomeEvent());
  },
});

const AwesomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AwesomeComponent);

export default AwesomeContainer;
