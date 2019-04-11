import React, { PureComponent } from 'react';
import firebase from '../firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules
} from 'react-360';
import { subscribeSentiment } from '../hack/showSentiment';
import { registerKeyboard } from 'react-360-keyboard';
import { afinn } from './afinn111';
import { InfoButton } from './infoButton';

AppRegistry.registerComponent(...registerKeyboard);

const rootRef = firebase.database().ref().child('react');
const speedRef = rootRef.child('comparative');

export default class Sentiment extends React.Component {
  constructor() {
    super();
    this.state = {
      showSentiment: false,
      score: 0,
      comparative: 0,
    }
  }
  onClickShowKeyboard() {
    // 4.) show the keyboard
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter something...',
      tintColor: '#56b000'
    }).then(input => {
      console.log(input);
      let words = input.split(/\W/);
      let scoredwords = [];
      let score2 = 0;

      for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (afinn.hasOwnProperty(word)) {
          score2 += Number(afinn[word]);
          scoredwords.push(word + ':' + score2);
        }
      }

      let { score } = this.state;
      let komp = score2 / words.length

      this.setState({
        score: score2
      });

      speedRef.set(parseFloat(this.state.comparative) + parseFloat(komp.toFixed(2)));
    });
  }

  handleToggleSentiment(room) {
    this.setState({
      showSentiment: room
    })
  }

  componentDidMount() {
    subscribeSentiment(this.handleToggleSentiment.bind(this));
    speedRef.on('value', snap => {
      // console.log('comparative', snap.val());
      this.setState({
        comparative: snap.val()
      })
    })
  }

  render() {
    const { tintColor } = this.context;

    if (this.state.showSentiment !== 'Room3') {
      return null;
    }

    return (
      <View style={styles.panel}>

        <InfoButton
          onClick={this.onClickShowKeyboard.bind(this)}
          text={"Say something .."}
          width={250}
        />


        <View style={[
          styles.placeholder,
          {
            borderColor: tintColor,
          },
        ]}>
          <View >
            <Text style={styles.placeholderText}>score:{this.state.score}</Text>
            <Text style={styles.placeholderText}>comparative:{this.state.comparative}</Text>
          </View>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    minWidth: 500,
    minHeight: 270,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholder: {
    backgroundColor: '#047364',
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 30,
    paddingTop: 30
  },
  placeholderText: {
    fontSize: 40,
    alignSelf: 'flex-start',
    textAlign: 'center',
    marginLeft: 20,
    color: '#fff',
  },

  greeting: {
    fontSize: 30,
    backgroundColor: '#047364',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#333333',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    height: 60,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    marginBottom: 10,
  },
  textAreaContainer: {
    width: 700,
    height: 60,
    backgroundColor: '#262729',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    flexDirection: 'row',
  },
});

