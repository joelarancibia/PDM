import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Constants from '../../config/constants';
import Colors from '../../config/colors';
import LogoPDM from "../../Components/login/LogoPDM";
import ButtonPrevNext from '../../Components/login/button';

const PdmScreen = ({ navigation }) => {
    const _onPressPrev = () => {
        navigation.navigate('ScreenPDM');
    };
    const _onPressNext = () => {
        navigation.navigate('ScreenFireBase');
    };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <LogoPDM
                    style={styles.logo}
                />
                <View>
                    <View style={styles.buttonNext}>
                        <ButtonPrevNext
                            onPress={_onPressNext}
                            TittleButton={Constants.STRINGS.NEXT_BUTTON}></ButtonPrevNext>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azul,
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    buttonNext: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 50,
    },


});
export default PdmScreen;