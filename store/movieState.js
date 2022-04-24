import React, { useReducer } from 'react'
import MovieContext from './movieContext'
import Reducer from './movieReducer'
import Constants from 'expo-constants'
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from './actionType'

export default movieState = props => {
  const initialState = {
    movies: [],
    loading: false,
    error: '',
    movieDetail: {}
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  const fetchMovies = async keyword => {
    dispatch({
      type: FETCH_MOVIES
    })
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${Constants.manifest.extra.API_KEY}&s=${keyword}`
      ).then(res => res.json())
      //TODO :: error cases
      if (response?.['Error']) {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: response['Error'].toString()
        })
      } else {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: response['Search']
        })
      }
    } catch (err) {
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: err.toString()
      })
    }
  }

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        loading: state.loading,
        movieDetail: state.movieDetail,
        fetchMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  )
}
