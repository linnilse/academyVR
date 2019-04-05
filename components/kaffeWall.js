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
              <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                <AnimatedText style={{ fontSize: this.animatedValue, color: '#fff' }}>
                  Kaffe är viktigt!
          </AnimatedText>
              </AnimatedView>
            </AnimatedView>}

        </View>
        <VrButton
          onClick={this.handleToggleKaffeInfo.bind(this)}
          style={styles.greetingBox}>
          <View>
            <Info
              translate={[0, this.state.translateInfo, 0]}
            />
          </View>
        </VrButton>

      </View >
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
    marginRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: 100,
  },
  greeting2: {
    fontSize: 60,
    //color: '#047364',
    color: '#ffffff',

    fontWeight: 'bold'
  },
});


