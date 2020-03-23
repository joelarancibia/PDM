import React,{component, Component} from 'react';
import {styleSheet, View, Text, Image} from 'react-native';
import Emsa from '../images/Emsa.jpg'

export default class Logueo extends Component{
    constructor (props){
        super(props);

    }
    render(){
        return(
            <View style={styles.container}>
                <image style={styles.image}>
                    source={Emsa}
                </image>
                <Text style={styles.text}> empresa de limpieza </Text>              
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    image: {
        width: 80,
        heigth: 80,

    },
    text: {
        color:'white',
        fontWeight: 'bold',
        backgroudColor:'transparent',
        marginTop: 20,

    },
});