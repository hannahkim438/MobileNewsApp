import React from 'react';
import {View, Text, StyleSheet, Image, Animated, Dimensions, PanResponder} from 'react-native';

const {width} = Dimensions.get('window');

export default class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.gestureDelay = -35;
    this.scrollViewEnabled = true;

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 35) {
          this.setScrollViewEnabled(false);
          let newX = gestureState.dx + this.gestureDelay;
          position.setValue({x: newX, y: 0});
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < 150) {
          Animated.timing(this.state.position, {
            toValue: {x: 0, y: 0},
            duration: 150,
          }).start(() => {
            this.setScrollViewEnabled(true);
          });
        } else {
          Animated.timing(this.state.position, {
            toValue: {x: width, y: 0},
            duration: 300,
          }).start(() => {
            this.props.success(this.props.text);
            this.setScrollViewEnabled(true);
          });
        }
      },
    });

    this.panResponder = panResponder;
    this.state = {position};
  }

  setScrollViewEnabled(enabled) {
    if (this.scrollViewEnabled !== enabled) {
      this.props.setScrollEnabled(enabled);
      this.scrollViewEnabled = enabled;
    }
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Animated.View style={[this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
          <View style={styles.absoluteCell}>
            <Text style={styles.absoluteCellText}>DELETE</Text>
          </View>
          <View style={styles.innerCell}>
            <Image
              style={styles.innerImage}
              resizeMode="cover"
              source={{ uri: this.props.avatar }}
            />
            <Text style={styles.innerTitle}>
              {this.props.text}
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 60,
    marginLeft: -100,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  absoluteCellText: {
    margin: 16,
    color: '#FFF',
  },
  innerCell: {
    width: width,
    height: 60,
    marginLeft: 100,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  innerImage: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  innerTitle: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 90
  }
});
