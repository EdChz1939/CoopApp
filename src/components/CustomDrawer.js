import { StyleSheet, Text, View, ImageBackground, Image, Dimensions} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

const {width} = Dimensions.get('screen');

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
        <ImageBackground style={{height:140}} source = {require('../assets/cobbe.jpg')}>
        <Image style={styles.userImg} source = {require('../assets/foto.jpg')} />
        </ImageBackground>
        <View style={styles.drawerListWrapper}>
            <DrawerItemList {... props}/>
        </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({

    userImg:{
        width: 110,
        height: 110,
        borderRadius : 100/2,
        position : 'absolute',
        left: width / 2 - 110,
        bottom: -110/2,
        borderWidth: 4,
        borderColor: '#fff'
    },

    drawerListWrapper:{

        marginTop: 110/2 +10,
    }
})