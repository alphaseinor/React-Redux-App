import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { fetchRocket } from '../actions'

const Rocket = ({fetchRocket, baseURL, isLoading, rocket, error}) => {

  useEffect(()=>{
    fetchRocket(baseURL)
  }, [])

  return (
    <>
      {!rocket && !isLoading &&(<h2>no rockets</h2>) }
      {isLoading && (
        <>
          <h2>Loading Rockets</h2>
          <Loader 
            type = 'Circles'
          />
        </>
      )}
      {rocket && !isLoading && <h2>data</h2>}
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    baseURL: state.baseURL,
    isLoading: state.isLoading,
    rocket: state.rocket,
    error: state.error
  }
}

export default connect (
  mapStateToProps, 
  {fetchRocket}
)(
  Rocket
)

