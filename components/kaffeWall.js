import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { subscribeKaffe } from '../hack/showKaffeWall';
export default class KaffeWall extends React.Component {
  constructor() {
    super();
    this.state = {
      showKaffeWall: false
    }
  }

  handleToggleKaffeWall(room) {
    this.setState({
      showKaffeWall: room
    })
  }

  componentDidMount() {
    subscribeKaffe(this.handleToggleKaffeWall.bind(this))
  }

  render() {
    if (this.state.showKaffeWall !== 'Room1') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <VrButton
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            KaffeWall
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

