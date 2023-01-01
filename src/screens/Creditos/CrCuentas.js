import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ListView} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from "../../config";
import React,{Component, useContext, useState, useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {ROUTES, screen} from '../../utils'
import { Table, Row, Rows } from 'react-native-table-component';


const { width, height } = Dimensions.get('window')

export default function CrCuentas(props) {

  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);    
  const [dropDown, setDropDown] = useState("");
  const [cuentas, setCuentas] = useState([]);
  const codigoUsuairo = userInfo.codigo;
  //Movimientos
  const [Movimientos, setMovimientos] = useState([]);
  const [Movimientos2, setMovimientos2] = useState([]);

  const goToAoDetalle = () =>{
    navigation.navigate(ROUTES.CR_DETALLE, { numeroCuenta: dropDown, desproducto : cuentaSelect[0].desproducto ,  saldo: cuentaSelect[0].saldo })
    //navigation.navigate(screen.Ahorros.AoDetalle, {screen: screen.account.account})
  }

  const getCuentass = () => {
    axios
      .get(`${BASE_URL}/ahorros/${codigoUsuairo}`, {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      })
      .then(res => {
        let userCuentas = res.data;
      //  console.log(userCuentas);
       // console.log("cuentas");
        setCuentas(userCuentas);
        AsyncStorage.setItem('cuentasInfo', JSON.stringify(userCuentas));          
      })
      .catch(e => {
        console.log(`cuentas list error ${e}`);
     //   console.log(codigoUsuairo);
      });
  };

  const getMovimientos = () => {
    axios
      .get(`${BASE_URL}/ahorros/mov/${dropDown}/5`, {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      })
      .then(res => {

        let Movimientos5 = res.data;
        setMovimientos(Movimientos5)
        //setMovimientos2(JSON.stringify(Movimientos5))
       // console.log("Movimientos");
        //console.log(res.data);
        AsyncStorage.setItem('Movimientos', JSON.stringify(Movimientos5));   
     
      })
      .catch(e => {
        console.log(`movimientos list error ${e}`);
        console.log(codigoUsuairo);
      });
  };

  useEffect(() => {
    getCuentass();
    getMovimientos();
  }, [dropDown])

  let cuentaSelect= cuentas;
  let MovimientosLista5= Movimientos;
  let movimientos2test = Movimientos2;
  const dataFields = MovimientosLista5;

   if(dropDown){

    cuentaSelect = cuentaSelect.filter(function(item){
      return item.cuenta == dropDown;
   }).map(function({cagencia, cempresa, desproducto,saldo}){
       return {cagencia, cempresa, desproducto, saldo};
   });

   MovimientosLista5 = MovimientosLista5.filter(function(item){
      return item.cuenta == dropDown;
    }).map(function({ fecha, glosa,importe}){
      var date = new Date(fecha)
          return {date, glosa, importe};
   });


  console.log(MovimientosLista5)
     
   }

   return(

    <>
    <View style={styles.cardView}>
      <Text style={styles.itemTitle}>CREDITOS</Text>
    <Picker 
          prompt = 'Seleccione Numero de Cuenta'
          itemStyle={{color:'white'}}  
          selectedValue ={dropDown} 
          onValueChange = {setDropDown}
    >
      {cuentas.map((cuentas,index = 1) => <Picker.Item label ={cuentas.cuenta + " " + cuentas.desproducto.toString() } value ={cuentas.cuenta.toString()} key={index}/>)}
     
    
    </Picker>
        <View style={styles.textView}>
        <Text style={styles.itemTitle}>NR {dropDown} </Text>
        {dropDown ? (
        <>
        
        <Text style={styles.itemDescription}> {cuentaSelect[0].desproducto.toString()}</Text>
        <Text style={styles.itemSaldo}> Saldo {cuentaSelect[0].saldo.toString()}  Bs</Text>
        </>):
        
        (
        <>   
        <Text style={styles.itemDescription}>false</Text>
        <Text style={styles.itemSaldo}></Text>
        
        
        
        </> )}
     
      </View>
      
    </View>
    <View style={styles.cardViewTable}>
    {dropDown ? (
        <>
        
        <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title   textStyle={styles.text}>Fecha</DataTable.Title>
          <DataTable.Title  textStyle={styles.text}>Glosa</DataTable.Title>
          <DataTable.Title numeric  textStyle={styles.text}>importe</DataTable.Title>
        </DataTable.Header>
        

        {MovimientosLista5.map((cuentas,index ) =>(
        <>
        <DataTable.Row >
          <DataTable.Cell  textStyle={styles.text}>{MovimientosLista5[index].date.getFullYear()}/{MovimientosLista5[index].date.getMonth()}/{MovimientosLista5[index].date.getDate()}</DataTable.Cell>
          
          <DataTable.Cell textStyle={styles.text}>{MovimientosLista5[index].glosa.toString()}</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text} numeric>{MovimientosLista5[index].importe.toString()}</DataTable.Cell>
        </DataTable.Row>
        
        </>
        )
        )}
      </DataTable>
        </>
        ):
        (
        <> 
        </> )}
        
   
        <TouchableOpacity
        onPress={goToAoDetalle}
				style={styles.buttonContainer4}
			>
				<Text style={styles.buttonText4}>Ver Todos los Movimientos</Text>
			</TouchableOpacity>
          

    

    </View>
    </>
    )
  } 



const styles = StyleSheet.create({


  header: { height: 50, backgroundColor: '#2bb461',borderRadius: 10 ,margin:3  },
  text: { 
    margin: 2,
    fontSize: 15,
    
  },
    bordertable: { 
      borderWidth: 2, borderColor: '#c8e1ff'
    
  },

  cardViewTable: {
    width: width - 20,
    height: height / 1.9,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
},

  card: {
    backgroundColor: '#fff',
    height: 60,
    margin: 10,
    borderRadius: 16,
  },
  cardView: {
    width: width - 20,
    height: height / 4,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
},
textView: {
     margin: 10,
    bottom: 10,
    left: 5,
},
itemTitle: {
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 10,
    fontWeight: "bold",
    elevation: 5
},
itemDescription: {

    fontSize: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5
},
itemSaldo: {

    textAlign: 'right',
    fontSize: 15,
    shadowColor: '#000',
},











buttonContainer4: {
  width: width - 200,
  height: height / 14,
  backgroundColor: '#2bb461',
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
},
userName: {
  color: '#000000',
  fontSize: 16,
},
});

