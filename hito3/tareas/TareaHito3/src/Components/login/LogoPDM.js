import React,{Component} from 'react';
import {View,Text, Image,StyleSheet} from "react-native";

import Images from '../../config/Images';
import Colors from '../../config/colors';


export default class LogoPdm extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={Images.PDM} style={styles.image}></Image>
                <Text style={styles.text}>PDM</Text>
                <Text style={styles.text2}>Programacion de Dispositivos Moviles - Unifranz</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginLeft:230,
        marginBottom:100,
        width: 260,
        height: 260,
    },
    text: {
        color: Colors.dark,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 50,
    },
    text2:{
        color: Colors.dark,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
        marginBottom:260,
    },
});