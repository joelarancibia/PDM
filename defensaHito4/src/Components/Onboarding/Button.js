import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import Colors from '../../config/colors';

const Button =({onPress, titleButton}) =>{

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{titleButton}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.blue,
        shadowOpacity: 0.4,
        shadowOffset: {height: 10, width: 10},
        shadowRadius: 20,
    },
    text: {
        width: 150,
        color: Colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        height: 20,
    },
});

export default Button;


