import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import React,{Component, useState, useEffect, useContext} from 'react'
import AoCuentas from './AoCuentas';
import { FlatList } from 'react-native-gesture-handler';
import { Table, Row, Rows } from 'react-native-table-component';
import { LogBox, LogBoxNotification } from 'react-native-web-log-box'
import { useNavigation } from "@react-navigation/native";
import {screen} from '../../utils'
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../../context/AuthContext';



LogBox.ignoreLogs(["Invalid prop `textStyle` of type `array` supplied to `Cell`"]);
FlatList

const tableHead = ['Fecha', 'Detalle', 'Monto']
const tableData= [
  [ '08 AGOS', 'Deposito', '200,00'],
  [ '08 AGOS', 'Deposito', '200,00'],
  [ '08 AGOS', 'Retiro', '-1.000,00'],
  ['08 AGOS', 'Retiro', '-1.000,00']
]


export default function AoInicio(props) {

  const {userInfo, logout, isLoading} = useContext(AuthContext);    


  const navigation = useNavigation();

  const goToAoDetalle = () =>{
    navigation.navigate(screen.Ahorros.AoDetalle)
    //navigation.navigate(screen.Ahorros.AoDetalle, {screen: screen.account.account})
  }

  return (
  <View style={styles.background}>
    
    <AoCuentas/>
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData}  textStyle={styles.text}/>
        </Table>
    </View>

    <TouchableOpacity onPress={goToAoDetalle}>
            <Text style={styles.btnText}>Todos los movimientos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
            <Text style={styles.btnText}>Cerrar Session</Text>
      </TouchableOpacity>
  
 
  </View>


  )
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 16,
      paddingTop: 30, 
      backgroundColor: '#fff'
     },
  head: {
     height: 40, 
    backgroundColor: '#f1f8ff'
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
  background: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  userName: {
    color: '#000000',
    fontSize: 16,
  },
});