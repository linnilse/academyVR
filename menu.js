import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import { subscribeMenu } from './communication/openMenu';
import { rotate } from './communication/rotate';
import { showSentiment } from './communication/showSentiment';
import { showVideoWall } from './communication/showVideoWall';
import { showKaffeWall } from './communication/showKaffeWall';
import { showVideoIntro } from './communication/showVideoIntro';
import { showHallway } from './communication/showHallway';
import { showFloorMenu } from './communication/showFloorMenu';
import { showPingisWall } from './communication/showPingisWall';
import { showPluggWall } from './communication/showPluggWall';
import { showInstagram } from './communication/showInstagram';
import { showKlassen } from './communication/showKlassen';
import { subscribeMenuShowRoom4 } from './communication/showRoom4';
import { InfoButton } from './components/infoButton';
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showRoom: 'Room1',
      navigering: 'Receptionen'
    }
  }

  funcShowRoom(room) {
    this.setState({
      showRoom: room
    })
    this.showRoom(room)
    showSentiment(room);
    showVideoWall(room);
    showVideoIntro(room);
    showKaffeWall(room);
    showHallway(room);
    showPingisWall(room);
    showPluggWall(room);
    showFloorMenu(room);
    showInstagram(room);
    showKlassen(room);

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

