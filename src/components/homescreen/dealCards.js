import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Badge } from 'react-native-elements'
import comStyles from '../../utils/commonStyles'
import CustomCards from '../../utils/customCards'

const dealData = [
  {
     title: 'Courts',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
     progress: 0.5
  },
  {
    title: 'Singapore Airlines',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    progress: 0.3
  },
  {
    title: 'Nestle',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    progress: 0.4
  },
 ]

class DealCards extends Component {

  render() {
    return (
      <View style={comStyles.backView}>
        <Text style={comStyles.cardTitle}>Deals and leads</Text>
        <Badge
          value={dealData.length}
          containerStyle={{ position: 'absolute', top: 0, left: 140 }}
        />
        <CustomCards cardData={dealData} navigate={this.props.navigate} />
      </View>
      
    );
  }
}

export default DealCards