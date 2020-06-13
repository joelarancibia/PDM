import React from 'react';
import {
    View,
    StyleSheet,

} from "react-native";
import Button from "./Button";
import Constants from '../../config/constants';



const ButtonFooter  =({onPressPrev,onPressNext, })=>{

        return(
            <View style={styles.styleButton}>
                <Button
                    titleButton={Constants.STRINGS.SKIP_BUTTON}
                    onPress={onPressPrev}
                />
                <Button
                    titleButton={Constants.STRINGS.NEXT_BUTTON}
                    onPress={onPressNext}
                />
            </View>
        );
};
const styles = StyleSheet.create({
   styleButton:{
     flex:1,
     flexDirection: 'row',
     alignItems: 'flex-end',
     bottom: 20,
       marginBottom: 280,
   },
});
export default ButtonFooter;

