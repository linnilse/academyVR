import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
  staticResourceURL,
  VrButton
} from 'react-360';
import VideoModule from 'VideoModule';

export default class Room1 extends React.Component {

  PlayVideo() {

    VideoModule.seek('myplayer', 12);
    VideoModule.resume('myplayer'); // Start playback
    VideoModule.setParams('myplayer', {
      volume: 1,
      muted: false,
    })
    console.log('Environment', Environment);
    console.log('VideoModule', VideoModule);


  }

  componentDidMount() {
    Environment.setBackgroundVideo('myplayer');
    VideoModule.resume('myplayer'); // Start playback
    VideoModule.seek('myplayer', 12000000);
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room1
          </Text>
        </View>
        <VrButton
          onClick={this.PlayVideo.bind(this)}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Starta Videon
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

