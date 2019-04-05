import React, { PureComponent } from 'react';

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

AppRegistry.registerComponent(...registerKeyboard);

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];



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
      /*let { words } = this.state;
      this.setState({ words: words });*/
      let words = input.split(/\W/);

      let scoredwords = [];
      let score2 = 0;
      console.log(score2 / words.length);

      for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (afinn.hasOwnProperty(word)) {
          score2 += Number(afinn[word]);
          scoredwords.push(word + ':' + score2);
        }
      }


      let { score } = this.state;
      this.setState({
        score: score2,
        comparative: score2 / words.length
      });
    });
  }

  handleToggleSentiment(room) {
    this.setState({
      showSentiment: room
    })
  }

  componentDidMount() {
    subscribeSentiment(this.handleToggleSentiment.bind(this))
  }

  render() {
    const { tintColor } = this.context;

    if (this.state.showSentiment !== 'Room3') {
      return null;
    }
    return (
      <View style={styles.panel}>

        <VrButton
          style={styles.greetingBox}
          onClick={this.onClickShowKeyboard.bind(this)}>
          <Text style={styles.greeting}>
            Sentiment
          </Text>
        </VrButton>
        <View style={[
          styles.placeholder,
          {
            borderColor: tintColor,
          },
        ]}>
          <View >
            <Text style={styles.placeholderText}>score:{this.state.score}</Text>
            <Text style={styles.placeholderText}>comparative:{this.state.comparative}</Text>
            {/* <Text style={styles.placeholderText}>words:{this.state.words}</Text> */}
          </View>
        </View>

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
  placeholder: {
    display: 'flex',
    width: 700,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    flexDirection: 'column',
  },
  placeholderText: {
    fontSize: 40,
    alignSelf: 'flex-start',
    textAlign: 'center',
    marginLeft: 20,
    color: '#000',

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

