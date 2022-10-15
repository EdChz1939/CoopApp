import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {ROUTES} from '../utils'
import {UsuarioLogin } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import DrawerNavigation from './DrawerNavigation'
import { AuthContext } from '../context/AuthContext';


const Stack = createStackNavigator();



function AuthNavigator() {
  const {userInfo} = useContext(AuthContext);
  
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={ROUTES.LOGIN}>
          {userInfo.accessToken? (
            <>
              <Stack.Screen name={ROUTES.HOME} 
                component = {DrawerNavigation}
                options= {{headerShown:false}}/>
            </>
          ):
              <Stack.Screen name={ROUTES.LOGIN} component = {UsuarioLogin}/>
          }
    </Stack.Navigator>
  );
}

export default AuthNavigator;
const styles = StyleSheet.create({})