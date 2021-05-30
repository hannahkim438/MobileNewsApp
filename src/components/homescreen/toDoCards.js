import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import comStyles from '../../utils/commonStyles'
import SwipeableList from '../../utils/SwipeableList'

const toDoData = [
  {
     key: 'Allison from Courts hasn\'t responded in 3 days. Follow up?',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    key: 'Have you sent the signed NDA to Singapore Airlines?',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    key: 'Prepare for your meeting tomorrow with Carl from Singapore Airlines',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    key: 'Finish debrief for yesterday\'s meeting with Sam from Nestle',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]

class ToDoCards extends Component {

  render() {
    return (
      <View style={comStyles.backView}>
        <Text style={comStyles.cardTitle}>Things to do</Text>
        <SwipeableList style={styles.list} data={toDoData} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create ({
  list: {
    marginLeft: 10,
    marginRight: 10,
  },
})

export default ToDoCards