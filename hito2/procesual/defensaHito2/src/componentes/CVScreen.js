import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

import CvLogo from '../componentes/CVLogo';
import CVCiudad from './CVCiudad';
import Constantes from './Constantes';
import Colors from './Colors';
import Button from './Button';
export default class cvScreen extends Component{
    constructor(props){
        super(props);
        this,state={
            confcb: 0,
            sospcb: 0,

            confsz: 0,
            sospsz: 0,

            confor: 0,
            sospor: 0,

            Busqueda:'',
        };
        this._onChangeTextConfCB= this._onChangeTextConfCB.bind(this);
        this._onChangeTextSospCB= this._onChangeTextSospCB.bind(this);

        this._onChangeTextConfScz= this._onChangeTextConfScz.bind(this);
        this._onChangeTextSospScz= this._onChangeTextSospScz.bind(this);

        this._onChangeTextConfOR= this._onChangeTextConfOR.bind(this);
        this._onChangeTextSospOR= this._onChangeTextSospOR.bind(this);

        this._onChangeTextInputBusq= this._onChangeTextInputBusq.bind(this);

        this._onPressCalcular = this._onPressCalcular.bind(this);
    }
    _onChangeTextConfCB(confcb){
        this.setState({
            confcb:confcb
        });
    }
    _onChangeTextSospCB(sospcb){
        this.setState({
            sospcb:sospcb
        });
    }

    _onChangeTextConfScz(confsz){
        this.setState({
            confsz:confsz
        });
    }
    _onChangeTextSospScz(sospsz){
        this.setState({
            sospsz:sospsz
        });
    }

    _onChangeTextConfOR(confor){
        this.setState({
            confor:confor
        });
    }
    _onChangeTextSospOR(sospor){
        this.setState({
            sospor:sospor
        });
    }
    _onChangeTextInputBusq(Busqueda){
        this.setState({
            Busqueda:Busqueda
        });
    }
    _onPressCalcular(){
       let n1CB,n2SC, n3OR, mensaje;
       

       if(this.state.Busqueda==='confirmados'){
           n1CB= parseInt(this.state.confcb) ;
           n2SC=parseInt(this.state.confsz);
           n3OR= parseInt(this.state.confor);
           mensaje='casos confirmados mayor es:';
       }
       if(this.state.Busqueda==='sospechosos'){
        n1CB= parseInt(this.state.sospcb) ;
        n2SC=parseInt(this.state.sospsz);
        n3OR= parseInt(this.state.sospor);
        mensaje='casos  sospechosos mayor es:';
        }
        let mayor=Math.max(n1CB,n2SC,n3OR);
        console.log(mensaje + mayor)
    }


    render(){
        return(
            <View style={styles.container}>
                <CvLogo></CvLogo>
                <View>
                    <CVCiudad
                    ciudad={Constantes.cbba}
                    onChangeTextConf={this._onChangeTextConfCB}
                    onChangeTextSosp={this._onChangeTextSospCB}>
                    </CVCiudad>
                    <CVCiudad
                        ciudad={Constantes.scz}
                        onChangeTextConf={this._onChangeTextConfScz}
                        onChangeTextSosp={this._onChangeTextSospScz}>
                    </CVCiudad>
                    <CVCiudad
                        ciudad={Constantes.or}
                        onChangeTextConf={this._onChangeTextConfOR}
                        onChangeTextSosp={this._onChangeTextSospOR}>
                    </CVCiudad>
                </View>
                <TextInput
                style={styles.TextInput}
                onChangeText={this._onChangeTextInputBusq}
                selectionColor={Colors.blue}
                placeholder={Constantes.busqueda}
                secureTextEntry={false}
                autoCorrect={false}
                placeholderTextColor={Colors.silver}
                underlineColorAndroid="transparent">
                </TextInput>
                <Button
                    onPress={this._onPressCalcular}
                    titleButton={Constantes.titlebuton}>
                </Button>
            </View>

        );
    }
}
const styles= StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.dark,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
  