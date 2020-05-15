import React from 'react';
import {StyleSheet, View}from 'react-native';


import Colors from '../../config/colors';
import ButtonPrevNext from '../../Components/login/button';
import LogoFire from '../../Components/login/LogoFire';




const  FireScreen =({navigation}) =>{
    return(
        <View style={stylesPdmScreen.container}>
            <LogoFire style={stylesPdmScreen.logo} />
            <View style={stylesPdmScreen.form}>
                <ButtonPrevNext/>
                <ButtonPrevNext/>
            </View>
        </View>
    );

}


const stylesPdmScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
    },
})

export default FireScreen
