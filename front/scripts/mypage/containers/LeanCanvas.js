import React from 'react';
import { connect } from 'react-redux';
import component from '../components/LeanCanvas';
import { } from '../actions/leanCanvas'

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchLeanCanvas(id) {
    dispatch(fetchLeanCanvas(id));
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
