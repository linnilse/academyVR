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
import Menu from './menu'
import Sentiment from './components/sentiment'
import store from "./store/index";
import { addArticle } from "./actions/index";
import { getMenu } from './hack/openMenu';
import { subscribe } from './hack/rotate';
import VideoWall from './components/videoWall';
import KaffeWall from './components/kaffeWall';
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

  }

  componentDidMount() {
    subscribe(this.ShowRoom.bind(this))

  }
  render() {

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
          : this.state.showRoom == 'Room1' ? <Room1 /> :
            this.state.showRoom == 'Room2' ? <Room2 /> :
              <Room3 />}
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
