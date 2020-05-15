import React,{useState} from 'react';
import {StyleSheet, View }from 'react-native';


import Colors from '../../config/colors';
import ButtonPrevNext from '../../Components/login/button';
import LogoHit from '../../Components/login/LogoHit';




const  HitScreen =({navigation}) =>{
    return(
        <View style={stylesPdmScreen.container}>
            <LogoHit style={stylesPdmScreen.logo} />
            <View style={stylesPdmScreen.form}>
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

export default HitScreen
