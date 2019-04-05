import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Animated,
} from 'react-360';
import { subscribeFloorMenu } from '../hack/showFloorMenu';
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
        <VrButton
          onClick={console.log('floor clickt')}
          style={styles.greetingBox}>
          <View>
            <Text>bara en text</Text>
          </View>
        </VrButton>

      </View >
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    //backgroundColor: '#000000',
    //borderColor: '#639dda',
    //borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  greetingBox2: {
    padding: 20,
    marginRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: 100,
  },
  greeting2: {
    fontSize: 60,
    //color: '#047364',
    color: '#ffffff',

    fontWeight: 'bold'
  },
});


