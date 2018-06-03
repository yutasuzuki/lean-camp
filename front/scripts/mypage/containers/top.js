import React from 'react'
import { connect } from 'react-redux'
import component from '../components/top'
import { getMe } from '../actions/user'
import { getLeanCanvasList } from '../actions/leanCanvas'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMe(state) {
      dispatch(getMe(state))
    },
    onGetLeanCanvasList(state) {
      dispatch(getLeanCanvasList(state))
    },
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default container