import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
} from "react-native";

import Colors from '../../config/colors';

const Description =({source,title,desc})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={source} />
            <Text style={styles.textTi}> {title}</Text>
            <Text style={styles.textDesc}> {desc}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        marginTop:500,
    },
    textTi: {
        color: Colors.white,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: 30,
        marginBottom:10,
    },
    textDesc:{
        color: Colors.white,
        width:'60%',
        backgroundColor: 'transparent',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
});
export default Description;