import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
  Image,
  asset
} from 'react-360';
import { subscribeFloorMenu } from '../communication/showFloorMenu';
import { rotate } from '../communication/rotate';
import Info from './info';
import { showKaffeWall } from '../communication/showKaffeWall';
import { showVideoIntro } from '../communication/showVideoIntro';
import { showHallway } from '../communication/showHallway';
import { showInstagram } from '../communication/showInstagram';
import { MenuShowRoom4 } from '../communication/showRoom4';

export default class FloorMenu extends React.Component {
  constructor() {
    super();
    this.state = {

      showFloorMenu: false,
    }
  }

  handleToggleFloorMenu(room) {
    this.setState({
      showFloorMenu: room
    })
  }

  funcShowRoom(room) {
    this.showRoom(room)
    this.setState({
      showFloorMenu: room
    })

    showKaffeWall(room);//så att kaffe inte syns i rum 4
    showVideoIntro(room);//så att VideoIntro inte syns i rum 4
    showHallway(room);//så att hallway inte syns i rum 4
    showInstagram(room);
    MenuShowRoom4(room)
  }

  showRoom(room) {
    rotate(room);
  }

  componentDidMount() {
    subscribeFloorMenu(this.handleToggleFloorMenu.bind(this))
  }

  render() {

    if (this.state.showFloorMenu !== 'Room1') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <VrButton onClick={this.funcShowRoom.bind(this, 'Room4')} style={{
          padding: 20, position: 'relative', top: 300,
        }}>
          <View>
            <Info translate={[30, -100, 0]} />
            <Image style={{ width: 66, height: 100 }} source={asset('goldenegg.png')} />
          </View>
        </VrButton>

      </View >
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 300,
    height: 600,
    position: 'relative',
    alignItems: 'center',
  },
});


