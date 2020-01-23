import axios from 'axios'
import {connect} from 'react-redux'

export const FETCHING_ROCKET_START = 'FETCHING_ROCKET_START'
export const FETCHING_ROCKET_SUCCESS = 'FETCHING_ROCKET_SUCCESS'
export const FETCHING_ROCKET_ERROR = 'FETCHING_ROCKET_ERROR'


export const fetchRocket = (URL) => {
  return dispatch => {
    dispatch({ type: FETCHING_ROCKET_START })
    axios.get(URL)
    .then(res => {
      dispatch({
        type: FETCHING_ROCKET_SUCCESS, payload: res.data
      })
    })
    .catch(err => dispatch({
        type: FETCHING_ROCKET_ERROR, payload: err
      })
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    baseURL: state.baseURL
  }
}

export default connect (
  mapStateToProps, 
  {}
)(fetchRocket)