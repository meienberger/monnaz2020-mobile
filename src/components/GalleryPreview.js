import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  imagesContainer: {
    height: 150,
    width: width / 3,
    padding: 5,
  },
  image: {
    flex: 1,
  },
  container: {
    marginTop: 20,
  },
})

const GalleryPreview = ({ images }) => {
  const renderItem = (image, index) => {
    return (
      <TouchableOpacity style={styles.imagesContainer}>
        <FastImage
          style={styles.image}
          key={index}
          resizeMode="cover"
          source={{ uri: image }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={images}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </View>
  )
}

GalleryPreview.propTypes = {
  images: PropTypes.array.isRequired,
}

export default GalleryPreview
