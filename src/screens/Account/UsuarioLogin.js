import React,{useContext, useState} from 'react'
import { Image,StyleSheet, Text, TextInput, View, Touchable, TouchableOpacity, Button,SafeAreaView , StatusBar} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../../utils'
import { AuthContext } from '../../context/AuthContext';

import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function UsuarioLogin({props}) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const {test} = useContext(AuthContext);
  const {isLoading, login} = useContext(AuthContext);

  const navigation = useNavigation();
  
  var nombre = 'Cooperativa de Ahorro y Credito';
  var Cooperativa =  ' lab. Cobee RL.';
  
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer} //style changed to contentContainerStyle
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}> 
 <View style={styles.container}>
 <Spinner visible={isLoading}/>
      <Image style={styles.backImage} source = {require('../../assets/cobbe.jpg')}/>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Inicio de session</Text>
         <TextInput
        style={styles.input}
        placeholder="Usuario"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={user}
        onChangeText={text => setUser(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Clave"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => {login(user, password);}}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Iniciar session </Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
    
  </KeyboardAwareScrollView>
);
}
const styles = StyleSheet.create({
  scrollContainer:{
    flexGrow:1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#ffd102",
    alignSelf: "center",
    paddingBottom: 5,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 200,
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#149414',
    borderTopLeftRadius: 60,
  },
  form: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#ffd102',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});