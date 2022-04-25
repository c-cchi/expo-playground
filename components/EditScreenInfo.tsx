import { useContext, useEffect, useState } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Card, AirbnbRating } from '@rneui/themed'
import { Feather, FontAwesome } from '@expo/vector-icons'

import { Text, View } from './Themed'
import MovieContext from '../store/movieContext'

export default function EditScreenInfo({ path }: { path: string }) {
  const { movieDetail, detailLoading, favoriteList, addFavorite } = useContext(
    MovieContext
  )
  const [isLoading, setIsLoading] = useState(detailLoading)

  useEffect(() => {
    setIsLoading(detailLoading)
  }, [detailLoading])

  const { Title, Poster, Year, imdbRating, imdbID, Plot } = movieDetail
  return isLoading ? (
    <ActivityIndicator size={'large'} />
  ) : (
    <View>
      <View style={{ padding: 10 }}>
        <ScrollView>
          <Card>
            <Card.Title>{Title}</Card.Title>
            <Card.Divider />
            <Card.Image
              resizeMode="contain"
              source={{ uri: Poster }}
              style={{ height: 500 }}
            />
            {!favoriteList.find(e => e === imdbID) ? (
              <TouchableOpacity onPress={() => addFavorite(imdbID)}>
                <Feather
                  name="heart"
                  size={24}
                  style={{
                    alignSelf: 'flex-end',
                    paddingTop: 10
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => {}}>
                <FontAwesome
                  name="heart"
                  size={24}
                  style={{
                    alignSelf: 'flex-end',
                    paddingTop: 10
                  }}
                />
              </TouchableOpacity>
            )}
            <Text>{Year}</Text>
            <Text>{Plot}</Text>
            <AirbnbRating count={10} defaultRating={imdbRating} size={20} />
            <Text>{imdbRating}</Text>
          </Card>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    textAlign: 'center'
  }
})
