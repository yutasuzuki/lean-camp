import React from 'react';
import { connect } from 'react-redux';
import component from '../components/Top';
import { fetchProjects, createProject } from '../actions/project';
import { fetchUser } from '../actions/user';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    dispatch(fetchUser());
  },
  fetchProjects() {
    dispatch(fetchProjects());
  },
  createProject(params) {
    dispatch(createProject(params));
  },
  updateProject() {
    console.log(111111);
  }
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
