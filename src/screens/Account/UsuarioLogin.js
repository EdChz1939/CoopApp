import React,{useContext, useState} from 'react'
import { Image,StyleSheet, Text, TextInput, View, Touchable, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../../utils'
import { AuthContext } from '../../context/AuthContext';

import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function UsuarioLogin({props}) {

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const {test} = useContext(AuthContext);
  const {isLoading, login} = useContext(AuthContext);

  const navigation = useNavigation();
  
  var nombre = '-Cooperativa de Ahorro y Credito lab. Cobee RL.';

  
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer} //style changed to contentContainerStyle
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}>
  <View style={styles.view}>
    <Spinner visible={isLoading}/>

    <Text style = {styles.textocTitulo}>{nombre}</Text>
     <Image style={styles.logo} source = {require('../../assets/logoins_vin.bmp')}/>
     <Text>{test}</Text>
    <TextInput
      style={styles.input}
      placeholder="Usuarios"
      value={user}
      onChangeText={text => setUser(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Clave"
      secureTextEntry={false}
      value={password}
      onChangeText={text => setPassword(text)}
    />
      <TouchableOpacity  onPress={() => {login(user, password);}}>
      <Text style={styles.btnText}>Iniciar session</Text>
      </TouchableOpacity>
    
  </View>
  </KeyboardAwareScrollView>
);
}
/*
088c84
    <TouchableOpacity  onPress={() => {login(user, password);}}>
        <Text style={styles.btnText}>Iniciar session</Text>
    </TouchableOpacity>
008F39 verde cl
buscar el borde color del btn
*/
const styles = StyleSheet.create({

  textocTitulo:{
    color: "ffff"
  },
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
    flex: 1,
    backgroundColor: '#149414',
    alignItems:'center',
    justifyContent: 'center',
},
logo:{
    borderRadius: 50,
    width: '50%',
    height: 160,
    marginTop:50,
    marginBottom: 50,
},
scrollContainer:{
  flexGrow:1
}
})
