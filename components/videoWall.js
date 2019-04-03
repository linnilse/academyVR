import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { subscribeSentiment } from '../hack/showVideoWall';
export default class VideoWall extends React.Component {
  constructor() {
    super();
    this.state = {
      showVideoWall: false
    }
  }

  handleToggleVideoWall(room) {
    this.setState({
      showVideoWall: room
    })
  }

  componentDidMount() {
    subscribeSentiment(this.handleToggleVideoWall.bind(this))
  }

  render() {
    if (this.state.showVideoWall !== 'Room3') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <VrButton
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            VideoWall
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

