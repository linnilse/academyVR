import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
} from 'react-360';

export default class Room3 extends React.Component {
  componentDidMount() {
    Environment.setBackgroundImage(
      asset('klass3.jpg'), {
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
            Klassrummet
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
