import React from 'react';
import { createAppContainer } from 'react-navigation'
import MainNavigator from './src'

const App = createAppContainer(MainNavigator)

export default App