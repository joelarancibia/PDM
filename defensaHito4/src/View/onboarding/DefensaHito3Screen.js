import React,{useState} from 'react';
import {StyleSheet, View }from 'react-native';


import Colors from '../../config/colors';
import Images from "../../config/Images";
import Constants from "../../config/constants";
import OnboardingFactory from "../../Components/OnboardingFactory";

const  HitScreen =({navigation}) =>{
    return(
       <OnboardingFactory
    source={Images.HIT}
    title={Constants.STRINGS.TITLE_HIT}
    desc={Constants.STRINGS.DESC_HIT}
    backColor={Colors.orange}
    onPressPrev={() => {
        navigation.navigate('Login')
    }}
    onPressNext={() => {
        navigation.navigate('Fire')
    }}/>
    );
}
export default HitScreen;
