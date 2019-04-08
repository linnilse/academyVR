import React from 'react';
import {
    asset,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    Environment,
    Model,
    Animated,
    AmbientLight,
    PointLight,
    Pano,
} from 'react-360';
import { Easing } from 'react-native';
import Entity from 'Entity';


export default class Info extends React.Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
        this.state = {

            spin: new Animated.Value(0),
        };
    }



    componentDidMount() {
        this.spinAnimation();
        Animated.timing(this.animatedValue, {
            duration: 1000,
            toValue: 10,
        }).start(() => {
            console.log("Animation finished");
        });
    }

    componentWillUnmount() {
    }

    showMessege() {
        console.log('hello')

    }

    spinAnimation() {
        this.state.spin.setValue(0);
        Animated.timing(
            this.state.spin,
            {
                toValue: 1,
                duration: 9000,
                easing: Easing.linear
            }
        ).start(() => this.spinAnimation());
    }


    render() {
        const AnimatedModel = Animated.createAnimatedComponent(Entity);

        return (
            <View style={styles.padding}>
                <AmbientLight intensity={0.6} />
                <PointLight style={{ color: '#ffffff', transform: [{ translate: [0, -100, -100] }] }} />
                <AnimatedModel
                    lit
                    source={{
                        obj: asset('info.obj'),
                        mtl: asset('info.mtl')
                    }}
                    style={{
                        transform: [{ translate: this.props.translate }, { scale: this.animatedValue }, { rotateX: '5deg', rotateY: '100deg' },
                        {
                            rotateY: this.state.spin.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg']
                            })
                        }],

                    }}
                    wireframe={false}
                />
            </View>
        );
    }
};



const styles = StyleSheet.create({
    padding: {
        padding: 60,
    },
});
