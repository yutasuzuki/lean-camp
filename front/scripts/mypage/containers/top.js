import React from 'react';
import { connect } from 'react-redux';
import component from '../components/top';
import { getProjects } from '../actions/project';
import { fetchUser } from '../actions/user';

const mapStateToProps = state => {
  console.log('state', state); 
  return state
};

const mapDispatchToProps = dispatch => ({
  onGetProjects(state) {
    dispatch(getProjects(state));
  },
  fetchUser(state) {
    dispatch(fetchUser())
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
