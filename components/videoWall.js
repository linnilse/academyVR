import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  Video,
  VideoControl,
  MediaPlayerState,
  asset,
  staticResourceURL
} from 'react-360';
import VideoModule from 'VideoModule';
import { subscribeVideo } from '../communication/showVideoWall';
export default class VideoWall extends React.Component {
  constructor() {
    super();
    this.state = {
      showVideoWall: false,
      playerState: new MediaPlayerState({
        autoPlay: false, muted: false, loop: false, onEnded: () => { console.log('Ended Video') }
      })
    }
  }

  handleToggleVideoWall(room) {
    this.setState({
      showVideoWall: room
    })
  }

  componentDidMount() {
    subscribeVideo(this.handleToggleVideoWall.bind(this))


  }

  render() {
    if (this.state.showVideoWall !== 'Room3') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <Video playerState={this.state.playerState} style={{ height: 600, width: 1000 }} source={asset('video2d.mp4')}>
        </Video>
        <View style={{ height: 100, width: 1000, marginBottom: 40, }}>
          <VideoControl playerState={this.state.playerState} />
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
    backgroundColor: 'rgba(255, 0, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

