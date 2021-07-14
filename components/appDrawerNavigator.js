import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
//import { AppTabNavigator } from './AppTabNavigator'
//import shownDeviceScreen  from './CustomSideBarMenu';
//import addItemScreen from '../screens/MyDonationScreen';
//import connectScreen from '../screens/NotificationScreen';
//import homeScreen from '../screens/SettingScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="font-awesome" />
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="font-awesome" />,
      drawerLabel : "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })