import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE
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
        error: action.payload
      }
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        detailLoading: true
      }
    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detailLoading: false,
        movieDetail: action.payload
      }
    case FETCH_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        detailLoading: false
      }
  }
}
