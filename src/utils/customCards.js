import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { Slider } from 'react-native-elements'

class CustomCards extends Component {

    constructor(props){
        super();
    
        this.props = props
        this.state = {
          cardData: this.props.cardData,
          navigate: this.props.navigate
        }
      }
      
      actionOnRow(item) {
        this.state.navigate('Profile', { itemTitle: item.title, itemAvatar: item.avatar })
        console.log('Selected Item :',item);
     }
      renderItem(item) {
        return (
            <TouchableOpacity  style={styles.user} onPress={ () => this.actionOnRow(item)}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: item.avatar }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Slider
                  orientation='vertical'
                  thumbStyle={styles.thumb}
                  trackStyle={styles.track}
                  maximumTrackTintColor='#55aaff'
                  minimumTrackTintColor='#ddeeff'
                  value={item.progress}
                  disabled={true}
                  onValueChange={value => this.setState({ value })}
                />
            </TouchableOpacity >
        );
      }
      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 5,
              width: "100%",
              backgroundColor: "transparent",
            }}
          />
        );
      }

    render() {
        return (
            <FlatList
            numColumns={2}                  // set number of columns 
            columnWrapperStyle={styles.row}  // space them out evenly
            data={this.state.cardData}
            keyExtractor={(item, index) => item.id }
            renderItem={({item}) => this.renderItem(item)}
            ItemSeparatorComponent = { this.FlatListItemSeparator }
        />  
        );
    }
}

const styles = StyleSheet.create ({
    row: {
        flex: 1,
        justifyContent: 'flex-start',
    },
  user: {
    width: '45%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
  },
  image: {
    margin:5,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  title: {
    margin: 5,
    width: '40%'
  },
  thumb: {
    width: 0,
    height: 0,
  },
  track:{
    margin: 5,
  }
})

export default CustomCards