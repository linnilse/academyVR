import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import { subscribeMenu } from './hack/openMenu';
import { rotate } from './hack/rotate';
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showRoom: false
    }
  }

  funcShowRoom(room) {
    console.log('ShowRoom')
    this.setState({
      showRoom: room
    })
    this.showRoom(room)

  }

  handleToggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  componentDidMount() {
    subscribeMenu(this.handleToggleMenu.bind(this))
  }

  showRoom(room) {
    console.log('rotate')
    rotate(room);
  }

  render() {
    if (!this.state.showMenu) {
      console.log('not showing')
      return null;
    }
    return (


      <View style={styles.panel}>
        <VrButton
          onClick={this.funcShowRoom.bind(this, 'Room1')}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room1
          </Text>
        </VrButton>
        <VrButton
          onClick={this.funcShowRoom.bind(this, 'Room2')}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room2
          </Text>
        </VrButton>
        <VrButton
          onClick={this.funcShowRoom.bind(this, 'Room3')}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room3
          </Text>
        </VrButton>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

