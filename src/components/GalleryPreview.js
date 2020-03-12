import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native'
import PropTypes from 'prop-types'
// import { SingleImage } from 'react-native-zoom-lightbox'
import FastImage from 'react-native-fast-image'
import GallerySwiper from 'react-native-gallery-swiper'
import Icon from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  imagesContainer: {
    height: 150,
    width: width / 3,
    padding: 5,
    backgroundColor: 'rgb(242,242,242)',
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
    backgroundColor: 'white',
  },
  contentContainer: { paddingBottom: 20 },
  flex: { flex: 1 },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeIcon: { color: 'white', fontSize: 40 },
})

const GalleryPreview = ({ images }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [gallery, setGallery] = useState([])
  const [initialPage, setInitialPage] = useState(0)

  const renderItem = (image, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setInitialPage(index)
          setModalVisible(true)
        }}
        style={styles.imagesContainer}
      >
        <FastImage
          style={styles.image}
          key={index}
          resizeMode="cover"
          source={{ uri: image }}
        />
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    const formattedArray = []

    images.forEach(img => {
      formattedArray.push({ uri: img })
    })

    setGallery(formattedArray)
  }, [images])

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        numColumns={3}
        data={images}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
      <Modal animated={true} visible={modalVisible}>
        <View style={styles.flex}>
          <GallerySwiper
            initialPage={initialPage}
            initialNumToRender={300}
            onSwipeUpReleased={() => setModalVisible(false)}
            onSwipeDownReleased={() => setModalVisible(false)}
            images={gallery}
            // imageComponent={({ source }) => {
            //   return (
            //     <FastImage
            //       source={source}
            //       resizeMode="contain"
            //       style={{ flex: 1, width }}
            //     />
            //   )
            // }}
          />
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Icon style={styles.closeIcon} name="md-close" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

GalleryPreview.propTypes = {
  images: PropTypes.array.isRequired,
}

export default GalleryPreview
