import React from 'react';
import { connect } from 'react-redux';
import component from '../components/top';
import { getMe } from '../actions/user';
import { getProjects } from '../actions/project';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onGetMe(state) {
    dispatch(getMe(state));
  },
  onGetProjects(state) {
    dispatch(getProjects(state));
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
