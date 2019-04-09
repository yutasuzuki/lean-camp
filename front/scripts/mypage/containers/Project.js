import React from 'react';
import { connect } from 'react-redux';
import component from '../components/Project';
import { fetchProject } from '../actions/project';
import { fetchLeanCanvas } from '../actions/leanCanvas';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchProject(params) {
    dispatch(fetchProject(params));
  },
  fetchLeanCanvas(params) {
    dispatch(fetchLeanCanvas(params));
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
