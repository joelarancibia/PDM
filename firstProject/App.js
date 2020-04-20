import React,{Component} from 'react';
import LoginScreen from './src/View/ViewLogin/loginScreen'
import MainNavigator from './src/Navigator/MainNavigatorFile'

const App: () => React$Node = () => {
  return (
    <MainNavigator></MainNavigator>
  );
};