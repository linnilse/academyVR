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
        <View>
          {/*  <Text style={styles.text}>
            Receptionen
          </Text> */}
        </View>
        <VrButton
          onClick={this.PlayVideo.bind(this)}
          style={styles.padding}>
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

