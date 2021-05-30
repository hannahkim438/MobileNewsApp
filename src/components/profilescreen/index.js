import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import comStyles from '../../utils/commonStyles'
import SwipeableList from '../../utils/SwipeableList'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const toDoData = [
  {
    key: 'Have you sent the signed NDA to Singapore Airlines?',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    key: 'Prepare for your meeting tomorrow with Carl from Singapore Airlines',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]
 
class ProfileScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header 
    return {
      header: (
      <View
          style={{
            height: 110,
            paddingTop: 40,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            flexDirection: 'row'
          }}>
            <View style={{margin: 10}}>
            <Button
              style={{margin: 5}}
              type="clear"
              icon={
                <Icon
                  name="arrow-left"
                  size={25}
                  color="black"
                />
              }
              onPress={() => navigation.push('Home')}
          />
            </View>

          <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: navigation.getParam('itemAvatar', '')} }
            />
          <Text
            style={styles.title}>
            {navigation.getParam('itemTitle', '')}
          </Text>
        </View>
      ),
    };
  };
  render() {
    return (
      <View style={styles.backView}>
        <Text style={styles.cardTitle}>Things to do</Text>
        <SwipeableList style={styles.list} data={toDoData} />
    </View>
    );
  }
}

const styles = StyleSheet.create ({
  backView: {
    flex: 1,
    backgroundColor: '#ddeeff'
  },
  cardTitle: {
    marginTop: 20,
    marginLeft: '10%',
    color: 'grey'
  },
  list: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    margin:5,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  title: {
    margin: 5,
    width: '30%',
    height: 50,
    color: 'black',
    fontSize: 18,
    textAlignVertical: 'center'
  },
})

export default ProfileScreen