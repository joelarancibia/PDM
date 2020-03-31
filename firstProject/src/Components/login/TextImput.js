import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../config/colors';

export default class TextInputForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);//para mostrar en pantallad de debug
  }

  render() {
    return (
      <View>
        <Image
          style={stylesInput.inlineImg}
          source={this.props.source}/>
        <TextInput
          onChangeText={this.props.onChangeText} //cambio reflejada en esa caja de texto
          style={stylesInput.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}
TextInputForm.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

const stylesTextInput = StyleSheet.create({
    textInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      alignItems: 'center',
      height: 40,
      borderColor: Colors.silver,
      paddingLeft: 40,
      borderRadius: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20,
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 10,
      top: 9,
    },
  });
  