import React, { useEffect, useState } from 'react'
import { Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types'
import { MAIN_COLOR } from '../../config/config/config'
import { NewsSlider } from '../../components'
import SponsorsSlider from '../../components/SponsorsSlider'

const { height, width } = Dimensions.get('window')

const logo = require('../../res/img/simple_square.png')

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
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
  contentNext: {
    backgroundColor: 'white',
    zIndex: -1,
    paddingTop: 80,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Avenir',
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontFamily: 'Avenir',
    marginLeft: 22,
    color: '#333',
    fontWeight: '200',
    paddingRight: 20,
    textAlign: 'justify',
  },
})

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([])
  const [sponsors, setSponsors] = useState([])
  // const [images, setImages] = useState([])

  useEffect(() => {
    firestore()
      .collection('news')
      .get()
      .then(querySnapshot => {
        // console.log(querySnapshot.docs)
        const myArticles = querySnapshot.docs.map(documentSnapshot => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id, // required for FlatList
          }
        })

        setArticles(myArticles)
      })
  }, [])

  useEffect(() => {
    firestore()
      .collection('sponsors')
      .doc('diamond')
      .get()
      .then(data => {
        if (data.exists) {
          setSponsors(data.data().entries)
        }
      })
  }, [])

  useEffect(() => {
    // firestore()
    //   .collection('albums')
    //   .doc('preview')
    //   .get()
    //   .then(data => {
    //     if (data.exists) {
    //       setImages(data.data().images)
    //     }
    //   })
  }, [])

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={700}
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
          <NewsSlider navigation={navigation} articles={articles} />
        </Animatable.View>
        <Animatable.View
          delay={600}
          animation="fadeIn"
          style={styles.contentNext}
        >
          <Text style={styles.title}>Nos Sponsors</Text>
          <Text style={styles.subtitle}>
            Nous remercions chaleureusement tous nos sponsors qui nous
            soutiennent, que ce soit par des moyens matériels ou financiers !
          </Text>
          <SponsorsSlider sponsors={sponsors} />
        </Animatable.View>
        {/* <Animatable.View
          delay={700}
          animation="fadeIn"
          style={styles.contentNext}
        >
          <Text style={styles.title}>Le giron en images</Text>
          <Text style={styles.subtitle}>
            Nous souhaitons remercier Pierre-Yves Gilléron pour son manifique
            travail de photographe sur la place de fête !
          </Text>
          <GalleryPreview images={images} />
        </Animatable.View> */}
        {/* <View style={styles.content}>
          <Text style={styles.title2}>En images</Text>
        </View> */}
      </ScrollView>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

HomeScreen.navigationOptions = {
  header: null,
  backTitle: 'Home',
}

export default HomeScreen
