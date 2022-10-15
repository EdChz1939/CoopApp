import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from "../../config";
import React,{Component, useContext, useState, useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


const { width, height } = Dimensions.get('window')

export default function AoCuentas(props) {
    const {userInfo} = useContext(AuthContext);    
    const [user, setuser] = useState("");
    const [dropDown, setDropDown] = useState("");
    const [cuentas, setCuentas] = useState([]);
    const codigoUsuairo = userInfo.codigo;
    const [selectCuenta, setSelectCuenta] = useState([]);

   
    const getCuentass = () => {
      axios
        .get(`${BASE_URL}/ahorros/${codigoUsuairo}`, {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        })
        .then(res => {
          let userCuentas = res.data;
        //  console.log(userCuentas);
       //   console.log(codigoUsuairo);
          setCuentas(userCuentas);
          AsyncStorage.setItem('cuentasInfo', JSON.stringify(userCuentas));   
       
       
        })
        .catch(e => {
          console.log(`cuentas list error ${e}`);
          console.log(codigoUsuairo);
        });
    };

    useEffect(() => {
      getCuentass();
    }, [])

    let cuentaSelect= cuentas;
    cuentaSelect = cuentaSelect.filter(function(item){
      return item.cuenta == dropDown;
   }).map(function({cagencia, cempresa, desproducto,saldo}){
       return {cagencia, cempresa, desproducto, saldo};
   });
      //console.log(cuentaSelect.cagencia.toString());
   
    
    //state = {
    //  cuenta:'Cuentas'
    //}
    //const {user, logout, loading} = useContext(AuthContext);
    return(

    <>
    <View style={styles.cardView}>
    <Picker 
          
          itemStyle={{color:'white'}}  
          selectedValue ={dropDown} 
          onValueChange = {setDropDown}
    >
       <Picker.Item label = "SELECIONAR CUENTA" value = "Nr" key = "0"/>
      {cuentas.map((cuentas,index = 1) => <Picker.Item label ={cuentas.cuenta + " " + cuentas.desproducto.toString() } value ={cuentas.cuenta.toString()} key={index}/>)}
     
    
    </Picker>
        <View style={styles.textView}>
        <Text style={styles.itemTitle}>NR {dropDown} </Text>
        <Text style={styles.itemDescription}>{cuentaSelect[0].desproducto.toString()}</Text>
        <Text style={styles.itemSaldo}> Saldo {cuentaSelect[0].saldo.toString()}  Bs</Text>


      </View>
    </View>
      <>
     
      </>
    </>
    )
  } 



const styles = StyleSheet.create({
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
}
});

