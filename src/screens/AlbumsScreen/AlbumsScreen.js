import React, { useEffect, useState } from 'react'
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import PropTypes from 'prop-types'
import { MAIN_COLOR } from '../../config/config/config'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 200,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  albumTitle: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  albumCount: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: '500',
  },
  background: { flex: 1 },
  imageStyle: { borderRadius: 10 },
})

const AlbumsScreen = ({ navigation }) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    firestore()
      .collection('albums')
      .get()
      .then(querySnapshot => {
        // console.log(querySnapshot.docs)
        const myAlbums = querySnapshot.docs.map(documentSnapshot => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id, // required for FlatList
          }
        })

        setAlbums(myAlbums)
      })
  }, [])

  const renderItem = item => {
    if (item.title) {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AlbumDetailsScreen', { album: item })
          }
          style={styles.card}
        >
          <ImageBackground
            imageStyle={styles.imageStyle}
            style={styles.background}
            source={{
              uri: item.imagePreview,
            }}
          >
            <View style={styles.imageOverlay}>
              <Text style={styles.albumTitle}>{item.title.toUpperCase()}</Text>
              <Text style={styles.albumCount}>{item.images.length} Images</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )
    }
  }

  return <FlatList data={albums} renderItem={({ item }) => renderItem(item)} />
}

AlbumsScreen.navigationOptions = {
  title: 'Photos',
  headerStyle: {
    backgroundColor: MAIN_COLOR,
  },
  headerTintColor: '#fff',
  drawerLabel: '',
}

AlbumsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AlbumsScreen
