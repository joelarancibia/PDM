import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './Colors';
import CVcasos from './CVCasos';
import Constantes from './Constantes';


const CVCiudad= (props) =>{
  const {ciudad,onChangeTextConf,onChangeTextSosp,typeCase}= props;
  return(
    <View>
      <Text style={styles.text}>{ciudad}</Text>
      <CVcasos
      typeCase={Constantes.casosConf}
      onChangeText={onChangeTextConf}
      placeholder={Constantes.Ncasos}
      autoCorrect={false}
      secureTextEntry={false}>
        
      </CVcasos>
      <CVcasos
      typeCase={Constantes.casosSosp}
      onChangeText={onChangeTextSosp}
      placeholder={Constantes.Ncasos}
      autoCorrect={false}
      secureTextEntry={false}>
      </CVcasos>
    </View>
  );
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginBottom: 100,
      position:'absolute',
      fontSize: 20,
      color: Colors.white,
      fontWeight: 'bold',
      backgroundColor: 'transparent',
    },
    text2: {
      color: Colors.white,
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      textAlign: "center"
  },
  });
export default CVCiudad;