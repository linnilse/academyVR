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


export default class Goldegg extends React.Component {
    constructor() {
        super();
    };
}



componentDidMount() {
}

componentWillUnmount() {
}

showMessege() {
    console.log('hello')

}


render() {
    return (
        <View style={styles.greetingBox}>
            <AmbientLight intensity={0.6} />
            <PointLight style={{ color: '#ffffff', transform: [{ translate: [0, -100, -100] }] }} />
            <Entity
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
    greetingBox: {
        padding: 60,
        //backgroundColor: '#000000',
        //borderColor: '#639dda',
        //borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});
