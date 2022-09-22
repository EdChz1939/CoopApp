import React, {useState} from 'react';
import { Image,StyleSheet, Text, TextInput, View, Touchable, TouchableOpacity, Button } from 'react-native';
import Navigation from '../../navigation/Navigation';

export default function LoginForm(props) {
  const {navigation} = props;
  const showTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'flex' },
    });
  };
    return (
      
    <View style={styles.view}>
       <Image style={styles.logo} source = {require('../../assets/2.png')}/>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
      />
      <TextInput
        style={styles.input}
        placeholder="Contrase;a"
        secureTextEntry={true}
      />

      <TouchableOpacity  onPress={()=> navigation.navigate('AoInicio')}>
          <Text style={styles.btnText}>Iniciar session</Text>
      </TouchableOpacity>
      
    </View>
  );
}
/*
088c84

008F39 verde cl
buscar el borde color del btn
*/
const styles = StyleSheet.create({
    input:{
        height: 50,
        color:"#000000",
        width:'80%',
        marginBottom: 25,
        backgroundColor: '#ffff',
        placeholderTextColor:'#000000',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#88C437'
    },
    btnText:{
        height: 50,
        color:"#ffff",
        width:'80%',
        marginBottom: 25,
        backgroundColor: '#088c84',
        paddingHorizontal: 20,
        borderColor: '#ffffff',
        borderRadius: 20,
        padding:10,
    },
    view: {
      backgroundColor: '#149414',
      height: '100%',
      flex: 1,
      alignItems:'center',
  },
  logo:{
      width: '63%',
      height: 240,
      marginTop:50,
      marginBottom: 50,
  }
})
