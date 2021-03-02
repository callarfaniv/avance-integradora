import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/screens/Inicio';
import Login from './src/screens/Login';
import Registro from './src/screens/Registro';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicio'>
                <Stack.Screen name='Inicio' component={Inicio} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Registro' component={Registro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
