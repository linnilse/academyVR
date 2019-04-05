import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
} from 'react-360';
import { subscribePingisWall } from '../hack/showPingisWall';
import Info from './info'
export default class PingisWall extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.state = {
      showPingisWall: false,
      showPingisText: false,
      translateInfo: -100,
    }
  }

  handleTogglePingisWall(room) {
    this.setState({
      showPingisWall: room
    })
  }

  handleTogglePingisInfo() {
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.setState({
      showPingisText: !this.state.showPingisText,
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
    subscribePingisWall(this.handleTogglePingisWall.bind(this))
  }

  render() {
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    if (this.state.showPingisWall !== 'Room2') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <View style={{ minHeight: 250, minWidth: 600, position: 'relative' }}>
          {this.state.showPingisText == false ? <View style={{ marginTop: 200 }}></View> :
            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleTogglePingisInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                  <AnimatedText style={{ fontSize: this.animatedValue, color: '#fff' }}>
                    Pingis är också viktigt!
                  </AnimatedText>
                  <AnimatedText style={{ fontSize: this.animatedValue2, color: '#fff' }}>
                    Vinnare i år: JavaScript
                  </AnimatedText>
                </AnimatedView>
              </VrButton>
            </AnimatedView>
          }
        </View>
        <VrButton
          onClick={this.handleTogglePingisInfo.bind(this)}
          style={styles.greetingBox}>
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
    height: 600,
    alignItems: 'center'
  },
  greetingBox: {
    padding: 20,
  }
});

