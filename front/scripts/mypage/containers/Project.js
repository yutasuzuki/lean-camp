import React from 'react';
import { connect } from 'react-redux';
import component from '../components/Project';
import { fetchProject } from '../actions/project';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchProject(payload) {
    dispatch(fetchProject(payload));
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
