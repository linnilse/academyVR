import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { subscribeSentiment } from '../hack/showSentiment';
export default class Sentiment extends React.Component {
  constructor() {
    super();
    this.state = {
      showSentiment: false
    }
  }

  handleToggleSentiment(room) {
    this.setState({
      showSentiment: room
    })
  }

  componentDidMount() {
    subscribeSentiment(this.handleToggleSentiment.bind(this))
  }

  render() {
    if (this.state.showSentiment !== 'Room3') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <VrButton
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Sentimental
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

