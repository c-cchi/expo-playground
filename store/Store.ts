import { makeAutoObservable } from 'mobx'

class Store {
  movies: object = {}

  constructor() {
    makeAutoObservable(this)
  }

  load() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${}`)
      .then(res => res.json())
      .then(movies => {
        store.movies = movies
      })
  }
}

const store = new Store()
export default store
