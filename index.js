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
import store from "./store/index";
import { addArticle } from "./actions/index";
import { getMenu } from './hack/openMenu';
import { subscribe } from './hack/rotate';
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
    };
  }

  showMenu() {
    console.log('rotate')
    getMenu();
  }

  ShowRoom(room) {
    this.setState({
      showRoom: room
    })
  }

  funcShowRoom() {
    this.showMenu()
    this.setState({
      showRoom: 'Room1'
    })
  }

  componentDidMount() {
    subscribe(this.ShowRoom.bind(this))

  }
  render() {

    return (
      <View>
        {this.state.showRoom == false ?
          <View style={styles.panel}>
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                Welcome to Academy
          </Text>
            </View>
            <VrButton
              onClick={this.funcShowRoom.bind(this)}
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

AppRegistry.registerComponent('academyVR_1', () => academyVR_1);
AppRegistry.registerComponent('Menu', () => Menu);
