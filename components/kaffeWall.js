import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { subscribeKaffe } from '../hack/showKaffeWall';
import Info from './info'
export default class KaffeWall extends React.Component {
  constructor() {
    super();
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
    this.setState({
      showKaffeText: !this.state.showKaffeText,

    })
  }

  componentDidMount() {
    subscribeKaffe(this.handleToggleKaffeWall.bind(this))
  }

  render() {
    if (this.state.showKaffeWall !== 'Room1') {
      return null;
    }
    return (
      <View style={styles.panel}>
        {this.state.showKaffeText == false ? <View style={{ marginTop: 200 }}></View> :
          <View style={styles.greetingBox2}>
            <Text style={styles.greeting2}>
              Kaffe är viktigt!
          </Text>
          </View>}
        <VrButton
          onClick={this.handleToggleKaffeInfo.bind(this)}
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


