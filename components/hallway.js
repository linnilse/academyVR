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
import { subscribeHallway } from '../hack/showHallway';
import Info from './info'
export default class Hallway extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.state = {

      showHallway: false,
      showHallwayText: false,
      translateInfo: -100,
    }
  }

  handleToggleHallway(room) {
    this.setState({
      showHallway: room
    })
  }
  handleToggleHallwayInfo() {
    this.animatedValue = new Animated.Value(0)
    this.setState({
      showHallwayText: !this.state.showHallwayText,

    })
    Animated.timing(this.animatedValue, {
      duration: 400,
      toValue: 40,
    }).start(() => {
      console.log("Animation finished");
    });
  }

  componentDidMount() {
    subscribeHallway(this.handleToggleHallway.bind(this))
  }

  render() {
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    if (this.state.showHallway !== 'Room1') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <View style={{ minHeight: 500, minWidth: 640, position: 'relative' }}>
          {this.state.showHallwayText == false ? <View style={{ marginTop: 200 }}></View> :

            <AnimatedView style={{ padding: this.animatedValue, backgroundColor: 'rgba(255, 255, 255, 0.4)', marginTop: 100, position: 'absolute', bottom: 0 }}>
              <VrButton onClick={this.handleToggleHallwayInfo.bind(this)}>
                <AnimatedView style={{ padding: this.animatedValue, backgroundColor: '#047364', display: "flex", flexDirection: 'row' }}>

                  <Image style={{ width: 400, height: 300 }} source={asset('saga.jpg')} />
                  <Text style={{ fontSize: 20, color: '#fff', width: 200, marginLeft: 20 }}>
                    "Bättre kollegor än de jag har på Academy får man leta länge för att hitta...
                    och troligtvis kommer man ändå inte hitta några som toppar dem.
                    De gör min vardag till den bästa möjliga!"
                      //Saga Edgren
                  </Text>
                </AnimatedView>
              </VrButton>
            </AnimatedView>

          }
        </View>
        <VrButton
          onClick={this.handleToggleHallwayInfo.bind(this)}
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


