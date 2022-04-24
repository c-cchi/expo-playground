import { useState, useContext } from 'react'
import { SearchBar, Button } from '@rneui/themed'

import MovieContext from '../store/movieContext'

export default function SearchMovieBar() {
  const { fetchMovies } = useContext(MovieContext)
  const [text, setText] = useState('')

  const searchKeyword = () => {
    fetchMovies(text)
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
