import React from 'react';
import { connect } from 'react-redux';
import component from '../components/Top';
import { fetchProjects } from '../actions/project';
import { fetchUser } from '../actions/user';

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => ({
  fetchProjects() {
    dispatch(fetchProjects());
  },
  fetchUser() {
    dispatch(fetchUser());
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
