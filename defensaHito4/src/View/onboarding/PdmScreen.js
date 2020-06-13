import React from 'react';
import { StyleSheet} from 'react-native';

import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Images from "../../config/Images";
import OnboardingFactory from "../../Components/OnboardingFactory";

const PdmScreen = ({ navigation }) => {
    return (
        <OnboardingFactory
            source={Images.PDM}
            title={Constants.STRINGS.TITLE_PDM}
            desc={Constants.STRINGS.DESC_PDM}
            onPressPrev={()=>{navigation.navigate('Login')}}
            onPressNext={() => {navigation.navigate('HIT')}}
            backColor={Colors.verde}
        />
    );
};

export default PdmScreen;