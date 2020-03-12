import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  sponsorContainer: {
    width: width / 1.5,
    height: 200,
    paddingHorizontal: 20,
  },
  flex: { flex: 1 },
})

const SponsorsSlider = ({ sponsors }) => {
  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.sponsorContainer}
        onPress={() => Linking.openURL(item.link)}
      >
        <FastImage
          style={styles.flex}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <Carousel
      autoplay={true}
      autoplayInterval={3000}
      loop={true}
      data={sponsors}
      renderItem={({ item, index }) => renderItem(item, index)}
      itemWidth={width / 1.5}
      sliderWidth={width}
      itemHeight={200}
      sliderHeight={200}
    />
  )
}

SponsorsSlider.propTypes = {
  sponsors: PropTypes.array.isRequired,
}

export default SponsorsSlider
