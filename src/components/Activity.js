import React from 'react'
import { connect } from 'react-redux'

const Activity = ({isLoading, rocket, error}) => {
  return (
    <>
      {!rocket && (<h2>no rockets</h2>) }
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoading: state.isLoading,
    rocket: state.rocket,
    error: state.error
  }
}

export default connect (
  mapStateToProps, 
  {}
)(
  Activity
)

