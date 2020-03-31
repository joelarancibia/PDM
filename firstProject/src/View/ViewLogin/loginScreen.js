import React,{Component} from 'react';
import {StyleSheet, View }from 'react-native';

import Buttonlogin from '../../Components/login/button';
import TextinputLogin from '../../Components/login/TextImput';
import loginLogin from '../../Components/login/Login';

import Constants from '../../config/constants';
import Colors from '../../config/colors';
import imgusername from '../../../src/images/username.png';
import imgpass from '../../../src/images/pass.png';



export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        };
        this._onPress=this._onPress.bind(this);
        this._onChangeTextUsername=this._onChangeTextUsername.bind(this);
        this._onChangeTextpassword=this._onChangeTextpassword.bind(this);
    }
    _onPress(){
        console.log('boton presionado')
        console.log(this.state.username);
        console.log(this.state.password);

    }
    _onChangeTextUsername(username){
        this.setState({
            username: username
        });
        
    }
    _onChangeTextpassword(password){
        this.setState({
            password:password

        });

    }

    render(){
        return(
            <View style={stylesLoginScreen.container}>
                <loginLogin style={stylesLoginScreen.logo}/>
                <View style={stylesLoginScreen.form}>
                    <TextinputLogin
                    onChangeText={this._onChangeTextUsername}
                    source={imgusername}
                    placeholder={Constants.USERNAME}
                    securetextEntry={false}
                    autoCorrect={false}>
                    </TextinputLogin>

                    <TextinputLogin
                    onChangeText={this._onChangeTextpassword}
                    source={imgpass}
                    placeholder={Constants.PASSWORD}
                    securetextEntry={true}
                    autoCorrect={false}>
                    </TextinputLogin>

                    <Buttonlogin
                    onPress={this._onPress}
                    tittleButton={constants.TITLE_BUTTON} >
                    </Buttonlogin>
                </View>               
            </View>

        );

    }
}


const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
