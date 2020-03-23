/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import logueo from '../firstProject/src/login/logueo'; 
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Mycomponent from './src/miComponente/Mycomponent';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Mycomponent style={styles.box} text="hola mundo desde React native"></Mycomponent>
    </View>
    
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  container:{
    flex: 5,
    flexDirection:'column',
    alignItems:'center',

  },
  box: {
    heigth: 100,
  },
});
export default App;
