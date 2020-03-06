import React, { useEffect, useState } from 'react'
import { Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import * as Animatable from 'react-native-animatable'
import { MAIN_COLOR } from '../../config/config/config'
import { NewsSlider } from '../../components'

const { height, width } = Dimensions.get('window')

const logo = require('../../res/img/simple_square.png')

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerBack: {
    position: 'absolute',
    height: height / 2,
    // height: 200,
    backgroundColor: MAIN_COLOR,
    width: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    backgroundColor: MAIN_COLOR,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  festIcon: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  triangle: {
    height: 100,
    backgroundColor: MAIN_COLOR,
    transform: [{ rotate: '-10deg' }],
    width: width * 2,
    alignSelf: 'center',
    marginTop: -40,
    position: 'absolute',
    bottom: -40,
    zIndex: 10,
  },
  date: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    zIndex: 11,
    fontFamily: 'Avenir',
  },
  content: {
    backgroundColor: 'white',
    zIndex: -1,
    paddingTop: 100,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Avenir',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 35,
    fontFamily: 'Avenir',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: -40,
  },
})

const HomeScreen = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('news')
      .onSnapshot(querySnapshot => {
        // console.log(querySnapshot.docs)
        const myArticles = querySnapshot.docs.map(documentSnapshot => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id, // required for FlatList
          }
        })

        setArticles(myArticles)
      })

    return () => unsubscribe()
  }, [])

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={3000}
        animation="bounceIn"
        style={styles.headerBack}
      />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.triangle} />
          <Animatable.Image
            animation="bounceInDown"
            style={styles.festIcon}
            source={logo}
          />
          <Animatable.Text animation="bounceInRight" style={styles.date}>
            <Text>Du 1er au 5 juillet</Text>
          </Animatable.Text>
          <Animatable.Text style={styles.date} animation="bounceInLeft">
            <Text>2020</Text>
          </Animatable.Text>
        </View>
        <Animatable.View delay={500} animation="fadeIn" style={styles.content}>
          <Text style={styles.title}>Actualités</Text>
          <NewsSlider articles={articles} />
        </Animatable.View>
        <View style={styles.content}>
          <Text style={styles.title2}>En images</Text>
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

export default HomeScreen
