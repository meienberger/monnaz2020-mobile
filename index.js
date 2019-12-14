import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'

/**
 * Config
 */
import { APP_NAME } from './src/config'
import App from './App'

// Start APP
AppRegistry.registerComponent(APP_NAME, () => App)
