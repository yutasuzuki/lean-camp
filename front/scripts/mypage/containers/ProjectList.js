import React from 'react';
import { connect } from 'react-redux';
import component from '../components/ProjectList';
import { selectProject, updateProject, editProjectName } from '../actions/project';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  selectProject(id) {
    dispatch(selectProject(id));
  },
  editProjectName(name) {
    dispatch(editProjectName(name));
  },
  updateProjectName(params) {
    dispatch(updateProject(params));
  }
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
