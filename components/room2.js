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
import VideoModule from 'VideoModule';

export default class Room2 extends React.Component {

  componentDidMount() {
    Environment.setBackgroundVideo('myplayer2');
    VideoModule.resume('myplayer2'); // Start playback
    VideoModule.seek('myplayer2', 12000000);
    AudioModule.playEnvironmental({ // Sound file
      source: asset('Billiesong.mp3'),
      volume: 0.4,
    });
  }

  componentWillUnmount() {
    VideoModule.resume('myplayer2'); // Start playback
    VideoModule.seek('myplayer2', 12000000);
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
