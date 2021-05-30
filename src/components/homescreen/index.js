import React, { Component } from 'react'
import { YellowBox, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'
import StatusCards from './statusCards'
import ToDoCards from './toDoCards'
import DealCards from './dealCards'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.backView}>
        <StatusBar  hidden />
        <StatusCards />
        <ScrollView style={styles.scrollView}>
          <ToDoCards />
          <DealCards navigate={navigate}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    backgroundColor: '#ddeeff'
  },
  scrollView: {
    backgroundColor: 'transparent'
  },
  cardTitle: {
    marginLeft: 30,
    marginTop: 50
  }
})

export default HomeScreen;
