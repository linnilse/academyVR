import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
  Image,
} from 'react-360';
import { subscribeInstagram } from '../communication/showInstagram';
import Info from './info'

const API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4413669213.c322287.daf23177d99b49c5b7db2df451de313d';

export default class Instagram extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.state = {
      showInstagramWall: false,
      showInstagramText: false,
      translateInfo: -100,
      data: [],
    }
  }

  handleToggleInstagramWall(room) {
    this.setState({
      showInstagramWall: room
    })
  }

  handleToggleInstagramInfo() {
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.setState({
      showInstagramText: !this.state.showInstagramText,
    })

    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 40,
        duration: 400
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 20,
        duration: 400
      })
    ]).start(() => {
      // callback
    });
  }

  componentDidMount() {
    subscribeInstagram(this.handleToggleInstagramWall.bind(this))
    this.populateAppWithData()
  }

  populateAppWithData() {
    console.log('hello');
    const showData = fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }))
    return showData;

  }

  render() {
    if (!this.state.data) {
      return null;
    }
    const data = this.state.data
      .slice()
      .map((post, index) => (
        <View style={{ width: 140 }}
          key={'id' + post.id}
        >
          <Image style={{ width: 140, height: 140 }} source={{ uri: post.images.thumbnail.url }} />

        </View>
      ))
    const AnimatedView = Animated.createAnimatedComponent(View);
    if (this.state.showInstagramWall !== 'Room4') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <View style={{ minHeight: 250, minWidth: 1000, position: 'relative' }}>
          {this.state.showInstagramText == false ? <View style={{ marginTop: 200 }}></View> :
            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleToggleInstagramInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                  <Text style={{ fontSize: 30, textAlign: 'center', paddingBottom: 10 }}>Kolla in oss på instagram @academy.se</Text>
                  <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: 700 }}>{data}</View>
                </AnimatedView>
              </VrButton>
            </AnimatedView>
          }

        </View>

        <VrButton
          onClick={this.handleToggleInstagramInfo.bind(this)}
          style={styles.padding}>
          <View>
            <Info
              translate={[0, this.state.translateInfo, 0]}
            />
          </View>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 1000,
    alignItems: 'center',
    padding: 20,
    position: 'relative',
    top: 500,
  },
  padding: {
    padding: 20,
  }
});

