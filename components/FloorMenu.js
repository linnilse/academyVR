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
import { subscribeFloorMenu } from '../hack/showFloorMenu';
import Info from './info';
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

  componentDidMount() {
    subscribeFloorMenu(this.handleToggleFloorMenu.bind(this))
  }

  render() {

    if (this.state.showFloorMenu !== 'Room1') {
      return null;
    }
    return (
      <View style={styles.panel}>
        <VrButton onClick={() => { console.log('floor clickt') }} style={{
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


