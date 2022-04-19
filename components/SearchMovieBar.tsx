import { useState } from 'react'
import { SearchBar, Button } from '@rneui/themed'

import store from '../store/Store'

export default function SearchMovieBar() {
  const [text, setText] = useState('godfather')

  const searchKeyword = () => {
    store.fetchMovies(text)
    console.log(store.movies)
  }

  return (
    <>
      <SearchBar
        placeholder="Search..."
        onChangeText={input => {
          setText(input)
        }}
        value={text}
        containerStyle={{ width: '80%' }}
        lightTheme={true}
      />
      <Button
        title="search"
        onPress={() => {
          searchKeyword()
        }}
      />
    </>
  )
}
