import { useEffect, useState, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { ListItem, Avatar, Icon } from '@rneui/themed'

import { RootTabScreenProps, MovieInfo } from '../types'
import SearchMovieBar from '../components/SearchMovieBar'

import MovieContext from '../store/movieContext'

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { movies, loading, fetchMovieDetail } = useContext(MovieContext)

  const [movieDisplay, setMovieDisplay] = useState<MovieInfo[]>([])
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    setMovieDisplay(movies)
  }, [movies])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  return (
    <SafeAreaView>
      <SearchMovieBar />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          movieDisplay.map((movie, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                fetchMovieDetail(movie.imdbID)
                navigation.navigate('Modal')
              }}
            >
              <ListItem>
                <Avatar
                  imageProps={{ resizeMode: 'contain' }}
                  size={'xlarge'}
                  source={{ uri: movie.Poster }}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <ListItem.Content>
                  <ListItem.Title>{movie.Title}</ListItem.Title>
                  <ListItem.Subtitle>{movie.Type}</ListItem.Subtitle>
                  <ListItem.Subtitle>{movie.Year}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
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

export default TabOneScreen
