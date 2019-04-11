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
import { subscribeKlassen } from '../communication/showKlassen';
import Info from './info'
export default class Klassen extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.state = {

      showKlassen: false,
      showKlassenText: false,
      translateInfo: -100,
    }
  }

  handleToggleKlassen(room) {
    this.setState({
      showKlassen: room
    })
  }
  handleToggleKlassenInfo() {
    this.animatedValue = new Animated.Value(0)
    this.setState({
      showKlassenText: !this.state.showKlassenText,

    })
    Animated.timing(this.animatedValue, {
      duration: 400,
      toValue: 40,
    }).start(() => {
      console.log("Animation finished");
    });
  }

  componentDidMount() {
    subscribeKlassen(this.handleToggleKlassen.bind(this))
  }

  render() {
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    if (this.state.showKlassen !== 'Room4') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <View style={{ minHeight: 350, minWidth: 640, position: 'relative' }}>
          {this.state.showKlassenText == false ? <View style={{ marginTop: 200 }}></View> :

            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleToggleKlassenInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364' }}>
                  <Text style={{ fontSize: 20, color: '#fff', width: 500, marginLeft: 20 }}>
                    "We made it!"
                      //Javascript klassen våren 2019
                  </Text>
                </AnimatedView>
              </VrButton>
            </AnimatedView>

          }
        </View>
        <VrButton
          onClick={this.handleToggleKlassenInfo.bind(this)}
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


