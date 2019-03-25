import React from 'react';
import { connect } from 'react-redux';
import component from '../components/ProjectList';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateProject() {
    console.log(111111);
  }
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
