import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Slider } from 'react-native-elements'

const {width} = Dimensions.get('window');

export default class CustomCarousel extends Component {

  constructor(props){
    super();

    this.props = props
    this.state = {
      cardData: this.props.cardData,
      loading: true
    }
    
    this._carousel = {}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false})
    }, 10)
  }
    _renderItem = ( {item, index} ) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
                <Slider
                  thumbStyle={styles.thumb}
                  trackStyle={styles.track}
                  maximumTrackTintColor='#ddeeff'
                  minimumTrackTintColor='#55aaff'
                  value={item.progress}
                  disabled={true}
                  onValueChange={value => this.setState({ value })}
                />
            </View>
        );
    }
 
    render () {
      const sliderWidth = width
      const itemWidth = width * 0.8
      if (this.state.loading) {
        return null
      }
      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.cardData}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            layout={'default'} 
          />
      );
    }
}

const styles = StyleSheet.create ({
  slide: {
    backgroundColor:'white',
    borderRadius:5,
    paddingBottom: 10
  },
  title: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },    
  thumb: {
    width: 0,
    height: 0,
  },
  track:{
    margin: 15,
  }
})
