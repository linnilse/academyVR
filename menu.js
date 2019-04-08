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
import { showSentiment } from './hack/showSentiment';
import { showVideoWall } from './hack/showVideoWall';
import { showKaffeWall } from './hack/showKaffeWall';
import { showFloorMenu } from './hack/showFloorMenu';
import { showPingisWall } from './hack/showPingisWall';
import { showInstagram } from './hack/showInstagram';
import { subscribeMenuShowRoom4 } from './hack/showRoom4';
import { InfoButton } from './components/infoButton';
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showRoom: 'Room1',
      navigering: 'Navigering'
    }
  }

  funcShowRoom(room) {
    this.setState({
      showRoom: room
    })
    this.showRoom(room)
    showSentiment(room);
    showVideoWall(room);
    showKaffeWall(room);
    showPingisWall(room);
    showFloorMenu(room);
    showInstagram(room);

    if (room === "Room1") {
      this.setState({
        navigering: 'Receptionen'

      })
    }
    if (room === "Room2") {
      this.setState({
        navigering: 'Köket'

      })
    }
    if (room === "Room3") {
      this.setState({
        navigering: 'Klassrummet'

      })
    }
    if (room === "Room4") {
      this.setState({
        navigering: 'Guldkorn'

      })
    }

  }

  handleToggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  showRoom(room) {
    rotate(room);
  }

  componentDidMount() {
    subscribeMenu(this.handleToggleMenu.bind(this));
    subscribeMenuShowRoom4(this.funcShowRoom.bind(this))

  }

  render() {
    if (!this.state.showMenu) {
      return null;
    }

    return (
      <View style={styles.panel}>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>{this.state.navigering}</Text>
        <InfoButton
          onClick={this.funcShowRoom.bind(this, 'Room1')}
          onEnter={e => console.log(e)}
          width={250}
          text={"Receptionen"} />

        <InfoButton
          onClick={this.funcShowRoom.bind(this, 'Room2')}
          width={250}
          text={"Köket"} />
        <InfoButton
          onClick={this.funcShowRoom.bind(this, 'Room3')}
          width={250}
          text={"Klassrummet"} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#047364',
    minWidth: 250,
    //borderColor: '#fff',
    //borderWidth: 1,
    margin: 10,
  },
  greetingBox_focused: {
    backgroundColor: "#ff0000"
  },
  greetingBox_hover: {
    backgroundColor: "#00ff00"
  },
  greeting: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },

});

