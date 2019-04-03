/**
 * A simple component to use
 * Use "providesModule" so you can reference it from another file with
 * import MediaAppTemplateInfoButton from "MediaAppTemplateInfoButton.react"
 * @providesModule MediaAppTemplateInfoButton.react
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    asset,
    VrButton,
    Animated,
    NativeModules,
} from 'react-360';


const FOCUS_SCALE = 1.1;

export class MediaAppTemplateInfoButton extends React.Component {
    static defaultProps = {
        width: 180,
        text: '',
    };

    // This component has example to show how animation works
    // You can check the doc: https://facebook.github.io/react-native/docs/0.49/animated#docsNav
    constructor(props) {
        super(props);
        this.state = {
            hasFocus: false,
            scaleAnim: new Animated.Value(0), // initial a value for doing animation
        };
    }

    _focus = () => {
        // start an animation
        Animated.timing(this.state.scaleAnim, {
            toValue: 1,
            duration: 300,
        }).start();
        this.setState({ hasFocus: true });
    };

    _blur = () => {
        // start an animation
        Animated.timing(this.state.scaleAnim, {
            toValue: 0,
            duration: 300,
        }).start();
        this.setState({ hasFocus: false });
    };

    _click = () => {
        // input handling
        this.props.onClick && this.props.onClick();
        // playing one shot audio
        console.log('click')
    };

    render() {
        return (
            <View
                style={[
                    styles.wrapper,
                    this.props.style,
                    { width: this.props.width * FOCUS_SCALE }
                ]}>
                <VrButton
                    onClick={this._click} //this event trigger when click the view
                    onExit={this._blur} //this event trigger when cursor move out of the view
                    onEnter={this._focus} //this event trigger when cursor move into of the view
                >
                    <Animated.View
                        style={[
                            styles.button,
                            this.state.hasFocus && styles.buttonFocused,
                            {
                                // With this the width of this view
                                // is animated with the value of scaleAnim
                                // by interpolation
                                width: this.state.scaleAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [this.props.width, this.props.width * FOCUS_SCALE],
                                }),
                            }]}>
                        <Image
                            style={styles.icon}
                            source={this.props.source} />
                        <Text style={[styles.text,
                        this.state.hasFocus && styles.textFocused]}>
                            {this.props.text}
                        </Text>
                    </Animated.View>
                </VrButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
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
    buttonFocused: {
        backgroundColor: 'white',
        borderColor: '#047364',
    },
    icon: {
        padding: 20,
        tintColor: 'grey',
        height: '100%',
        aspectRatio: 1,
    },
    iconFocused: {
        tintColor: 'white',
    },
    text: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        flex: 1,
    },
    textFocused: {
        color: '#047364'
    }
});

//module.exports = MediaAppTemplateInfoButton;