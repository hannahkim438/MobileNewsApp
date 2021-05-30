import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class CustomNavHeader extends Component {
  
    constructor(props){
        super();
    
        this.props = props
        this.state = {
          navigation: this.props.navigation,
        }
      }
  render() {
    return (
        <View style={styles.backView}>
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
            onPress={() => this.state.navigation.push('Home')}
            />
          </View>
        <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: this.state.navigation.getParam('itemAvatar', '')} }
          />
        <Text
          style={styles.title}>
          {this.state.navigation.getParam('itemTitle', '')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  backView: {
    height: 60,
    marginTop: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row'
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

export default CustomNavHeader