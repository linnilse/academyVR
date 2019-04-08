import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
  Sound,
  NativeModules,
} from 'react-360';
const { AudioModule } = NativeModules;

export default class Room2 extends React.Component {

  componentDidMount() {
    Environment.setBackgroundImage(
      asset('köket2.jpg'), {
        transition: 300,
        fadeLevel: 1,
      }
    );

    AudioModule.playEnvironmental({
      source: asset('Billiesong.mp3'),
      volume: 0.8,

    });
  }

  componentWillUnmount() {
    AudioModule.stopEnvironmental()
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Köket
          </Text>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
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
