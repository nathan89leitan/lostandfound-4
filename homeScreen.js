import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";
import firebase from "firebase";
import { render } from "react-dom";
//import { AppTabNavigator } from './AppTabNavigator'
import {Icon} from 'react-native-elements';

export default class WelcomeScreen extends Component {
    constructor(){
    super();
}
 //addItem(){
   //  if(addItemButton==Pressed){

   //  }
 //}
 render(){
     return(
         <View>
            <TouchableOpacity
             style={{
              margin: 10,
              padding: 10,
              backgroundColor: 'purple',
              width: 275,
              textAlign: 'center',
            }}
            onPress={()=>this.props.navigation.navigate('addItemScreen')}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Add New Item
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={{
              margin: 20,
              padding: 20,
              backgroundColor: 'purple',
              width: 285,
              textAlign: 'center',
            }}
            onPress={()=>this.props.navigation.navigate('findDeviceScreen')}>
            <Text
              style={{
                color: 'white',
                fontSize: 36,
                fontWeight: 'bold',
              }}>
              Find a Device
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={{
              margin: 30,
              padding: 30,
              backgroundColor: 'purple',
              width: 295,
              textAlign: 'center',
            }}
            onPress={()=>this.props.navigation.navigate('myDevicesScreen')}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
                  My devices
                </Text>
            </TouchableOpacity>
             </View>
     )
 }
}