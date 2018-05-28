import React from 'react'
import { connect } from 'react-redux'
import AwesomeComponent from '../components'
import { awesomeEvent } from '../actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: () => {
      dispatch(awesomeEvent())
    }
  }
}

const AwesomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AwesomeComponent)

export default AwesomeContainer