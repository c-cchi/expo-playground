import { useState, useContext } from 'react'
import { SearchBar, Button, Text } from '@rneui/themed'

import MovieContext from '../store/movieContext'

export default function SearchMovieBar() {
  const { fetchMovies } = useContext(MovieContext)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)

  const searchKeyword = () => {
    if (text.length < 3) {
      setAlert(true)
    } else {
      setAlert(false)
      fetchMovies(text)
    }
  }

  return (
    <>
      <SearchBar
        placeholder="Search..."
        onChangeText={input => {
          setText(input)
        }}
        value={text}
        lightTheme={true}
      />
      {alert ? (
        <Text style={{ fontSize: 14, lineHeight: 20, padding: 6 }}>
          Keyword must be at least 3 characters long
        </Text>
      ) : null}
      <Button
        title="search"
        onPress={() => {
          searchKeyword()
        }}
      />
    </>
  )
}
