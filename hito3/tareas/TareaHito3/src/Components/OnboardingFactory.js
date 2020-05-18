import React from 'react';
import {View, StyleSheet } from "react-native";

import ButtonFooter from "./Onboarding/ButtonsFooter";
import Description from "./Onboarding/Description";


const OnboardingFactory= ({source, desc, onPressPrev, onPressNext, title,backColor})=>{
    return (
      <View style={styleOnboard(backColor).container}>
          <Description
          source={source}
          title={title}
          desc={desc}
          />
          <View sytle={styleOnboard(backColor).alignInline}>
              <ButtonFooter
              onPressPrev={onPressPrev}
              onPressNext={onPressNext}
              />
          </View>
      </View>
    );
};
const  styleOnboard =backColor => StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: backColor,
        justifyContent:'center',
        alignItems:'center'
    },
    alignInline:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        bottom:20,
    },
});

export default OnboardingFactory;