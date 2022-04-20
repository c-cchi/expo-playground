import { makeAutoObservable } from 'mobx'
import Constants from 'expo-constants'

class Store {
  movies: Array<object> = []

  constructor() {
    makeAutoObservable(this)
  }

  fetchMovies(keyword: string) {
    fetch(
      `http://www.omdbapi.com/?apikey=${Constants.manifest.extra.API_KEY}&s=${keyword}`
    )
      .then(res => res.json())
      .then(movies => {
        store.movies = movies['Search']
      })
  }
}

const store = new Store()
export default store
