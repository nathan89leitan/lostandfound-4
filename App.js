import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/welcomeScreen';
import { AppDrawerNavigator } from './components/appDrawerNavigator'
import { AppTabNavigator } from './components/appTabNavigator'
// add     "react-native-rfid-nfc-scanner": "^1.2.0",


export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
})

const AppContainer =  createAppContainer(switchNavigator);