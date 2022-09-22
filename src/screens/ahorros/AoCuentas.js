import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React,{Component} from 'react'


const { width, height } = Dimensions.get('window')

class AoCuentas extends Component {
  state = { user: ''}
  updateUser = (user) =>{
    this.setState({user:user})
  }
  render(){
    return(

    <>
    <View style={styles.card}>
    <Picker  itemStyle={{color:'white'}}  selectedValue ={this.state.user} onValueChange = {this.updateUser}>
      <Picker.Item label = "Selecionar cuenta" value = "Nr"/>
      <Picker.Item label = "1210200117 Detalle Ahorro libre" value = " 1210200117"/>
      <Picker.Item label = "1210200" value = " 1210200"/>
      <Picker.Item label = "12102444447" value = " 12102444447"/>
    </Picker>
    </View>
    

    <View style={styles.cardView}>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> NR {this.state.user}</Text>
        <Text style={styles.itemDescription}>Caja de ahorros</Text>
        <Text style={styles.itemSaldo}> SALDO 5922 bs.</Text>
      </View>
    </View> 
    </>
    )
  } 
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c8e1ff',
    height: 60,
    margin: 10,
    borderRadius: 16,
  },
  cardView: {
    flex: 0.4,
    width: width - 20,
    height: height / 23,
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
}
});

export default AoCuentas;