import React,{useContext, useState} from 'react'
import { Image,StyleSheet, Text, TextInput, View, Touchable, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {screen} from '../../utils'
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

export default function UsuarioLogin({props}) {

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const {test} = useContext(AuthContext);
  const {isLoading, login} = useContext(AuthContext);

  const navigation = useNavigation();

  const goToAoDetalle = () =>{
     navigation.navigate('AoInicio')
    //navigation.navigate(screen.Ahorros.AoDetalle, {screen: screen.account.account})
  }
  return (
    
  <View style={styles.view}>
    <Spinner visible={isLoading}/>
     <Image style={styles.logo} source = {require('../../assets/2.png')}/>
     <Text>{test}</Text>
    <TextInput
      style={styles.input}
      placeholder="Usuarioss"
      value={user}
      onChangeText={text => setUser(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Contrase;a"
      secureTextEntry={false}
      value={password}
      onChangeText={text => setPassword(text)}
    />
    <TouchableOpacity  onPress={() => {login(user, password);}}>
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
