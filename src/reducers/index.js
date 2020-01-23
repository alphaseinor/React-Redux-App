import {
  FETCHING_ROCKET_START, 
  FETCHING_ROCKET_ERROR,
  FETCHING_ROCKET_SUCCESS
} from '../actions'

const initialState = {
  baseURL: 'https://api.spacexdata.com/v3',
  isLoading: false,
  rocket: null,
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_ROCKET_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCHING_ROCKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rocket: action.payload
      }
    case FETCHING_ROCKET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

