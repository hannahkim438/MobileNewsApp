
import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { Badge } from 'react-native-elements'
import ListItem from './ListItem';

export default class SwipeableList extends Component {
  constructor(props) {
    super(props);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.success = this.success.bind(this);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);

    this.state = {
      enable: true,
      data: this.props.data,
    };
  }

  renderSeparator() {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  }

  success(key) {
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({
      data,
    });
  }

  setScrollEnabled(enable) {
    this.setState({
      enable,
    });
  }

  renderItem(item) {
    return (
      <ListItem
        text={item.key}
        avatar={item.avatar}
        success={this.success}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
      />
    );
  }

  render() {
    return (
      <View>
        <Badge
          value={this.state.data.length}
          containerStyle={{ position: 'absolute', top: -19, left: 125 }}
        />
      <FlatList
        style={this.props.style}
        data={this.state.data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({item}) => this.renderItem(item)}
        scrollEnabled={this.state.enable}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separatorViewStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  separatorStyle: {
    height: 5,
    backgroundColor: 'transparent',
  },
});
