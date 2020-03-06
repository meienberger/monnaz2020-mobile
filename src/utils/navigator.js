import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
// import PropTypes from 'prop-types'

import { HomeScreen } from '../screens'
import { ProgramScreen } from '../screens/ProgramScreen'

const screenStack = {
  HomeScreen: {
    screen: HomeScreen,
  },
}

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ...screenStack,
})

// Hide tabbar if we are further on the stack
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true

  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}

const ProgramStack = createStackNavigator({
  ProgramScreen: {
    screen: ProgramScreen,
  },
  ...screenStack,
})

// Hide tabbar if we are further on the stack
ProgramStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true

  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}

// const GalleryStack = createStackNavigator({
//   GalleryScreen: {
//     screen: HomeScreen,
//   },
//   ...screenStack,
// })

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarLabel: 'Accueil',
      }),
    },
    Program: {
      screen: ProgramStack,
      navigationOptions: () => ({
        tabBarLabel: 'Programme',
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state

        const src = routeName

        return (
          <Image
            source={src}
            color={tintColor}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 20,
              height: 20,
              marginTop: 5,
              resizeMode: 'contain',
            }}
          />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 10 },
    },
  },
)

const Navigator = createAppContainer(TabNavigator)

const prefix = 'monnaz://'
const MainApp = () => <Navigator uriPrefix={prefix} enableURLHandling={true} />

export default MainApp
