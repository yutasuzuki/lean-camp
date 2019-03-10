import React from 'react';
import { connect } from 'react-redux';
import component from '../components/Project';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
