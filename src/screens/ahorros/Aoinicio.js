import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import React,{Component, useContext, useState, useEffect} from 'react';
import AoCuentas from './AoCuentas';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Table, Row, Rows } from 'react-native-table-component';
import { LogBox, LogBoxNotification } from 'react-native-web-log-box'
import { useNavigation } from "@react-navigation/native";
import {ROUTES, screen} from '../../utils'
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../../context/AuthContext';
///////////base db
import axios from 'axios';
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";



const { width, height } = Dimensions.get('window')

LogBox.ignoreLogs(["Invalid prop `textStyle` of type `array` supplied to `Cell`"]);
FlatList

const tableHead = ['Fecha', 'Detalle', 'Monto']
const tableData= [
  [ '08 AGOS', 'Deposito', '200,00'],
  [ '08 AGOS', 'Deposito', '200,00'],
  [ '08 AGOS', 'Retiro', '-1.000,00'],
  [ '08 AGOS', 'Retiro', '-1.000,00'],
  ['08 AGOS', 'Retiro', '-1.000,00']
]


export default function AoInicio(props) {

  const {userInfo, logout, isLoading} = useContext(AuthContext);    
  const navigation = useNavigation();
  const goToAoDetalle = () =>{
    navigation.navigate(ROUTES.AO_DETALLE)
    //navigation.navigate(screen.Ahorros.AoDetalle, {screen: screen.account.account})
  }

  const codigoUsuairo = userInfo.codigo;

  const getMovimientos = () => {
    axios
      .get(`${BASE_URL}/ahorros/mov/${codigoUsuairo}/5`, {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      })
      .then(res => {
        let userCuentas = res.data;
      //  console.log(userCuentas);
     //   console.log(codigoUsuairo);
       // setCuentas(userCuentas);]
       console.log(res.data);
        AsyncStorage.setItem('cuentasInfo', JSON.stringify(userCuentas));   
     
     
      })
      .catch(e => {
        console.log(`cuentas list error ${e}`);
        console.log(codigoUsuairo);
      });
  };

  useEffect(() => {
    getMovimientos();
  }, [])








  return (
  <View style={styles.background}>
      <ScrollView>
    <AoCuentas />
      </ScrollView>
  </View>


  )
}


const styles = StyleSheet.create({

  buttonContainer4: {
    width: width - 200,
    height: height / 14,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    justifyContent: 'center',
		alignItems: 'center',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
	},
	buttonText4: {
		fontSize: 15,
	},
  container: {
     padding: 16,
      paddingTop: 10, 
     },
  head: {
     height: 40, 
    backgroundColor: '#bababa'
   },
  text: { 
    margin: 6,
    
  },
  card: {
    backgroundColor: '#D5D5D5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
  },
  btnText:{
    height: 50,
    color:"#ffff",
    width:'80%',
    marginBottom:7,
    backgroundColor: '#088c84',
    paddingHorizontal: 10,
    borderColor: '#ffffff',
    borderRadius: 10,
    padding:10,
},

  userName: {
    color: '#000000',
    fontSize: 16,
  },
});