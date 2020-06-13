import React from 'react';
import {StyleSheet, View}from 'react-native';


import Colors from '../../config/colors';
import OnboardingFactory from "../../Components/OnboardingFactory";
import Images from '../../config/Images';
import Constants from '../../config/constants';

const  FireScreen =({navigation}) =>{
    return(
        <OnboardingFactory
        source={Images.FIRE}
        title={Constants.STRINGS.TITLE_FIRE}
        desc={Constants.STRINGS.DESC_FIRE}
        backColor={Colors.azul}
        onPressPrev={() => {navigation.navigate('Login')}}
        onPressNext={() => {navigation.navigate('Login')}}
        />
    );
};

export default FireScreen
