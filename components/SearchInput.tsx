import { useState } from 'react'
import { SearchBar } from '@rneui/themed'

export default function SearchInput() {
  const [text, setText] = useState('')
  return (
    <SearchBar
      placeholder="Search..."
      onChangeText={input => setText(input)}
      value={text}
      containerStyle={{ width: '100%' }}
      lightTheme={true}
    />
  )
}
