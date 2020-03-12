import React from 'react'
import Carousel from 'react-native-snap-carousel'
import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  articleImage: {
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  card: {
    borderRadius: 10,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginTop: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  cardDesc: {
    color: 'darkgray',
  },
  articleDate: {
    color: '#FE5F58',
    marginTop: 10,
    fontSize: 12,
    textAlign: 'right',
  },
})

const NewsSlider = ({ articles, navigation }) => {
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ArticleDetailsScreen', {
            article: item,
          })
        }
      >
        <View key={index} style={styles.card}>
          <FastImage style={styles.articleImage} source={{ uri: item.image }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>
              {item.text.substring(0, 100)}
              {item.text.length > 100 ? '...' : ''}
            </Text>
            <Text style={styles.articleDate}>
              {moment(item.date.seconds * 1000).format('dddd DD MMMM YYYY')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Carousel
      data={articles}
      renderItem={({ item, index }) => renderItem(item, index)}
      itemWidth={width / 1.3}
      sliderWidth={width}
      itemHeight={200}
      sliderHeight={200}
    />
  )
}

NewsSlider.propTypes = {
  articles: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default NewsSlider
