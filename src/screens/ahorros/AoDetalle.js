import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity, Button  } from 'react-native'
import React,{Component, useState, useEffect} from 'react'
import { LogBox, LogBoxNotification } from 'react-native-web-log-box'
import { Table, Row, Rows } from 'react-native-table-component';

const { width, height } = Dimensions.get('window')

const tableHead = ['Fecha', 'Detalle', 'Monto']
const tableData= [
  [ '08 AGOS', 'Deposito', '200'],
  [ '08 AGOS', 'Deposito', '200'],
  [ '08 AGOS', 'Retiro', '-1.000,00'],
  [ '08 AGOS', 'Deposito', '200'],
  [ '08 AGOS', 'Deposito', '200'],
  [ '08 AGOS', 'Retiro', '-1.000,00'],
  [ '08 AGOS', 'Deposito', '200'],
  [ '08 AGOS', 'Deposito', '200'],
]

export default function AoDetalle() {

  const [message, setMessage] = useState('')
  const admin = "admin"
  const nnpc123 = "nnpc123"


  const signin = async()=>{
    await fetch('http://140.238.191.225:8080/loginsfback/api/auth/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
      'username': admin,
      'password': nnpc123
    })



    }).then(res => res.json())
    .then(resData =>{
      setMessage(resData);
      console.log(resData)
    })
  }


  return (
    <>
    <View style={styles.background}>
      
    <View style={styles.cardView}>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> NR </Text>
        <Text style={styles.itemDescription}>{message.email}</Text>
        <Text style={styles.itemSaldo}>12321bs</Text>
      </View>
    </View> 

    <Text > {message.accessToken} </Text>
        <Text >{message.email}</Text>
        <Text > {message.roles}</Text>
    <View style={styles.btnFechas}>
    <TouchableOpacity onPress={signin}>
          <Text style={styles.btnText}>Mes</Text>
      </TouchableOpacity>
      <TouchableOpacity >
          <Text style={styles.btnText}>Anio</Text>
      </TouchableOpacity>
    </View>

    
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData}  textStyle={styles.text}/>
        </Table>
    </View>


    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {

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
  background: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  }, 
  btnFechas: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  cardView: {
    width: width - 20,
    backgroundColor: '#88C437',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
},
textView: {
    position: 'relative',
    bottom: 10,
    margin: 30,
    left: 5,
},
itemTitle: {
    color: 'white',
    fontSize: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 10,
    fontWeight: "bold",
    elevation: 5
},
itemDescription: {
    color: 'white',
    fontSize: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5
},
itemSaldo: {
    color: 'white',
    textAlign: 'right',
    fontSize: 20,
    shadowColor: '#000',
},
btnText:{
  margin: 10,
  color:"#ffff",
  backgroundColor: '#088c84',
  paddingHorizontal: 70,
  borderColor: '#ffffff',
  borderRadius: 20,
  padding:10,
},
})

