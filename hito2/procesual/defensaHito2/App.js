import React from 'react';
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
import CvScreen from './src/componentes/CVScreen';

const App: () => React$Node = () => {
  return (
    <CvScreen></CvScreen>
  );
};



export default App;
