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
Environment.preloadBackgroundImage(asset('room3_o.jpg'))


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
      volume: 0.1, // play at 3/10 original volume

    });
  }

  componentWillUnmount() {
    AudioModule.stopEnvironmental()
  }
  render() {
    return (
      <View style={styles.panel}>
        {/* <Sound source={'Billiesong.mp3'}></Sound> */}
        <View style={styles.greetingBox}>
          <Text style={styles.greeting2}>
            Köket
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
  greetingBox: {
    padding: 20,
  },
  greeting2: {
    fontSize: 60,
    color: '#ffffff',
    fontWeight: 'bold'
  },
});
