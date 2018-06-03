import React from 'react'
import { connect } from 'react-redux'
import component from '../components/LeanCanvas'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default container