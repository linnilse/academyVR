import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
} from 'react-360';
Environment.preloadBackgroundImage(asset('room3_o.jpg'))

export default class Room4 extends React.Component {

  componentDidMount() {
    Environment.setBackgroundImage(
      asset('rum4.jpg'), {
        transition: 300,
        fadeLevel: 1,
      }
    );

  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Mysrummet
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
  },
  padding: {
    padding: 20,
  },
  text: {
    fontSize: 60,
    color: '#ffffff',
    fontWeight: 'bold'
  },
});
