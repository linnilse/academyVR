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
import Info from './info'

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

  componentWillUnmount() {
    VideoModule.resume('myplayer'); // Start playback
    VideoModule.seek('myplayer', 12000000);
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox2}>
          <Text style={styles.greeting2}>
            Receptionen
          </Text>
        </View>
        <VrButton
          onClick={this.PlayVideo.bind(this)}
          style={styles.greetingBox}>
          <Info
            translate={[0, -75, 0]}
          />
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
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    //backgroundColor: '#000000',
    //borderColor: '#639dda',
    //borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  greetingBox2: {
    padding: 20,
  },
  greeting2: {
    fontSize: 60,
    //color: '#047364',
    color: '#ffffff',

    fontWeight: 'bold'
  },
});

