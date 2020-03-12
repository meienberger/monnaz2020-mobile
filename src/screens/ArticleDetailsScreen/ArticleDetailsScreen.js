import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler'
import { MAIN_COLOR } from '../../config/config/config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { width: '100%', height: 200 },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    marginLeft: 20,
    color: 'gray',
  },
})

const ArticleDetailsScreen = ({ navigation }) => {
  const article = navigation.getParam('article')

  return (
    <View style={styles.container}>
      <ScrollView>
        <FastImage
          style={styles.image}
          resizeMode="cover"
          source={{ uri: article.image }}
        />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.text}>{article.text}</Text>
      </ScrollView>
    </View>
  )
}

ArticleDetailsScreen.navigationOptions = {
  title: 'Article',
  headerStyle: {
    backgroundColor: MAIN_COLOR,
    headerBackTitle: '',
  },
  headerTintColor: '#fff',
  drawerLabel: '',
  headerBackTitle: ' ',
}

ArticleDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ArticleDetailsScreen