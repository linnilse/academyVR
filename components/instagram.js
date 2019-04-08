import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
} from 'react-360';
import { subscribeInstagram } from '../hack/showInstagram';
import Info from './info'
export default class Instagram extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.state = {
      showInstagramWall: false,
      showInstagramText: false,
      translateInfo: -100,
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
  }

  render() {

    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    if (this.state.showInstagramWall !== 'Room4') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <View style={{ minHeight: 250, minWidth: 600, position: 'relative' }}>
          {this.state.showInstagramText == false ? <View style={{ marginTop: 200 }}></View> :
            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleToggleInstagramInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                  <AnimatedText style={{ fontSize: this.animatedValue, color: '#fff' }}>
                    Vi finns på instagram
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

