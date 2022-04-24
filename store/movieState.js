import React, { useReducer } from 'react'
import MovieContext from './movieContext'
import Reducer from './movieReducer'
import Constants from 'expo-constants'
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE
} from './actionType'

export default movieState = props => {
  const initialState = {
    movies: [],
    loading: false,
    error: '',
    movieDetail: {},
    detailLoading: false
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

  const fetchMovieDetail = async ID => {
    dispatch({
      type: FETCH_MOVIES
    })
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${Constants.manifest.extra.API_KEY}&i=${ID}`
      ).then(res => res.json())
      console.log(response)
      dispatch({
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        payload: response
      })
    } catch (err) {
      dispatch({
        type: FETCH_MOVIE_DETAIL_FAILURE,
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
        detailLoading: state.detailLoading,
        fetchMovies,
        fetchMovieDetail
      }}
    >
      {props.children}
    </MovieContext.Provider>
  )
}
