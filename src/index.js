import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './components/homescreen'
import ProfileScreen from './components/profilescreen'


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen}
}, {
  initialRouteName: 'Home'
})

export default MainNavigator