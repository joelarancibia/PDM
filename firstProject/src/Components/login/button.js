import React,{Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';


export default class button extends Component {
    constructor(props) {
      super(props);
    }
    
    render(){
        return(
            <View>
                <TouchableOpacity 
                style={stylesButton.button }
                onPress={this.props.onPress}
                >
                <Text style={stylesButton.text}>{this.props.titleButton}</Text>
                </TouchableOpacity>
            </View>
        );

        
    }
}

const stylesButton = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.blue,
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(255,255,255,0.7)',
    },
    text: {
      color: colors.white,
      textAlign: 'center',
      height: 20,
    },
  });
  
  
