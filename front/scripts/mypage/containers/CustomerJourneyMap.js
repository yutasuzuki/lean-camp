import React from 'react';
import { connect } from 'react-redux';
import component from '../components/CustomerJourneyMap';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default container;
