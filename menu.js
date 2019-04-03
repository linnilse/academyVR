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
import { MediaAppTemplateInfoButton } from './components/infoButton'
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showRoom: 'Room1'
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
    //this.funcShowRoom.call(this, 'Room1');
  }
  render() {
    if (!this.state.showMenu) {
      console.log('not showing')
      return null;
    }

    return (


      <View style={styles.panel}>
        <Text style={{ color: '#000' }}>Navigering</Text>
        <MediaAppTemplateInfoButton
          onClick={this.funcShowRoom.bind(this, 'Room1')}
          onEnter={e => console.log(e)}
          width={250}
          text={"Receptionen"} />

        <MediaAppTemplateInfoButton
          onClick={this.funcShowRoom.bind(this, 'Room2')}
          width={250}
          text={"Köket"} />
        <MediaAppTemplateInfoButton
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

