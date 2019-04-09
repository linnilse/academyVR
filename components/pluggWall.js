import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
  Image,
  asset
} from 'react-360';
import { subscribePluggWall } from '../hack/showPluggWall';
import Info from './info';
export default class PluggWall extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.state = {
      showPluggWall: false,
      showPluggText: false,
      translateInfo: -100,
    }
  }

  handleTogglePluggWall(room) {
    this.setState({
      showPluggWall: room
    })
  }

  handleTogglePluggInfo() {
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.setState({
      showPluggText: !this.state.showPluggText,
    })

    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 40,
        duration: 400
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 26,
        duration: 400
      })
    ]).start(() => {
      // callback
    });
  }

  componentDidMount() {
    subscribePluggWall(this.handleTogglePluggWall.bind(this))
  }

  render() {
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    if (this.state.showPluggWall !== 'Room2') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <View style={{ minHeight: 450, minWidth: 700, position: 'relative' }}>
          {this.state.showPluggText == false ? <View style={{ marginTop: 0 }}></View> :
            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleTogglePluggInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                  <AnimatedText style={{ fontSize: this.animatedValue2, color: '#fff' }}>
                    Här kan man också sitta och studera!
                  </AnimatedText>
                  <Image style={{ width: 400, height: 300 }} source={asset('plugg.jpg')} />
                </AnimatedView>

              </VrButton>
            </AnimatedView>
          }

        </View>

        <VrButton
          onClick={this.handleTogglePluggInfo.bind(this)}
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

