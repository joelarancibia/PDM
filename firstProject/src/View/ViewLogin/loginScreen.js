import React,{useState} from 'react';
import {StyleSheet, View,SafeAreaView,KeyboardAvoidingView, Alert}from 'react-native';

import ButtonLogin from '../../Components/login/button';
import TextInputLogin from '../../Components/login/TextImput';
import LogoLogin from '../../Components/login/Login';
import EmailTextField from "../../Components/login/EmailTextField";
import DismissKeyboard from "../../Components/login/DissmissKeyboard";
import FirebasePlugin from '../../plugins/firebase/Firebase';
import {AuthContext} from '../../config/Context'


import Utils from "../../utils/utils";
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Images from '../../config/Images';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    /**
     * @name _validateEmailAddress
     * @returns {boolean}
     * @private
     */
    const _validateEmailAddress = () => {
        let isValidEmail = Utils.isValidEmail(email);
        isValidEmail
            ? setErrorEmail('')
            : setErrorEmail(Constants.STRINGS.EMAIL_ERROR);
        return isValidEmail;
    };

    /**
     * @name _validatePassword
     * @returns {boolean}
     * @private
     */
    const _validatePassword = () => {
        let isValidPassword = Utils.isValidField(password);
        isValidPassword
            ? setErrorPassword('')
            : setErrorPassword(Constants.STRINGS.PASSWORD_ERROR);
        return isValidPassword;
    };

    /**
     * @name _onPressLogin
     * @desc onPres event
     * @private
     */
    const _onPressLogin = () => {
        let emailData = _validateEmailAddress();
        let passwordData = _validatePassword();

        if (emailData && passwordData) {
            loginApp(email, password);
        } else {
            Alert.alert(Constants.STRINGS.EMPTY_TITLE, Constants.STRINGS.EMPTY_VALUES);
        }
    };

    /**
     * @name loginApp
     * @param {string} email
     * @param {string} password
     */
    const loginApp = (email, password) => {
        try {
            setIsLoading(true);
            FirebasePlugin.auth()
                .signInWithEmailAndPassword(email, password)
                .then((user) => {
                    setIsLoading(false);
                    navigation.navigate('App');
                })
                .catch((error) => {
                    setIsLoading(false);
                    Alert.alert('Invalid Values', error.message);
                });
        } catch (error) {
            setIsLoading(true);
            Alert.alert('Firebase Error', error.message);
        }
    };

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView
                style={stylesLoginScreen.container}
                behavior="height"
                enabled>
                <View style={stylesLoginScreen.container}>
                    <SafeAreaView>
                        <LogoLogin style={stylesLoginScreen.logo} />
                        <View style={stylesLoginScreen.form}>
                            <EmailTextField
                                onChangeText={(email) => {
                                    setEmail(email);
                                }}
                                onEndEditing={_validateEmailAddress}
                                error={errorEmail}
                                source={Images.EMAIL}
                                placeholder={Constants.STRINGS.EMAIL}
                                secureTextEntry={false}
                                autoCorrect={false}
                            />
                            <TextInputLogin
                                onChangeText={(password) => {
                                    setPassword(password);
                                }}
                                onEndEditing={_validatePassword}
                                error={errorPassword}
                                source={Images.USERNAME}
                                placeholder={Constants.STRINGS.PASSWORD}
                                secureTextEntry={true}
                                autoCorrect={false}
                            />
                            <View style={stylesLoginScreen.buttonSpace}>
                                <ButtonLogin
                                    isLoading={isLoading}
                                    onPress={_onPressLogin}
                                    titleButton={Constants.STRINGS.TITLE_BUTTON}
                                />
                            </View>
                            <View>
                                <ButtonLogin
                                    isLoading={isLoading}
                                    onPress={() => {navigation.navigate('Register');}}
                                    titleButton={Constants.STRINGS.REGISTER_FORM}
                                />
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
};

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
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
    buttonSpace: {
        marginBottom: 10,
    }
});

export default LoginScreen;


