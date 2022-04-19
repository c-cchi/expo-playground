import { StyleSheet } from 'react-native'
import { observer } from 'mobx-react'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import SearchInput from '../components/SearchInput'

import store from '../store/Store'

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const onLoad = () => {
    store.load()
  }

  return (
    <View style={styles.container}>
      <SearchInput />
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
