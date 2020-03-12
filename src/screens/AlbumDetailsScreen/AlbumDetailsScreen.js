import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { MAIN_COLOR } from '../../config/config/config'
import GalleryPreview from '../../components/GalleryPreview'

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'Avenir',
    color: '#333',
    marginLeft: 10,
    marginTop: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 12,
    fontFamily: 'Avenir',
    marginTop: -10,
    color: '#666',
  },
  flex: { flex: 1 },
})

const AlbumDetailsScreen = ({ navigation }) => {
  const album = navigation.getParam('album')

  return (
    <View style={styles.flex}>
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.subtitle}>Cliquez sur les images pour agrandir</Text>
      <GalleryPreview images={album.images} />
    </View>
  )
}

AlbumDetailsScreen.navigationOptions = {
  title: 'Album',
  headerStyle: {
    backgroundColor: MAIN_COLOR,
  },
  headerTintColor: '#fff',
  drawerLabel: '',
}

AlbumDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AlbumDetailsScreen
