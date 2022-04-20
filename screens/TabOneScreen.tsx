import { useEffect, useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { observer } from 'mobx-react'
import { ListItem, Avatar, Icon } from '@rneui/themed'

import { RootTabScreenProps, MovieInfo } from '../types'
import SearchMovieBar from '../components/SearchMovieBar'

import store from '../store/Store'

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [movieDisplay, setMovieDisplay] = useState<MovieInfo[]>([])

  useEffect(() => {
    setMovieDisplay(store.movies)
  }, [store.movies])

  // TODO :: use <Icon type="font-awesome" name="star-o" /> for favorite

  return (
    <SafeAreaView>
      <SearchMovieBar />
      <ScrollView>
        {movieDisplay.map((movie, i) => (
          <TouchableOpacity key={i} onPress={() => {}}>
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
        ))}
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

export default observer(TabOneScreen)
