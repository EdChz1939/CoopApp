import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity, Button  } from 'react-native'
import React,{Component, useState, useEffect} from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
const { width, height } = Dimensions.get('window')


function SearchComponent() {
  return (
    <View style={{ flex: 1 }}>Search Bar</View>
  );
}

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

  const optionsPerPage = [0];
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[10]);

  return (
    <>
    <View style={styles.background}>
    <ScrollView>
  
    
    <View style={styles.cardView}>
      

    
        <View style={styles.textView}>
        <Text style={styles.itemTitle}>NR  </Text> 
        <Text style={styles.itemDescription}>false</Text>
        <Text style={styles.itemSaldo}></Text>
        
        <TouchableOpacity onPress={signin}>
          <Text style={styles.btnText}>Mes</Text>
      </TouchableOpacity>
      <TouchableOpacity >
          <Text style={styles.btnText}>Anio</Text>
      </TouchableOpacity>
     
      </View>
    </View>


    <View style={styles.cardViewTable}>
    <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title   textStyle={styles.text}>Fecha</DataTable.Title>
          <DataTable.Title  textStyle={styles.text}>Glosa</DataTable.Title>
          <DataTable.Title numeric  textStyle={styles.text}>importe</DataTable.Title>
        </DataTable.Header>
      
        <DataTable.Row >
          <DataTable.Cell  textStyle={styles.text}>1111111</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text}>DEPSOITO</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text} numeric>123</DataTable.Cell>
        </DataTable.Row>
           
        <DataTable.Row >
          <DataTable.Cell  textStyle={styles.text}>1111111</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text}>DEPSOITO</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text} numeric>123</DataTable.Cell>
        </DataTable.Row>

           
        <DataTable.Row >
          <DataTable.Cell  textStyle={styles.text}>1111111</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text}>DEPSOITO</DataTable.Cell>
          <DataTable.Cell textStyle={styles.text} numeric>123</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
      
       
      </DataTable>
      </View>
    </ScrollView>
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












  container: {

    padding: 16,
     paddingTop: 30, 
     backgroundColor: '#fff'
    },
 head: {
    height: 40, 
   backgroundColor: '#f1f8ff'
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

