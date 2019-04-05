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
    this.setState({
      showPingisText: !this.state.showPingisText,

    })
  }

  componentDidMount() {
    subscribePingisWall(this.handleTogglePingisWall.bind(this))
  }

  render() {
    if (this.state.showPingisWall !== 'Room2') {
      return null;
    }
    return (
      <View style={styles.panel}>
        {this.state.showPingisText == false ? <View style={{ marginTop: 200 }}></View> :
          <View style={styles.greetingBox2}>
            <Text style={styles.greeting2}>
              Pingis är också viktigt!
          </Text>
            <Text style={styles.greeting}>
              Vinnare i år: Javascript!
          </Text>
          </View>
        }
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
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  greetingBox: {
    padding: 20,
    //backgroundColor: '#000000',
    //borderColor: '#639dda',
    //borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
    color: '#ffffff',
    borderColor: '#ffffff'
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

