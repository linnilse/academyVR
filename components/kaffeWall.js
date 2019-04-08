import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
} from 'react-360';
import { subscribeKaffe } from '../hack/showKaffeWall';
import Info from './info'
export default class KaffeWall extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.state = {

      showKaffeWall: false,
      showKaffeText: false,
      translateInfo: -100,
    }
  }

  handleToggleKaffeWall(room) {
    this.setState({
      showKaffeWall: room
    })
  }
  handleToggleKaffeInfo() {
    this.animatedValue = new Animated.Value(0)
    this.setState({
      showKaffeText: !this.state.showKaffeText,

    })
    Animated.timing(this.animatedValue, {
      duration: 400,
      toValue: 40,
    }).start(() => {
      console.log("Animation finished");
    });
  }

  componentDidMount() {
    subscribeKaffe(this.handleToggleKaffeWall.bind(this))
  }

  render() {
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    if (this.state.showKaffeWall !== 'Room1') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <View style={{ minHeight: 250, minWidth: 500, position: 'relative' }}>
          {this.state.showKaffeText == false ? <View style={{ marginTop: 200 }}></View> :

            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleToggleKaffeInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                  <AnimatedText style={{ fontSize: this.animatedValue, color: '#fff' }}>
                    Kaffe är viktigt!
          </AnimatedText>
                </AnimatedView>
              </VrButton>
            </AnimatedView>

          }
        </View>
        <VrButton
          onClick={this.handleToggleKaffeInfo.bind(this)}
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
    width: 1000,
    height: 600,
    alignItems: 'center',
  },
  padding: {
    padding: 20,
  },
});


