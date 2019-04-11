import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from 'react-360';
import Room1 from './components/room1'
import Room2 from './components/room2'
import Room3 from './components/room3'
import Room4 from './components/room4'
import Menu from './menu'
import FloorMenu from './components/FloorMenu'
import Sentiment from './components/sentiment'
import { getMenu } from './communication/openMenu';
import { showFloorMenu } from './communication/showFloorMenu';
import { subscribe } from './communication/rotate';
import VideoWall from './components/videoWall';
import VideoIntro from './components/videoIntro';
import KaffeWall from './components/kaffeWall';
import Hallway from './components/hallway';
import PingisWall from './components/pingisWall';
import Instagram from './components/instagram';
import Klassen from './components/klassen';
import { showKaffeWall } from './communication/showKaffeWall';
import { showVideoIntro } from './communication/showVideoIntro';
import { showHallway } from './communication/showHallway';
import { InfoButton } from './components/infoButton';
import PluggWall from './components/pluggWall';




export default class academyVR_1 extends React.Component {
  constructor() {
    super();
    this.state = {
      showRoom: false,
      showMenu: false,
      showSentiment: false,
    };
  }

  showMenu() {
    getMenu();
  }

  ShowRoom(room) {
    console.log('room: ' + room);
    this.setState({
      showRoom: room
    })
  }

  funcShowRoom(room) {
    this.showMenu()
    this.setState({
      showRoom: 'Room1'
    })
    showKaffeWall(room);
    showVideoIntro(room);
    showFloorMenu(room);
    showHallway(room);

  }

  componentDidMount() {
    subscribe(this.ShowRoom.bind(this))

  }
  render() {
    let activeRoom = <Room1 />;
    switch (this.state.showRoom) {
      case 'Room1':
        activeRoom = <Room1 />;
        break;
      case 'Room2':
        activeRoom = <Room2 />;
        break;
      case 'Room3':
        activeRoom = <Room3 />;
        break;
      case 'Room4':
        activeRoom = <Room4 />;
        break;
      default:
        break;
    }

    return (
      <View>
        {this.state.showRoom == false ?
          <View style={styles.panel}>
            <View style={styles.padding}>
              <Text style={styles.text}>
                Welcome to Academy
          </Text>
            </View>
            <InfoButton
              onClick={this.funcShowRoom.bind(this, 'Room1')}
              text={"Starta"}
              width={250}
            />
          </View>
          : activeRoom}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    padding: 20,

  },
  text: {
    fontSize: 60,
    color: '#047364',
    fontWeight: 'bold'
  },
});

AppRegistry.registerComponent('academyVR_1', () => academyVR_1);
AppRegistry.registerComponent('Menu', () => Menu);
AppRegistry.registerComponent('Sentiment', () => Sentiment);
AppRegistry.registerComponent('VideoWall', () => VideoWall);
AppRegistry.registerComponent('KaffeWall', () => KaffeWall);
AppRegistry.registerComponent('PingisWall', () => PingisWall);
AppRegistry.registerComponent('FloorMenu', () => FloorMenu);
AppRegistry.registerComponent('Instagram', () => Instagram);
AppRegistry.registerComponent('Klassen', () => Klassen);
AppRegistry.registerComponent('PluggWall', () => PluggWall);
AppRegistry.registerComponent('Hallway', () => Hallway);
AppRegistry.registerComponent('VideoIntro', () => VideoIntro);
