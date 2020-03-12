import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
// import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  HomeScreen,
  ArticleDetailsScreen,
  AlbumsScreen,
  AlbumDetailsScreen,
} from '../screens'
import { ProgramScreen } from '../screens/ProgramScreen'
import { MAIN_COLOR } from '../config/config/config'

const styles = StyleSheet.create({
  tabIcon: { fontSize: 25, marginBottom: -10, color: 'gray' },
  tabIconFocused: { color: MAIN_COLOR },
})

const screenStack = {
  ArticleDetailsScreen: {
    screen: ArticleDetailsScreen,
  },
  AlbumDetailsScreen: {
    screen: AlbumDetailsScreen,
  },
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackTitle: 'Home',
      },
    },
    ...screenStack,
  },
  {
    defaultNavigationOptions: { headerBackTitle: ' ' },
  },
)

const ProgramStack = createStackNavigator(
  {
    Program: { screen: ProgramScreen },
    ...screenStack,
  },
  {
    defaultNavigationOptions: { headerBackTitle: ' ' },
  },
)

const AlbumStack = createStackNavigator(
  {
    Photos: { screen: AlbumsScreen },
    ...screenStack,
  },
  {
    defaultNavigationOptions: { headerBackTitle: ' ' },
  },
)

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
    Albums: {
      screen: AlbumStack,
      navigationOptions: () => ({
        tabBarLabel: 'Photos',
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state

        let icon = 'md-home'

        if (routeName === 'Program') {
          icon = 'ios-calendar'
        }

        if (routeName === 'Albums') {
          icon = 'md-camera'
        }

        return (
          <Icon
            name={icon}
            style={[styles.tabIcon, focused ? styles.tabIconFocused : null]}
          />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: MAIN_COLOR,
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 10 },
    },
  },
)

const Navigator = createAppContainer(TabNavigator)

const prefix = 'monnaz://'
const MainApp = () => <Navigator uriPrefix={prefix} enableURLHandling={true} />

export default MainApp
