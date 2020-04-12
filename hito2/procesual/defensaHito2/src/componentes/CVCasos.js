import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Colors from './Colors';

const CVCasos=(props)=> {
  const {typeCase, placeholder, onChangeText,secureTextEntry,autoCorrect}= props;
  return(
    <View>
      <Text style={styles.text}>{typeCase}</Text>
      <TextInput 
          style={styles.textInput}
          onChangeText={onChangeText} 
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          placeholderTextColor={Colors.dark}
          underlineColorAndroid="transparent"
          selectionColor={Colors.blue}>
      </TextInput>
    </View>

  );
}
  
  CVCasos.propTypes = {
    onChangeText:PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
  };

  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: Colors.blue,
      alignItems: 'center',
      height: 40,
      borderColor: Colors.silver,
      paddingLeft: 40,
      borderRadius: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20,
      marginHorizontal: 100,
      width: 180,
    },
    text: {
      position: 'absolute',
      fontSize: 20,
      fontWeight:'bold',
      backgroundColor:'transparent',
      color: Colors.white,
      marginLeft:50,
    },
  });
export default CVCasos;