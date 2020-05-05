import React from 'react';
import {StyleSheet, View,  Text} from 'react-native';

import Constants from '../../config/constants';
import Colors from '../../config/colors';
import ButtonLogin from '../../Components/login/button';

const RegisterScreen = ({navigation}) => {
    const onPress = () => {
        console.log('register');
    };

    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <ButtonLogin onPress={onPress} titleButton={Constants.STRINGS.REGISTER} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        height: 20,
    },
});

export default RegisterScreen;
