import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import PropTypes from 'prop-types'
import { SingleImage } from 'react-native-zoom-lightbox'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  imagesContainer: {
    height: 150,
    width: width / 3,
    padding: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
    borderRadius: 4,
  },
  container: {
    marginTop: 20,
  },
  contentContainer: { paddingBottom: 200 },
})

const GalleryPreview = ({ images }) => {
  const renderItem = image => {
    return (
      <TouchableOpacity style={styles.imagesContainer}>
        {/* <FastImage
          style={styles.image}
          key={index}
          resizeMode="cover"
          source={{ uri: image }}
        /> */}
        <SingleImage uri={image} style={{}} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
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
