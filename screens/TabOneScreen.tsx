import { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { observer } from 'mobx-react'
import { ListItem } from '@rneui/themed'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import SearchMovieBar from '../components/SearchMovieBar'

import store from '../store/Store'

interface MovieInfo {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [movieDisplay, setMovieDisplay] = useState<MovieInfo[]>([])

  useEffect(() => {
    setMovieDisplay(store.movies)
  }, [store.movies])

  return (
    <View>
      <SearchMovieBar />
      <ScrollView>
        {movieDisplay.map((movie, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title>{movie.Title}</ListItem.Title>
              <ListItem.Subtitle>{movie.Type}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})

export default observer(TabOneScreen)
