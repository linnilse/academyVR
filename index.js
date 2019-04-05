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
import store from "./store/index";
import { addArticle } from "./actions/index";
import { getMenu } from './hack/openMenu';
import { showFloorMenu } from './hack/showFloorMenu';
import { subscribe } from './hack/rotate';
import VideoWall from './components/videoWall';
import KaffeWall from './components/kaffeWall';
import PingisWall from './components/pingisWall';
import { showKaffeWall } from './hack/showKaffeWall';
window.store = store;
window.addArticle = addArticle;

store.dispatch(addArticle('hej'));
console.log(store.getState());



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
    showFloorMenu(room);

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
            <View style={styles.greetingBox2}>
              <Text style={styles.greeting2}>
                Welcome to Academy
          </Text>
            </View>
            <VrButton
              onClick={this.funcShowRoom.bind(this, 'Room1')}
              style={styles.greetingBox}>
              <Text style={styles.greeting}>
                Starta
          </Text>
            </VrButton>
          </View>
          : activeRoom}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#047364',
  },
  greeting: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  greetingBox2: {
    padding: 20,
    //backgroundColor: '#000000',
    //borderColor: '#639dda',
    //borderWidth: 2,

  },
  greeting2: {
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
