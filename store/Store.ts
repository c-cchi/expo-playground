import { makeAutoObservable } from 'mobx'
import Constants from 'expo-constants'

class Store {
  movies: object = {}

  constructor() {
    makeAutoObservable(this)
  }

  load() {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${Constants.manifest.extra.API_KEY}`
    )
      .then(res => res.json())
      .then(movies => {
        store.movies = movies
      })
  }
}

const store = new Store()
export default store
