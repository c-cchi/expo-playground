import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from './actionType'

export default (state, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
  }
}
